"use client"

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1, {message: "Email is required"}).email({message: "Must be a valid email"}),
  password: z
    .string()
    .min(6, {message: "Password must be atleast 6 characters"}),
  confirmPassword: z
    .string()
    .min(1, {message: "Confirm Password is required"}),

}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password don't match",
});

type ValidationSchema = z.infer<typeof formSchema>

export default function RegisterPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
  });
 
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  }, [])

  if(!mounted){ return ''}

  const registerUser: SubmitHandler<ValidationSchema> = async (data) => {
    const res = await fetch ('/api/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({data})
    })

    const userInfo = await res.json() 
    console.log(userInfo)
    redirect('http://app.localhost/')
  }

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/logo-allblack.png"
            alt="Your Company"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register to Branch with us
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(registerUser)}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.name?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.email?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-xs italic text-red-500 mt-2">
                    {errors.password?.message}
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Reconfirm Password 
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                <p className="text-xs italic text-red-500 mt-2">
                  {errors.confirmPassword?.message}
                </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
