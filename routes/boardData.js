// Router - Board data File

const express = require('express')
const router = express.Router();
const ServiceBoardGetWorkspace = require('../services/asana-getWorkspace')
const ServiceBoardGetProjects = require('../services/asana-getProjects')
const ServiceBoardGetTeams = require('../services/asana-getTeams')
const ServiceBoardGetSections = require('../services/asana-getSections')
const ServiceBoardGeTasks = require('../services/asana-getTasks')

router.post('/workspace', async (req, resp) => {
    const userToken = req.body.userToken;
    const workspace = await ServiceBoardGetWorkspace(userToken);
    resp.status(200).send(workspace)
    console.log("Finished, Workspace")
}) // End Workspace

// Need's Token and Workspace Gid
router.post("/teams", async (req, resp) => {
    const userToken = req.body.userToken;
    const workspace_gid = req.body.workspace_gid;
    const teams = await ServiceBoardGetTeams(userToken, workspace_gid);
    resp.status(200).send(teams);
    console.log("Finished, Teams")
}) //End Teams.

router.post("/projects", async (req, resp) =>{
    const userToken = req.body.userToken;
    const workspace_gid = req.body.workspace_gid;
    const team_gid = req.body.team_gid;
    const projects = await ServiceBoardGetProjects(userToken, workspace_gid, team_gid);
    resp.status(200).send(projects)
    console.log("Finished, Projects")
}) // End Projects

router.post("/sections", async (req, resp) => {
    const userToken = req.body.userToken;
    const project_gid = req.body.project_gid;
    const sections = await ServiceBoardGetSections(userToken, project_gid);
    resp.status(200).send(sections)
    console.log("Finished, Sections")
}) // End Sections

router.post("/tasks", async (req, resp) => {
    const userToken = req.body.userToken;
    const section_gid = req.body.section_gid;
    const tasks = await ServiceBoardGeTasks(userToken, section_gid);
    resp.status(200).send(tasks)
    console.log("Finished, Tasks")
}) //  end Tasks

module.exports = router;