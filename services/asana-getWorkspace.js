// Service - Asana API Workspace

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
//  token.accessToken = process.env.ASANA_TOKEN;

const { optsGetWorkspace } = require('./opts/asana-optsParameters')

async function getWorkspace(userToken){
    token.accessToken = userToken
    let workspacesApiInstance = new Asana.WorkspacesApi();
    let opts = { 
        'limit': 50, 
        // 'offset': "", 
        'opt_fields': optsGetWorkspace
    };
    try {
    const result = await workspacesApiInstance.getWorkspaces(opts);
    return result.data 
    } // End try
    catch(error) {

        if(error.response && error.response.body)
        {
            console.error(error.response.body)
            return error.response.body
        } else {console.error(error)}
    } // End Try / Catch
};

module.exports = getWorkspace;