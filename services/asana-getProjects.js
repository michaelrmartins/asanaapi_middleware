// Service - Asana API Projects

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = process.env.ASANA_TOKEN;

async function getProject() {
    // Start Api Instance
    let projectsApiInstance = new Asana.ProjectsApi();
    
    // Parameters
    let opts = {
        'limit':50,
        'workspace': 1202026135844435,
        'team':"1202179066955855",
        'archived': false,
        'opt_fields': "name"
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