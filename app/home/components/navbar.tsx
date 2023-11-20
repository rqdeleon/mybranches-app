"use client"
import Link from "next/link";
import Image from "next/image";

import MainNav from "./main-nav";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/60 z-10 shadow-md dark:border-b dark:border-zinc-700">
      <div className="container flex h-20 items-center px-4">
        <div className="mr-5">
            <Link
              href='/'
              className="flex space-x-4 items-center"
            > 
              <div className=" relative bg-white p-2 w-7 h-7">
                <Image
                  fill
                  src="/logo-allblack.png"
                  alt="mybranch-Logo"
                  className="object-fit object-contain"
                />
              </div>
              <h2 className="text-3xl font-semibold">Branches</h2>
            </Link>
        </div>
        <div className="hidden sm:flex w-full items-center justify-end space-x-4 mr-5">
          <MainNav className="mx-6 space-x-4" />

        </div>
      </div>
    </nav>
  )
}