const USER = {
    firstname: 'Nicholas',
    lastname: 'Hunt-Walker',
    email: 'nhuntwalker@gmail.com',
}

function buildProfileBlock() {
    // TODO: compile appropriate data on task lists
    let data = {
        user: USER,
        tasksLeft: sampleData.length,
        overdue: sampleData.length,
        completed: sampleData.length
    }
    $('#profile-page').append( compileTemplate(profileBlock, data) )
}

function buildProfileLists() {
    $('#profile-page').append( compileTemplate(profileLists) )
}
