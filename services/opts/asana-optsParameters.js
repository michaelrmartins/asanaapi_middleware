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
    actual_time_minutes,approval_status,assignee,
    assignee.name,assignee_section,assignee_section.name,
    assignee_status,completed,completed_at,completed_by,
    completed_by.name,created_at,created_by,custom_fields,
    custom_fields.asana_created_field,custom_fields.created_by,
    custom_fields.created_by.name,custom_fields.currency_code,
    custom_fields.custom_label,custom_fields.custom_label_position,
    custom_fields.date_value,custom_fields.date_value.date,
    custom_fields.date_value.date_time,custom_fields.description,
    custom_fields.display_value,custom_fields.enabled,custom_fields.enum_options,
    custom_fields.enum_options.color,custom_fields.enum_options.enabled,
    custom_fields.enum_options.name,custom_fields.enum_value,
    custom_fields.enum_value.color,custom_fields.enum_value.enabled,
    custom_fields.enum_value.name,custom_fields.format,
    custom_fields.has_notifications_enabled,custom_fields.id_prefix,
    custom_fields.is_formula_field,custom_fields.is_global_to_workspace,
    custom_fields.is_value_read_only,custom_fields.multi_enum_values,
    custom_fields.multi_enum_values.color,custom_fields.multi_enum_values.enabled,
    custom_fields.multi_enum_values.name,custom_fields.name,custom_fields.number_value,
    custom_fields.people_value,custom_fields.people_value.name,custom_fields.precision,
    custom_fields.representation_type,custom_fields.resource_subtype,
    custom_fields.text_value,custom_fields.type,dependencies,dependents,
    due_at,due_on,external,external.data,followers,followers.name,hearted,
    hearts,hearts.user,hearts.user.name,html_notes,is_rendered_as_separator,
    liked,likes,likes.user,likes.user.name,memberships,memberships.project,
    memberships.project.name,memberships.section,memberships.section.name,modified_at,
    name,notes,num_hearts,num_likes,num_subtasks,offset,parent,parent.created_by,parent.name,
    parent.resource_subtype,path,permalink_url,projects,projects.name,resource_subtype,start_at,
    start_on,tags,tags.name,uri,workspace,workspace.name
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