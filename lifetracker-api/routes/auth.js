const express = require("express")

const router = express.Router()

router.post("/login", async (req, res, next) => {
    try {
        //take user email and password and authenticate
        
    }
    catch (err)
    {
        next(err)
    }
})

router.post("/register", async (req, res, next) => {
    try {
        //Take user email and others to create new account
        
    }
    catch (err)
    {
        next(err)
    }
})