// Service - Asana API Tasks

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = process.env.ASANA_TOKEN;
const section_gid = process.env.ASANA_SECTION_ID

async function getTasks() {
    // Start Api Instance
    let tasksApiInstance = new Asana.TasksApi();
    let opts = {
        'limit': 50,
        'completed_since': "2012-02-22T02:06:58.158Z", 
        'opt_fields': "assignee.name,completed_by.name,created_at,created_by,name,notes"
    }; // End opts

    // Main
    try {
        const result = tasksApiInstance.getTasksForSection(section_gid, opts);
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