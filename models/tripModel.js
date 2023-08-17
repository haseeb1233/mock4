const mongoose=require("mongoose")


const tripSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true
    },
    destination:String,
    nooftravelers:Number,
    budgetperperson:Number,
})

const TripModel=mongoose.model("trip",tripSchema)

module.exports={TripModel}