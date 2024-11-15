// Service - Asana API Sections

const Asana = require('asana');
let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
// token.accessToken = process.env.ASANA_TOKEN;
// const project_gid = process.env.ASANA_PROJECT_ID

const { optsGetSections } = require('./opts/asana-optsParameters')

async function getSections(userToken, project_gid) {
    token.accessToken = userToken
    project_gid = project_gid
    
    // Start Api Instance
    let sectionsApiInstance = new Asana.SectionsApi();

    // Parameters
    let opts = {
        'limit': 50,
        'opt_fileds': optsGetSections
    
    }; // End opts

    // Main
    try {
        const result = await sectionsApiInstance.getSectionsForProject(project_gid, opts)
        return result.data
    } // End Try 
    catch(error){
        if (error.response && error.response.body) {
            console.error(error.response.body)
            return(error.response.body)
        } else (console.error("FATAL - Unexpected error" + error))
    } // End Try / Catch


} //End getSections

module.exports = getSections;