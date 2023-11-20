"use client"
import Image from 'next/image'

import { cn } from '@/lib/utils'


export default function Features({
    className,
    ...props
}:React.HTMLAttributes<HTMLElement>) {
  return (
    <section className="w-full font-default text-2xl leading-7">
        <div 
            className={cn("container px-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20", className)}
            {...props}
        >

            <div className="flex-row items-center justify-center">
                <h3 className="text-3xl mb-10">
                    Just a few clicks and types you could start selling on your own website now! and its FREE
                </h3>
            </div>
            <div>
                <section className="flex items-center w-full">
                        <div className="aspect-square mr-10">
                            <Image
                                width={75}
                                height={75}
                                alt=" "
                                src="/images/icons/social-media.png"
                            />
                        </div>
                        <div className="">
                            <h4 className="font-bold mb-2">
                                Manage your Leads
                            </h4>
                            <p className="text-foreground/70">
                                See who&apos;s signing up, who&apos;s paying, and what they are shopping, so you can get a better understanding of your core customer.
                            </p>
                        </div>
                </section>

                <section className="flex items-center w-full mt-10">
                    <div className="aspect-square mr-10">
                        <Image
                            width={75}
                            height={75}
                            alt=" "
                            src="/images/icons/business.png"
                        />
                    </div>
                    <div className="">
                        <h4 className="font-bold mb-2">
                            Sell Everywhere
                        </h4>
                        <p className="text-foreground/70">
                            Upscale your business without spending too much effort and resources on e-commerce, on our branch we secure your brand
                        </p>
                    </div>
                </section>

                <section className="flex items-center w-full mt-10">
                    <div className="aspect-square mr-10">
                        <Image
                            width={65}
                            height={65}
                            alt=" "
                            src="/images/icons/dashboard.png"
                        />
                    </div>
                    <div className="">
                        <h4 className="font-bold mb-2">
                            Empowered Dashboard
                        </h4>
                        <p className="text-foreground/70">
                            Understand what&apos;s working. Detailed selling analytics for your business.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    </section>
  )
}
