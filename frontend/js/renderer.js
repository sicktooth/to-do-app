const taskNameEl = document.getElementById('taskName'),
        taskDate = document.getElementById('taskDate'),
        taskTime = document.getElementById('taskTime'),
        taskSubmit = document.getElementById('submitBtn'),
        totalTaskContainer = document.getElementById('tasks'),
        thisDay = new Date().getDate(),
        thisMonth = new Date().getMonth(),
thisYear = new Date().getFullYear();


taskSubmit.addEventListener('click', async () => {
    const taskName = taskNameEl.value,
            date = taskDate.value,
            time = taskTime.value,
            userMonth = new Date(date).getMonth(),
            userDay = new Date(date).getDate(),
    userYear = new Date(date).getFullYear();

    if (userDay < thisDay || userMonth < thisMonth || userYear < thisYear) {
        alert("Please select a date in the future")
        clearData();
    }

    else if(!taskName ||!date ||!time){
        alert('Please fill all fields');
        clearData();
    }
    
    const res = await api.submitTask({
        taskName,
        date,
        time
    });

    

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
});

totalTaskContainer.addEventListener('click', () => {
    window.location.href = "allTasks.html";
})

const clearData = () => {
    taskNameEl.value = '';
    taskDate.value = '';
    taskTime.value = '';
}

