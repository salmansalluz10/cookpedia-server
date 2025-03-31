const testimonials = require('../models/testimonyModel');
const { getAllDownloadRecipeController } = require('./downloadRecipeController');

//add testimony

exports.addTestimonyController = async(req,res)=>{
    console.log("inside addTestimonyController");
    const {name,email,message} = req.body
    try{
        const newTestimony = new testimonials({
            name,email,message
        })
        await newTestimony.save()
        res.status(200).json(newTestimony)
    }catch(err){
        res.status(401).json(err)
    }
    
}

//get all  testimony

exports.getAllTestimonyController = async(req,res)=>{
    console.log("inside getAllTestimonyController");
    try{
        const allFeedback = await testimonials.find()
        res.status(200).json(allFeedback)
    }catch(err){
        res.status(401).json(err)
    }
    
}

//update status testimony

exports.updateTestimonyStatusController = async(req,res)=>{
    console.log("inside updateTestimonyStatusController");
    // get feedback id by url params
    const {id} = req.params
    // get status of feedback from url query
    const status = req.query.status
    try{
        const exisitingFeedback = await testimonials.findById({_id:id})
        exisitingFeedback.status = status
        await exisitingFeedback.save()
        res.status(200).json(exisitingFeedback)
    }catch(err){
        res.status(401).json(err)
    }
    
}

//get approved testimony

exports.getApprovedTestimonyController = async(req,res)=>{
    console.log("inside getApprovedTestimonyController");
    try{
        const allFeedback = await testimonials.find({status:"Approved"})
        res.status(200).json(allFeedback)
    }catch(err){
        res.status(401).json(err)
    }
    
}