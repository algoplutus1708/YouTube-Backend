import mongoose , {Schema} from "mongoose";

const subscriptionSchema = new Schema(
    {
        subscriber: {
            type: Schema.Types.ObjectId,// One who is subscribing
            ref: "User",
            required: true
        },
        channel: {
            type: Schema.Types.ObjectId,// One to whom "subscriber" is subscribing
            ref: "Video",
            required: true
        },
    },{timestamps:true})

export const Subscription = mongoose.model("Subscription",subscriptionSchema)