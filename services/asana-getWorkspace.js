// Service - Asana API Workspace

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = process.env.ASANA_TOKEN;

async function getWorkspace(){
    let workspacesApiInstance = new Asana.WorkspacesApi();
    let opts = { 
        'limit': 50, 
        // 'offset': "", 
        'opt_fields': "email_domains,is_organization,name,offset,path,uri"
    };
    
    const result = await workspacesApiInstance.getWorkspaces(opts);
    return result.data 
};

module.exports = getWorkspace;