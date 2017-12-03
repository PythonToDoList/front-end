function compileTemplate(tmp, data) {
    let render = Handlebars.compile(tmp)
    return render(data)
}

function clearMain() {
    $('main').empty()
}

function homeController() {
    clearMain()
    if ((localStorage.user && JSON.parse(localStorage.user).username && JSON.parse(localStorage.user).token)) {
        page.redirect('/tasks')
    } else {    
        $('#content').append(`<div id="auth"></div>`)
        $('#auth').append( compileTemplate(registration, {}) )
        $('#auth').append( compileTemplate(login, {}) )
        $('#login-form').on('submit', loginHandler)
        $('#registration-form').on('submit', registrationHandler)
    }
}

function taskController() {
    clearMain()
    $('#content').append(`<div id="list-page"></div>`)
    $('#content').append( compileTemplate(popupOverlay, {}) )
    $('#list-page').append( 
    `<div class="btn-block">
        <button type="button" class="btn-right btn-gray" id="new-task">Create a New Task</Button>
    </div>`
    )
    $('#list-page').append(`<div id="many-lists"></div>`)
    buildLists()
    $('#new-task').on('click', newTaskHandler)
}

function profileController() {
    clearMain()
    $('#content').append(`<div id="profile-page"></div>`)
    buildProfileBlock()
    buildProfileLists()
    $('#profile-page').append( compileTemplate(profileBtnBlock) )
}

function logoutController() {
    clearMain()
    localStorage.clear()
    page.redirect('/')
}