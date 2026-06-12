import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            required:true,
            type:String,
            unique:true
        },
        shortCode: {
            required:true,
            unique:true,
            type:String
        },
        numberOfClicks: {
            type:Number,
            default:0
        }
    },
    {
        timestamps:true
    }
)

const Url =  mongoose.model("Url",urlSchema);
export default Url;