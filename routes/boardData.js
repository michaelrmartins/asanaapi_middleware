// Board data File

const express = require('express')
const router = express.Router();
const asanaServiceBoard = require('../services/asana-getWorkspace')

router.get('/workspace', async (req, resp) => {
    const workspace = await asanaServiceBoard();
    resp.status(200).send(workspace)
    console.log("finished")
})

router.get("/teams", (req,resp) => resp.status(200).send("Teams."))
router.get("/projects", (req, resp) => resp.status(200).send("Projects."))
router.get("/sections", (req, resp) => resp.status(200).send("Sections."))
router.get("/tasks", (req, resp) => resp.status(200).send("Tasks."))

module.exports = router;