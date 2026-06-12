import mongoose from "mongoose";
import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();
console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI).then(() => {

    console.log("MONGODB CONNECTED");

    app.listen(process.env.PORT , () =>{
        console.log(`Server is started at PORT ${process.env.PORT}`);
    })

    
})
.catch((err) => {
    console.log(err);
})

