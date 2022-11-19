
import mongoose from "mongoose";
const UserModel = mongoose.model("USER_SCHEMA");

class Routes{

    getUserRoutes(app:any){
        
        app.post("/postUser",(req:any,res:any)=>{
            const userModel = new UserModel(req.body.where);
            userModel.save((err,docs)=>{
                if(!err){
                    res.status(200).json({"status":true})
                }else{
                    res.status(400).json({"status":false})
                }
            })
        })

        app.post("/getUser",async(req:any,res:any)=>{
            const currentUser = await UserModel.findOne(req.body.where);
            res.status(200).json(currentUser)
        })

        app.put("/putUser",async(req:any,res:any)=>{
            const currentUser = await UserModel.findOne(req.body.where);
            if (currentUser){
                await UserModel.replaceOne(currentUser.toObject(),req.body.where);
            }else{
                const userModel = new UserModel(req.body.where);
                userModel.save((err,docs)=>{
                    if(!err){
                        res.status(200).json({"status":true})
                    }else{
                        res.status(400).json({"status":false})
                    }
                })
            }
        })

    }
}

module.exports = new Routes();