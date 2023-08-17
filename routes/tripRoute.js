const express=require("express")
const {TripModel}=require("../models/tripModel")
const tripRouter=express.Router()
// post
tripRouter.post("/",async(req,res)=>{
   try {
    
    const tripData=new TripModel(req.body)
    await tripData.save()
    res.send({msg:"data added sucessfully"})
   } catch (error) {
    console.log("error")
   }
})

tripRouter.get("/",async(req,res)=>{
    try {
        console.log(req.query)
        if(req.query.destination){
            if(req.query.sort=="asc"){
                const data=await TripModel.find({destination:req.query.destination}).sort({budgetperperson:req.query.sort})
            res.send({data:data})
            } else if(req.query.sort=="desc"){
                const data=await TripModel.find({destination:req.query.destination}).sort({budgetperperson:req.query.sort})
            res.send({data:data})
            }else{
                const data=await TripModel.find({destination:req.query.destination})
                res.send({data:data})
            }
        
            

        }else if(req.query.sort){
            if(req.query.sort=="asc"){
                const data=await TripModel.find().sort({budgetperperson:req.query.sort})
            res.send({data:data})
            } else if(req.query.sort=="desc"){
                const data=await TripModel.find().sort({budgetperperson:req.query.sort})
            res.send({data:data})
            }
        }
        else{
            const data=await TripModel.find()
            res.send({data:data})
        }
       
    } catch (error) {
        res.send({msg:error})
    }
})

tripRouter.delete("/:id",async(req,res)=>{
    try {
        await TripModel.findByIdAndDelete(req.params.id)
        res.send({msg:"sucessfully deleted"})
    } catch (error) {
        res.send({msg:error})
    }
})



module.exports={tripRouter}