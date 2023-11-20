"use client"
import NextImage from 'next/image'

import BlurImage from '@/components/blur-image'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'


function MainBanner() {

	const words: String[] = [
		'Brand',
		'Product',
		'Ebook',
		'Article',
		'Blogs',
	]

	const [counter, setCounter ] = useState(0)
	
	useEffect(()=>{	
		setTimeout(()=>{
		(counter < words.length )? setCounter( counter + 1) : setCounter(0)
		}, 2000)
	}, [counter, words.length])


  return (
    <section className={cn("mt-20 h-screen w-full bg-white font-default")}>
		<div className="container px-10 mx-auto flex flex-col items-center justify-center overflow-hidden mb-10">
			<div className="relative min-h-[350px] mb-10 w-full max-w-screen-lg md:mb-12 md:h-150 md:w-5/6 md:rounded-2xl lg:w-2/3">
				<BlurImage
					fill
					alt={"User Avatar"}
					src='/webbuilder.svg'
					className="object-cover"
				/>
			</div>
			<div className="my-10 text-center">
				<h3 className="text-5xl sm:text-7xl text-slate-900 font-extrabold animate-in">
					Branch online your <span className="text-cyan-800 animate-pulse">{ (words[counter] != null)? words[counter] : words[0]}</span> in a minute <br />
				</h3>
				<h2 className='text-slate-400 text-4xl md:text-5xl font-extrabold mb-11'>Build your site & sell product with AI and no-code tool</h2>
	
				<button className="border rounded-xl bg-cyan-800 text-xl drop-shadow-md text-white py-5 px-7 w-full md:w-auto">
					Get started for free
				</button>
			</div>
		</div>
    </section>
  )
}

export default MainBanner