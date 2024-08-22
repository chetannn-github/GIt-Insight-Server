import mongoose, { Schema } from 'mongoose'


const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
        },
        name:{
            type:String,   
        },
        profileUrl:{
            type:String
        },
        avatarUrl:{
            type:String
        },
        likedBy:[
            {
                username:{
                    type:String,
                },
                avatarUrl:{
                    type:String
                },
                likedDate: {
                    type: Date,
                    default: Date.now,
                },
            }
        ],
        likedProfiles:{
            type:[Schema.Types.ObjectId]
        },

    },
    {   timestamps: true  }
);

const User = mongoose.model("User",userSchema);
export default User;