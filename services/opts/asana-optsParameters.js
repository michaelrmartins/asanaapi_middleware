// opts parameters list

const optsGetProjects = `
    name, completed
`; //End

const optsGetSections = `
    created_at,name,offset,
    path,project,project.name,
    projects,projects.name,uri

`; //End

const optsGetTasks = `
    assignee.name,completed_by.name,
    created_at,created_by,name,notes,tags.name,completed

`; // End

const optsGetTeams = `
    description,edit_team_name_or_description_access_level,
    edit_team_visibility_or_trash_team_access_level,
    guest_invite_management_access_level,html_description,
    join_request_management_access_level,member_invite_management_access_level,
    name,offset,organization,organization.name,path,permalink_url,
    team_content_management_access_level,team_member_removal_access_level,uri,visibility
`; // End

const optsGetWorkspace = `
    email_domains,is_organization,name,offset,path,uri
`; // End


module.exports = { 
    optsGetProjects,
    optsGetSections,
    optsGetTasks,
    optsGetTeams,
    optsGetWorkspace
}