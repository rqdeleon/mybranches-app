import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav({className, ...props}:React.HTMLAttributes<HTMLElement> ){
	const pathName = usePathname();
	
	const navigation = [
		{ 
			slug: "Contact",
			href: "/contact",
			active: pathName == `/contact`
		},
		{ 
			slug: "About",
			href: "/about",
			active: pathName == '/about'
		},
		{ 
			slug: "Pricing",
			href: "/price",
			active: pathName == '/price'
		},
		{ 
			slug: "Login",
			href: `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/login`,
			active: pathName == `http://app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/login`
		},
		{ 
			slug: "Register",
			href: "/register",
			active: pathName == 'https:/store.mybranches.net'
		},
	];

	return (
		<nav 
			className=""
			{...props}
		>
			<ul className={cn("items-center", className)}>
			{navigation.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn("text-md font-semibold text-foreground/60 hover:text-foreground duration-500", item.active ? "text-black font-bold dark:text-white": "text-foreground/60")}
				>
					{item.slug}
				</Link>
			))}
		</ul>
		</nav>
	);
};


