const taskNameEl = document.getElementById('taskName'),
      taskDate = document.getElementById('taskDate'),
      taskTime = document.getElementById('taskTime'),
      taskSubmit = document.getElementById('submitBtn'),
      totalTaskContainer = document.getElementById('tasks'),
      allTasks = document.getElementById('allTasks'),
      today = new Date(),
thisYear = today.getFullYear();


taskSubmit.addEventListener('click', async () => {
    const taskName = taskNameEl.value,
            date = taskDate.value,
            time = taskTime.value,
            userYear = new Date(date).getFullYear();
    
    if(!taskName ||!date ||!time){
        alert('Please fill all fields');
        return;
    } else if (userYear < thisYear) {
        clearData();
        alert('Task date cannot be in the past');
        return;
    }
    
    const res = await api.submitTask({
        taskName,
        date,
        time
    });

    clearData();

    const taskDiv = document.createElement('article');
    taskDiv.classList.add('task', 'mb-3', 'flex-1');

    const taskNameHeader = document.createElement('h3');
    taskNameHeader.classList.add('text-bold', 'text-4xl');
    taskNameHeader.textContent = taskName;

    const taskContent = document.createElement('div');
    taskContent.classList.add('flex', 'flex-wrap', 'text-sm', 'gap-1');

    const taskDateParagraph = document.createElement('p');
    taskDateParagraph.textContent = `Date: ${date}`;

    const taskTimeParagraph = document.createElement('p');
    taskTimeParagraph.textContent = `Time: ${time}`;

    taskDiv.appendChild(taskNameHeader);
    taskContent.appendChild(taskTimeParagraph);
    taskContent.appendChild(taskDateParagraph);
    taskDiv.appendChild(taskContent);

    totalTaskContainer.appendChild(taskDiv);


    // show success message
    
    // allTasks.appendChild(taskDiv);

    console.log(new Date(date).getFullYear());
});

totalTaskContainer.addEventListener('click', () => {
    window.location.href = "allTasks.html";
})

const clearData = () => {
    taskNameEl.value = '';
    taskDate.value = '';
    taskTime.value = '';
}
