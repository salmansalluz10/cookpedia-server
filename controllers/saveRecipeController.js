const saveRecipes = require("../models/saveRecipeModel")

// add to collection
exports.addToSaveRecipeController = async(req,res)=>{
    console.log("inside addToSaveRecipeController");
    const {id} = req.params
    const userId = req.userId
    const {name,image} = req.body
    console.log(id,userId,name,image);
    try{
        // check recipe already in save?
        const existingrecipe = await saveRecipes.findOne({recipeId:id,userId})
        if(existingrecipe){
            res.status(406).json("Recipe already in your collection !!")
        }else{
            //add recipe to model
            const newRecipe = new saveRecipes({recipeId:id,name,image,userId})
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }

}

// get recipe collection authorized user

exports.getUserRecipeController = async(req,res)=>{
    console.log("inside getUserRecipeController");
    const userId = req.userId
    try{
        const userRecipeCollection = await saveRecipes.find({userId})
        res.status(200).json(userRecipeCollection)
    }catch(err){
        res.status(401).json(err)
    }
}

    // remove recipe collection authorized user

exports.removeUserRecipeController = async(req,res)=>{
    console.log("inside removeUserRecipeController");
    const {id} = req.params
    try{
        const removeSaveRecipe = await saveRecipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeSaveRecipe)
    }catch(err){
        res.status(401).json(err)
    }

}