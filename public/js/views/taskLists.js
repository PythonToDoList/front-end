function buildLists() {
    let overdue = compileTemplate(taskList, {rows: sampleData, title: 'Overdue Tasks'}),
        coming = compileTemplate(taskList, {rows: sampleData, title: 'Upcoming Tasks'}),
        notdue = compileTemplate(taskList, {rows: sampleData, title: 'No Dates'});

    $('#many-lists')
        .append(overdue)
        .append(coming)
        .append(notdue)

    $('.task-item').on('click', taskDetailPopup)
}

function taskDetailPopup(){
    // TODO: handle the popup for the detail of an individual task
    $('#task-popup').removeClass('hidden')
    $('.popup-content .close').on('click', _ => {
        $('#task-popup').addClass('hidden')
    })
    $('#task-popup .popup-inner').empty()
    
    let theTask = getTaskFromId(this.id)
    $('#task-popup .popup-inner').append( compileTemplate(taskDetail, {task: theTask}) )
    setupButtonHandlers()
}

function setupButtonHandlers() {
    $('.edit-btn').on('click', editTaskHandler)
    $('.complete-btn').on('click', completeTaskHandler)
    $('.delete-btn').on('click', deleteTaskHandler)
}