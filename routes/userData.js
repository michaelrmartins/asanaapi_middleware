// User data File

const express = require('express')
const router = express.Router();

router.get("/data", (req, resp) => resp.status(200).send("User Data"))

module.exports = router;