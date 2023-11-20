import { cn } from "@/lib/utils";
import { ArrowUpLeft, ArrowUpRight, Check } from "lucide-react";

export default function PricingCard() {
    const prices = [
        {
            title: 'Free',
            price: '0',
            features: ['Free Sub Domain', 'One ECommerce Store','One Page Site', '3 Products','Free Payment Gateway Setup', 'limited bandwidth','SSL','Serverless Function', 'AI Functions'],
            isRecommended: false,
            year:0,
        },
        {
            title: 'Pro',
            price: '989',
            features: ['Everything in Free', '5 Pages Site', '10 Products','Custom Domain','Social Media Integration','Personalize Payment Gateway Setup', 'Moderate bandwidth','Customers Data Analytic'],
            isRecommended: true,
            year:0,
        },
        {
            title: 'Enterprise',
            price: 'Custom',
            features: ['Everything in Pro', '10 ECommerce Store', 'unlimited Products', 'unlimited bandwidth','Advertisement','Team Access','Business Email', 'Prioritize Support'],
            isRecommended: false,
            year:0,
        },
    ];
  return (
    <>
      <div className="min-h-screen pt-24 md:pt-0 flex justify-center items-center">
        <div className="">
            <div className="text-center font-bold">
                <h1 className="text-5xl">
                    <span className="text-cyan-800 tracking-wide">Branch </span>
                    <span>your business with us</span>
                </h1>
                <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                    Choose a plan that works best for your company.
                </p>
            </div>
            <div className="pt-16 flex flex-col md:flex-row items-center">
              {prices.map((price)=>(
                <div key={price.title} className={cn("text-center rounded-3xl shadow-xl my-2 w-full md:w-96 ", price.isRecommended ? "p-8 bg-gray-900 text-white md:border-white md:transform md:scale-125 md:border-4" : " bg-white border-2 py-8 pr-16 pl-14 " )}>
                  <h1 className={cn("font-semibold text-2xl", price.isRecommended ? "text-white mt-5" : "text-black ")}>{price.title}</h1>
                  <p className="pt-2 tracking-wide">
                    <span className="text-gray-400 align-top">$ </span>
                    <span className="text-3xl font-semibold">{price.price}</span>
                    <span className="text-gray-400 font-medium">/ month</span>
                  </p>
                  <hr className="mt-4 border-1" />
                  <div className="pt-8">
                      {price.features.map((feat)=>(
                        <p key={feat} className="flex font-semibold text-gray-400 text-left">
                          <Check className="align-middle" />
                          <span className="pl-2">
                            {feat}
                          </span>
                        </p>
                      ))}
                      <a href="#" className="">
                            <p className="w-full py-4 bg-cyan-800 mt-8 rounded-xl text-white flex items-center justify-center">
                                <span className="font-medium">
                                    Get started
                                </span>
                                <ArrowUpRight className="pl-2 align-middle text-sm" />
                            </p>
                        </a>
                  </div>
                  <div className={cn("", price.isRecommended ? "hidden md:flex absolute top-4 right-4" : "hidden")}>
                    <p className="bg-cyan-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                  </div>
                </div>
              ))}

            </div>
        </div>
      </div>
    </>
  )
}
