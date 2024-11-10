// Service - Asana API Projects

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
// token.accessToken = process.env.ASANA_TOKEN;

const { optsGetProjects } = require('./opts/asana-optsParameters')

async function getProject(userToken, workspace_gid, team_gid) {
    token.accessToken = userToken
    workspace_gid = workspace_gid
    team_gid = team_gid
    // Start Api Instance
    let projectsApiInstance = new Asana.ProjectsApi();
    
    // Parameters
    let opts = {
        'limit':50,
        'workspace': workspace_gid,
        'team':team_gid,
        'archived': false,
        'opt_fields': optsGetProjects
    };

    // Main
    try {
         const result = await projectsApiInstance.getProjects(opts);
         // console.log(result.data)
         return result.data
         } catch (error) {
            if (error.response && error.response.body){ 
                // Error Content
                console.error(error.response.body)
            } else { console.error("FATAL - Unexpected error" + error)} 
         } // End Try 
} // End Getproject

module.exports = getProject;