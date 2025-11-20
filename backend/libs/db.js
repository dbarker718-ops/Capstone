import mongoose from "mongoose";


const DBCon=async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URL)
          console.log('MONGODB IS CONNECTED')
    } catch (error) {
        console.log(error)
    }
}

export default DBCon