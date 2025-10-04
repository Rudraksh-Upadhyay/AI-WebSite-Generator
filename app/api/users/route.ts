import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const user = await currentUser();

    //if user already exists ?
    //@ts-ignore
    const userResult = await db.select().from(usersTable).where(eq(usersTable.email,user?.primaryEmailAddress?.emailAddress))



    //if not then insert new user
    if(userResult?.length ==0){
        const data = {
            name:user?.fullName??"NA",
            email:user?.primaryEmailAddress?.emailAddress??"",
            credits:2
        }
        const result=await db.insert(usersTable).values({
            // name:user?.firstName??"NA",
            // email:user?.primaryEmailAddress?.emailAddress??"",
            ...data
        })
        return NextResponse.json({user: data});
    }


    return NextResponse.json({user: userResult[0]});
}