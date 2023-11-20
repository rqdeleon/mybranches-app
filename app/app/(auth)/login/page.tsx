import { Suspense } from "react";
import Image from "next/image";

import CredentialForm from "./credential"
import LoginButton from "./login-button";


export default function LoginPage() {


  return (
    <div className="mx-5 border border-stone-200 py-10 dark:border-stone-700 sm:mx-auto sm:w-full sm:max-w-md sm:rounded-lg sm:shadow-md">
      <Image
        alt="Branch your brand online"
        width={100}
        height={100}
        className="relative mx-auto h-12 w-auto dark:scale-110 dark:rounded-full dark:border dark:border-stone-400"
        src="/logo-allblack.png"
      />
      <h1 className="mt-6 text-center font-cal text-3xl dark:text-white">
        Branches
      </h1>
      <p className="mt-2 text-center text-sm text-stone-600 dark:text-stone-400">
        Build your Site and Brand, Sell your product now! <br />
      </p>

       <CredentialForm />

      <div className="flex items-center mb-3 px-4 my-5 text-gray-600">
        <hr className="h-0 border-b border-solid border-gray-400/30 grow" />
        <p className="mx-4 text-grey-600">or continue with</p>
        <hr className="h-0 border-b border-solid border-gray-400/30 grow" />
      </div>
      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense
          fallback={
            <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
          }
        >
          <LoginButton />
        </Suspense>
      </div>
      <div className="mx-auto mt-4 w-11/12 max-w-xs sm:w-full">
        <Suspense
          fallback={
            <div className="my-2 h-10 w-full rounded-md border border-stone-200 bg-stone-100 dark:border-stone-700 dark:bg-stone-800" />
          }
        >
        </Suspense>
      </div>

    </div>
  );
}
