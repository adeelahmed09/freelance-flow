import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },

    }
    ,
    {
        timestamps: true,
    })

const User = models.User || model("User", userSchema)
export default User