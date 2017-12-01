function newTaskHandler(event){
    $('#task-popup').removeClass('hidden')
    $('.popup-content .close').on('click', _ => {
        $('#task-popup').addClass('hidden')
    })
    $('#task-popup .popup-inner').empty()
    $('#task-popup .popup-inner').append( compileTemplate(taskForm) )
    $('#taskform').on('submit', submitUpdateAndClose)
}

function editTaskHandler(event){
    $('#task-popup').removeClass('hidden')
    $('.popup-content .close').on('click', _ => {
        $('#task-popup').addClass('hidden')
    })
    let taskId = parseInt($(this).parent().attr('data').split('-')[1])
    let theTask = Object.assign({}, sampleData.filter(task => task.id === taskId)[0])
    if (theTask.due_date) {
        theTask.due_day = reformatDate(theTask.due_date.split(' ')[0])
        theTask.due_time = reformatTime(theTask.due_date.split(' ').slice(1,).join(' '))
    }
    $('#task-popup .popup-inner').empty()
    $('#task-popup .popup-inner').append( compileTemplate(taskEditForm, {task: theTask}) )
    $('#taskform-edit').on('submit', submitUpdateAndClose)
}

function reformatDate(date) {
    let [month, day, year] = date.split('/')
    if (parseInt(month) < 10) {
        month = `0${month}`
    }
    if (parseInt(day) < 10) {
        day = `0${day}`
    }
    return [year, month, day].join('-')
}

function reformatTime(time) {
    let [clockTime, amPm] = time.split(' ')
    let [hour, minute, second] = clockTime.split(':')
    if (amPm === 'pm' && hour !== '12') {
        hour = `${ parseInt(hour) + 12 }`
    }
    return `${hour}:${minute}`
}

function submitUpdateAndClose(event) {
    event.preventDefault();
    let data = serializeFormData($(this));
    /*
     TODO: handle actual form submission with AJAX or
     fetch or whatever. The following line just logs
     the data but we should send it somewhere, along
     with the user's own information so that we can
     have auth validation.

     If data transmits correctly then update one of the
     todo lists with data.
     */
    console.log(data);
    this.reset();
    $('#task-popup').addClass('hidden');
}