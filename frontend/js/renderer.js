const taskNameEl = document.getElementById('taskName'),
      taskDate = document.getElementById('taskDate'),
      taskTime = document.getElementById('taskTime'),
      taskSubmit = document.getElementById('submitBtn'),
      totalTaskContainer = document.getElementById('tasks'),
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

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task', 'mb-3');

    const taskNameHeader = document.createElement('h3');
    taskNameHeader.textContent = taskName;

    const taskDateParagraph = document.createElement('p');
    taskDateParagraph.textContent = `Date: ${date}`;

    const taskTimeParagraph = document.createElement('p');
    taskTimeParagraph.textContent = `Time: ${time}`;

    taskDiv.appendChild(taskNameHeader);
    taskDiv.appendChild(taskDateParagraph);
    taskDiv.appendChild(taskTimeParagraph);

    totalTaskContainer.appendChild(taskDiv);


    // show success message
    alert('Task submitted successfully');
    clearData();

    console.log(new Date(date).getFullYear());
    // var para = document.createElement('p');
    // var node = taskName + ' ' + date + ' ' + time;
    // para.appendChild(document.createTextNode(node));
    // totalTaskContainer.appendChild(para);
});

const clearData = () => {
    taskNameEl.value = '';
    taskDate.value = '';
    taskTime.value = '';
}
