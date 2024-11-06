// Routes - Index

const express = require('express')
const router = express.Router();

// Importing all Routes
const routeBoardData = require('./boardData');
const routeUserData = require('./userData');

router.use("/board", routeBoardData); 
router.use("/user", routeUserData)

router.get("/", (req, resp)=> resp.status(200).send("homepage."))

module.exports = router;