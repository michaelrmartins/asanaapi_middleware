// Service - Asana API Teams

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = process.env.ASANA_TOKEN;
const workspace_gid = process.env.ASANA_WORKSPACE_GID

async function getTeams() {
    console.log(workspace_gid)
    // start Api Instance
    let teamsApiInstance = new Asana.TeamsApi();

    let opts = {
        'limit': 50,
        'opt_fields': "description,edit_team_name_or_description_access_level,edit_team_visibility_or_trash_team_access_level,guest_invite_management_access_level,html_description,join_request_management_access_level,member_invite_management_access_level,name,offset,organization,organization.name,path,permalink_url,team_content_management_access_level,team_member_removal_access_level,uri,visibility"
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