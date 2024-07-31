const taskNameEl = document.getElementById('taskName'),
        taskDateEl = document.getElementById('taskDate'),
        taskTimeEl = document.getElementById('taskTime'),
        taskSubmit = document.getElementById('submitBtn'),
        titleEm = document.getElementById('errorTitle'),
        dateEm = document.getElementById('errorDate'),
        timeEm = document.getElementById('errorTime'),
        totalTaskContainer = document.getElementById('tasks');

const   thisDay = new Date().getDate(),
        thisMonth = new Date().getMonth(),
        thisHour = new Date().getHours(),
        thisYear = new Date().getFullYear();



taskSubmit.addEventListener('click', async () => {

    var taskName = taskNameEl.value,
            date = taskDateEl.value,
    time = taskTimeEl.value;
    
    const res = await api.submitTask({
        taskName,
        date,
        time
    });

    const createTask = () => {
        var firstLetter_TN = taskName.slice(0,1).toUpperCase();
        var restName = taskName.slice(1,taskName.length);
        var taskHeaderName = firstLetter_TN + restName;
    
        const taskDiv = document.createElement('article');
        taskDiv.classList.add('task', 'mb-3', 'flex-1');
    
        const taskNameHeader = document.createElement('h3');
        taskNameHeader.classList.add('taskNameHeader');
        taskNameHeader.textContent = taskHeaderName;
    
        const taskContent = document.createElement('div');
        taskContent.classList.add('taskContent');
    
        const taskDateParagraph = document.createElement('p');
        taskDateParagraph.textContent = `Date: ${date}`;
    
        const taskTimeParagraph = document.createElement('p');
        taskTimeParagraph.textContent = `Time: ${time}`;
    
        taskDiv.appendChild(taskNameHeader);
        taskContent.appendChild(taskTimeParagraph);
        taskContent.appendChild(taskDateParagraph);
        taskDiv.appendChild(taskContent);
        totalTaskContainer.appendChild(taskDiv);
        clearData();
    }
    
    switch (true) {
        case !taskName && !date && !time:
            checkTaskName();
            checkDate();
            checkTime();
            break;
        case !taskName:
            checkTaskName();
            break;
        case !date:
            checkDate();
            break;
        case !time:
            checkTime();
            break;
        case checkBackDate():
            checkBackDate();
            break;
        case checkBackTime():
            checkBackTime();
            break;
        default:
            createTask();
            break;
    }
});

const checkTaskName = () =>{
    titleEm.textContent = "Please add a title";
    titleEm.classList.remove("hidden");
    taskNameEl.classList.remove("border-transparent");
    titleEm.classList.add("block")
    taskNameEl.classList.add("errorInput")
}

const checkDate = () => {
    dateEm.textContent = "Please select a date";
    dateEm.classList.remove("hidden");
    taskDateEl.classList.remove("border-transparent");
    dateEm.classList.add("block")
    taskDateEl.classList.add("errorInput")
}

const checkTime = () => {
    timeEm.textContent = "Please select a specific time";
    timeEm.classList.remove("hidden");
    taskTimeEl.classList.remove("border-transparent");
    timeEm.classList.add("block")
    taskTimeEl.classList.add("errorInput")
}

const checkBackTime = () => {
    let taskDate = new Date(taskDateEl.value),
        userMonth = taskDate.getMonth(),
        userDay = taskDate.getDate(), 
        taskTime = new Date(taskTimeEl.value),
        userHour = taskTime.getHours(),
        userMinutes = taskTime.getMinutes();

    if (userMonth == thisMonth && userDay == thisDay && userHour < thisHour) {
        checkTime();
        timeEm.textContent = "Please input an hour in the future";
        return true;
    } else if (userMonth == thisMonth && userDay == thisDay && userHour == thisHour && userMinutes < thisMinute) {
        checkTime();
        timeEm.textContent = "Please input time in the future";
        return true;
    }
    return false;
} // Not working

const checkBackDate = () => {
    let taskDate = new Date(taskDateEl.value),
        userMonth = taskDate.getMonth(),
        userDay = taskDate.getDate(),
    userYear = taskDate.getFullYear();
    if (userYear < thisYear){
        checkDate();
        dateEm.textContent = "Please input this year or later.";
        return true;
    } else if (userMonth < thisMonth){
        checkDate();
        dateEm.textContent = "Please input this month or later.";
        return true;
    } else if (userYear == thisYear && userMonth == thisMonth && userDay < thisDay){
        checkDate();
        dateEm.textContent = "Please input a today or later.";
        return true;
    }
    return false;
    
}

const clearEm = (elem,error) => {
        elem.classList.remove("errorInput");
        elem.classList.add("border-transparent");
        error.classList.add("hidden");
        error.classList.remove("block");
        error.textContent = "";
}

taskNameEl.addEventListener("input", () => {
    if (taskNameEl.value.length <= 3) {
       checkTaskName();
        titleEm.textContent = "Task name should be at least 4 characters long";
    } else {
        clearEm(taskNameEl,titleEm);
    }
});

taskDateEl.addEventListener("input", () => {
    switch (true) {
        case !taskDateEl.value:
            checkDate();
        break;
        case checkBackDate():
            checkBackDate();
        break;
    
        default:
            clearEm(taskDateEl, dateEm);
        break;
    }
});

taskTimeEl.addEventListener("input", () => {
    switch (true) {
        case !taskTimeEl.value:
            checkTime();
        break;
        case checkBackTime():
            checkBackTime();
        break;
        default:
            clearEm(taskTimeEl, timeEm);
        break;
    }

});



totalTaskContainer.addEventListener('click', () => {
    window.location.href = "allTasks.html";
})

const clearData = () => {
    taskNameEl.value = '';
    taskDateEl.value = '';
    taskTimeEl.value = '';
}

