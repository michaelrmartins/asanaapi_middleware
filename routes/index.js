// Routes - Index

const express = require('express')
const router = express.Router();
const path = require('path')
// const wellcomePage = require('../views/wellcome.html')

// Importing all Routes
const routeBoardData = require('./boardData');
const routeUserData = require('./userData');

router.use("/board", routeBoardData); 
router.use("/user", routeUserData)

router.get("/", (req, resp)=> {
        resp.sendFile(path.join(__dirname, '../views/', 'wellcome.html'))
});

module.exports = router;