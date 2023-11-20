"use client"
import { signIn } from "next-auth/react";
import { useState, useEffect } from "react"
import { Suspense } from "react";


export default function CredentialForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  if(!mounted){ return ''}

  const loginUser = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn('credentials', {
      ...data,
      redirect: true,
    });
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={loginUser}>

      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={(e)=> {setData( {...data, email: e.target.value} )}}
            autoComplete="email"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Forgot password?
            </a>
          </div>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            onChange={(e)=> {setData( {...data, password: e.target.value} )}}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-800 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div>
      <Suspense
        fallback={
          <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
        }
      >
        <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-cyan-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            >
              Login
        </button>
      </Suspense>
      </div>
    </form>
  </div>
  )
}
