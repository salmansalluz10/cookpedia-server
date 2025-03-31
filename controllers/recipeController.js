const recipes = require("../models/recipeModel")

//get all recipes
exports.getAllRecipeController = async(req,res)=>{
    console.log("inside getAllRecipeController");
    try{
        const allrecipes = await recipes.find()
        res.status(200).json(allrecipes)
    }catch(err){
        res.status(401).json(err)
    }
}

//get a recipes Authorized user
exports.getARecipeController = async(req,res)=>{
    console.log("inside getARecipeController");
    // get dynamic value
    const {id} = req.params
    try{
        const recipeDetails = await recipes.findById({_id:id})
        res.status(200).json(recipeDetails)
    }catch(err){
        res.status(401).json(err)
    }
}


//related recipe Authorized user
exports.relatedRecipeController = async(req,res)=>{
    console.log("inside relatedRecipeController");
    const cuisine = req.query.cuisine
    try{
        const allrelatedRecipes = await recipes.find({cuisine})
        res.status(200).json(allrelatedRecipes)
    }catch(err){
        res.status(401).json(err)
    }
}


//add recipe Authorized user
exports.addRecipeController = async(req,res)=>{
    console.log("inside addRecipeController");
    const {name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType} = req.body
    try{
        const existingRecipe = await recipes.findOne({name})
        if(existingRecipe){
            res.status(406).json("Recipe Already in Collection!!")
        }else{
            const newRecipe = new recipes({
                name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType
            })
            await newRecipe.save()
            res.status(200).json(newRecipe)
        }
    }catch(err){
        res.status(401).json(err)
    }
}


//update recipe Authorized user
exports.updateRecipeController = async(req,res)=>{
    console.log("inside updateRecipeController");
    const {id} = req.params
    const {name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType} = req.body
    try{
        const updateRecipe = await recipes.findByIdAndUpdate({_id:id},{name, ingredients, instructions, prepTimeMinutes, cookTimeMinutes, servings, difficulty, cuisine, caloriesPerServing, image, mealType},{new:true})

        await updateRecipe.save()
        res.status(200).json(updateRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}

//delete recipe Authorized user
exports.deleteRecipeController = async(req,res)=>{
    console.log("inside deleteRecipeController");
    const {id} = req.params
    try{
        const removeRecipe = await recipes.findByIdAndDelete({_id:id})
        res.status(200).json(removeRecipe)
    }catch(err){
        res.status(401).json(err)
    }
}