import ConnectDB from "@/libs/ConnectDB";
import User from "@/models/user.models";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { username, email, name, id } = await req.json()
    console.log(username,email,name,id);
    if (!username && !email && !name) {
        return NextResponse.json({ message: "All fields are required" },{status:400});
    }
    try {
        const updateData = {};
        if (username) {
            updateData.username = username
        }
        if (email) {
            updateData.email = email
        }
        if (name) {
            updateData.name = name
        }
        await ConnectDB();
        if (username) {
            const isUserExisted = await User.findOne({ username })
            if (isUserExisted) {
                return NextResponse.json({ message: "User Name is already taken" },{status:400});
            }
        }
        const updatedUser = await User.findByIdAndUpdate(id,updateData, { new: true });
        return NextResponse.json({message:"Profile Updated!"},{status:200})
    } catch (error) {
        return NextResponse.json({ message: "Something went worng during updating!" },{error:error},{status:500});
    }
}