const taskNameEl = document.getElementById('taskName'),
        taskDateEl = document.getElementById('taskDate'),
        taskTimeEl = document.getElementById('taskTime'),
        taskSubmit = document.getElementById('submitBtn'),
        titleEm = document.getElementById('errorTitle'),
        dateEm = document.getElementById('errorDate'),
        timeEm = document.getElementById('errorTime'),
        totalTaskContainer = document.getElementById('tasks'),
        thisDay = new Date().getDate(),
        thisMonth = new Date().getMonth(),
thisYear = new Date().getFullYear();



    // const validateForm = () => {

    //     if (!taskName || !date || !time) {
    //         return checkTaskName();
    //     } else {
    //         rmCheckTaskNameEm();
    //         createTask();
    //     }
       
    
    // }
taskSubmit.addEventListener('click', async () => {

    var taskName = taskNameEl.value,
            date = taskDateEl.value,
            time = taskTimeEl.value,
            userMonth = new Date(date).getMonth(),
            userDay = new Date(date).getDate(),
    userYear = new Date(date).getFullYear();

    // if (userDay < thisDay || userMonth < thisMonth || userYear < thisYear) {
    //     alert("Please select a date in the future")
    //     clearData();
    // }
    // validateForm();
    
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

    createTask();
   
});

const checkTaskName = () =>{
    titleEm.textContent = "Please add a title";
    titleEm.classList.remove("hidden");
    taskNameEl.classList.remove("border-transparent");
    titleEm.classList.add("block")
    taskNameEl.classList.add("errorInput")
    
}
const rmCheckTaskNameEm = () => {
    taskNameEl.classList.add("border-transparent");
    taskNameEl.classList.remove("errorInput")
    titleEm.classList.add("hidden");
    titleEm.classList.remove("block")
}

taskNameEl.addEventListener("input", () => {
    if (taskNameEl.value.length <= 3) {
        titleEm.textContent = "Please add a title";
        titleEm.classList.remove("hidden");
        taskNameEl.classList.remove("border-transparent");
        titleEm.classList.add("block");
        taskNameEl.classList.add("errorInput");
    } else {
        taskNameEl.classList.remove("errorInput");
        taskNameEl.classList.add("border-transparent");
        titleEm.classList.add("hidden");
        titleEm.classList.remove("block");
        titleEm.textContent = "";
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

