"use client"
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

export const Footer = () => {
  const footerNav = [
    {label: 'About', href: '/about'},
    {label: 'Pricing', href: '/price'},
    {label: 'Terms & Condition', href: '/terms'},
    {label: 'Privacy Policy', href: '/privacy'},
  ]
  return (
    <footer className="w-full mt-auto bg-dark-tremor-background-muted text-white py-10">
      <div className="container mx-auto">
        <div className="flex-row md:flex items-center justify-start">
            <h3 className="text-3xl tracking-tight">Branches</h3>
            <nav className="md:ml-10">
                <ul className="flex-row mt-5 md:flex sm:space-x-3">
                  {footerNav.map((nav)=>(
                      <li  key={nav.href} className=" text-white/60 hover:text-white"> <Link href={nav.href}>{nav.label}</Link> </li>
                  ))}
                </ul>
            </nav>
        </div>
  
        <div className="flex justify-between mt-10">
          <div>
            <p><Mail className="inline h-4 w-4 mr-2" />rqdeleon@mybranches.net</p>
            <p><MapPin className="inline h-4 w-4 mr-2" />Santa Rosa City, Laguna, Philippines</p>
          </div>

        </div>
        <div className="flex items-center justify-center py-3 text-white/40 border-t border-white/40 mt-3">
          <span>&copy; myBranches. all right reserve {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
