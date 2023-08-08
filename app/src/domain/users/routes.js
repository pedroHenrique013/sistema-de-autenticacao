const express = require('express');
const controller = require('./controller')
const router = express.Router();

router.get("/",function (req, res) {
    const result = controller.getAllUsers(req, res);
    return res.json({message:result})
})

router.post("/", function (req,res) {
    const result = controller.addUsers(req,res);
    return res.json({message: result})
})

router.post("/signin", function (req,res) {
    const result = controller.autenticationUser(req,res);
    return res.json({message: result})
})


module.exports = router;