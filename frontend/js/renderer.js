const taskNameEl = document.getElementById('taskName'),
      taskDate = document.getElementById('taskDate'),
      taskTime = document.getElementById('taskTime'),
      taskSubmit = document.getElementById('submitBtn'),
      totalTaskContainer = document.getElementById('tasks');

taskSubmit.addEventListener('click', async () => {
    const taskName = taskNameEl.value,
            date = taskDate.value,
            time = taskTime.value;
    
    const res = await api.submitTask({
        taskName,
        date,
        time
    })

    console.log(res);
    taskNameEl.value = "";
    date = taskDate.value = "";
    time = taskTime.value = "";
})

