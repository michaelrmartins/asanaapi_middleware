// Service - Asana API Tasks

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
// token.accessToken = process.env.ASANA_TOKEN;
// const section_gid = process.env.ASANA_SECTION_ID

const { optsGetTasks } = require('./opts/asana-optsParameters')

async function getTasks(userToken, section_gid) {
    token.accessToken = userToken
    section_gid = section_gid
    
    // Start Api Instance
    let tasksApiInstance = new Asana.TasksApi();
    let opts = {
        'limit': 50,
        'completed_since': "2012-02-22T02:06:58.158Z", 
        'opt_fields': optsGetTasks
    }; // End opts

    // Main
    try {
        const result = await tasksApiInstance.getTasksForSection(section_gid, opts);
        return result;

    } // End Try
    catch(error)
    {
        if(error.response && error.response.body){
            console.error(error.response.body)
            return(error.response.body)
        } else (console.error("FATA - Unexpected error" + error))
    } // End try / catch
} // End GetTasks

module.exports = getTasks;