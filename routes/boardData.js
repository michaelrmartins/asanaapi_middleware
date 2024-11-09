// Router - Board data File

const express = require('express')
const router = express.Router();
const ServiceBoardGetWorkspace = require('../services/asana-getWorkspace')
const ServiceBoardGetProjects = require('../services/asana-getProjects')
const ServiceBoardGetTeams = require('../services/asana-getTeams')
const ServiceBoardGetSections = require('../services/asana-getSections')
const ServiceBoardGeTasks = require('../services/asana-getTasks')

router.get('/workspace', async (req, resp) => {
    const workspace = await ServiceBoardGetWorkspace();
    resp.status(200).send(workspace)
    console.log("finished")
}) // End Workspace

router.get("/teams", async (req, resp) => {
    const teams = await ServiceBoardGetTeams();
    resp.status(200).send(teams);
    console.log("Finished")
}) //End Teams

router.get("/projects", async (req, resp) =>{
    const projects = await ServiceBoardGetProjects();
    resp.status(200).send(projects)
    console.log("Finished, Projects")
}) // End Projects

router.get("/sections", async (req, resp) => {
    const sections = await ServiceBoardGetSections();
    resp.status(200).send(sections)
    console.log("Finished, Sections")
}) // End Sections

router.get("/tasks", async (req, resp) => {
    const tasks = await ServiceBoardGeTasks();
    resp.status(200).send(tasks)
    console.log("Finished, Tasks")
}) //  end Tasks

module.exports = router;