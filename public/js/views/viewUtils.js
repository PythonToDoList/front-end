Handlebars.registerHelper('button', function(kwargs){
    ({ type, classes, innerText } = kwargs.hash)
    return new Handlebars.SafeString(
        `<button type="${ type }" class="${ classes }">${ innerText }</button>`
    )
})

Handlebars.registerHelper('row', function(task){
    return new Handlebars.SafeString(
        `<tr id="task-${ task.id }" class="task-item">
        <td>
            <p>${ task.title }</p>
            ${ hasDueDate(task) }
        </td>
    </tr>`
    )
})

function hasDueDate(task) {
    return task.due_date ? `<p class="due-date">Due By: ${ task.due_date } </p>` : ''
}

function newTaskHandler(event){
    event.preventDefault()
    let data = serializeFormData($(this))
    console.log(data)
}