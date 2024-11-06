// Board data File

const express = require('express')
const router = express.Router();

router.get("/workspace", (req, resp) => resp.status(200).send("workspace"))
router.get("/teams", (req,resp) => resp.status(200).send("Teams."))
router.get("/projects", (req, resp) => resp.status(200).send("Projects."))
router.get("/sections", (req, resp) => resp.status(200).send("Sections."))
router.get("/tasks", (req, resp) => resp.status(200).send("Tasks."))

module.exports = router;