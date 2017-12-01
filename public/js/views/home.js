function serializeFormData(form) {
    let asString = form.serialize()
    let data = asString.split('&').reduce((agg, item) => {
        let [key, val] = item.split('=')
        agg[key] = val.replace(/\%20/g, ' ')
        return agg
    }, {})
    return data
}

function loginHandler(event){
    event.preventDefault()
    let data = serializeFormData($(this))
    // TODO: handle actual login. This is a placeholder for front-end functionality
    localStorage.user = JSON.stringify({
        username: data.username,
        token: 'l8xQ8o4dIRXvDA'
    })
    page('/tasks')
}

function registrationHandler(event){
    event.preventDefault()
    let data = serializeFormData($(this))
    // TODO: handle actual registration. This is a placeholder for front-end functionality
    localStorage.user = JSON.stringify({
        username: data.username,
        token: 'l8xQ8o4dIRXvDA'
    })
    page('/tasks')
}
