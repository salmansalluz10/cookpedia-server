const express = require('express')
const recipeController = require("../controllers/recipeController")

const testimonyController = require('../controllers/testimonyController')

const userController = require("../controllers/userController")

const saveRecipeController = require('../controllers/saveRecipeController')

const jwtMiddleware = require('../middlewares/jwtMiddleware')
const downloadRecipeController = require('../controllers/downloadRecipeController')

const router = new express.Router()

// all-recipes
router.get("/all-recipes",recipeController.getAllRecipeController)

// add-testimony
router.post("/all-testimony",testimonyController.addTestimonyController)

// add-user
router.post("/register",userController.addUserController)

// login
router.post("/login",userController.loginController)

// viw single recipes
router.get("/recipe/:id/view",recipeController.getARecipeController)

// related recipes
router.get("/related-recipes",recipeController.relatedRecipeController)

// download recipes
router.post("/recipe/:id/download",jwtMiddleware,downloadRecipeController.addToDownloadRecipeController)

// save recipes
router.post("/recipe/:id/save",jwtMiddleware,saveRecipeController.addToSaveRecipeController)

// get user save recipes
router.get("/get-save-recipes",jwtMiddleware,saveRecipeController.getUserRecipeController)

// delete user save recipes
router.delete("/save-recipes/:id/remove",jwtMiddleware,saveRecipeController.removeUserRecipeController)

// get user download recipes
router.get("/user-downloads",jwtMiddleware,downloadRecipeController.getUSerDownloadRecipeController)

// edit-user
router.post("/user/edit",jwtMiddleware,userController.editUserController)

// get-all-user
router.get("/all-users",jwtMiddleware,userController.getAllUserController)

// get-download list
router.get("/download-list",jwtMiddleware,downloadRecipeController.getAllDownloadRecipeController)

// get-testimony
router.get("/get-testimony",jwtMiddleware,testimonyController.getAllTestimonyController)

// update-testimony
router.get("/feedback/:id/update",jwtMiddleware,testimonyController.updateTestimonyStatusController)

// get-approved-testimony
router.get("/get-approved-testimony",jwtMiddleware,testimonyController.getApprovedTestimonyController)

// add-recipe
router.post("/add-recipe",jwtMiddleware,recipeController.addRecipeController)

// edit-recipe
router.put("/recipe/:id/edit",jwtMiddleware,recipeController.updateRecipeController)

// delete-recipe
router.delete("/recipe/:id/delete",jwtMiddleware,recipeController.deleteRecipeController)

module.exports = router