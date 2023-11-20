import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

import prisma from "@/lib/prisma";

export async function POST(req : Request){
	try {
		const body = await req.json()

    const {name, email , password } = body.data

    if( !name || !email || !password ){
      return new NextResponse("Name & Email & Passowrd are required", {status: 400})
    }

    const exist = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if(exist){
      return new NextResponse("Email already exist", {status: 400});
    }
    const hashPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashPassword,
      }
    })
		
    return NextResponse.json(user)

	} catch (error) {
    console.log('[USER_CREATE]', error);
    return new NextResponse("Internal error", { status: 500 });
			
	}


}