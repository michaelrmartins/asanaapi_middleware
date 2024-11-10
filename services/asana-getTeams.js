// Service - Asana API Teams

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
// token.accessToken = process.env.ASANA_TOKEN;
// const workspace_gid = process.env.ASANA_WORKSPACE_GID

const { optsGetTeams } = require('./opts/asana-optsParameters')

async function getTeams(userToken, workspace_gid) {
    token.accessToken = userToken
    workspace_gid = workspace_gid

    let teamsApiInstance = new Asana.TeamsApi();

    let opts = {
        'limit': 50,
        'opt_fields': optsGetTeams
    }; // End opts
    
    try {
        const result = await teamsApiInstance.getTeamsForWorkspace(workspace_gid, opts);
        return result.data 
    }// End Try 
    catch(error){
        if(error.response && error.response.body)
        {
            console.error(error.response.body)
            return error.response.body
        } else {console.error(error) }

    } // End try/catch

} // End getTeams

module.exports = getTeams;