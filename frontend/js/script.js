const taskName_El = $('#taskName'),
      task_Date = $('#taskDate'),
      task_Time = $('#taskTime'),
      task_Submit = $('#submitBtn'),
      totalTask_Container = $('#tasks'),
      today = new Date(),
      thisYear = today.getFullYear();

      function clearData() {
        taskName_El.val('');
        task_Date.val('');
        task_Time.val('');
    }

task_Submit.click(()=>{
    const taskName = taskName_El.val(),
            date = task_Date.val(),
            time = task_Time.val(),
            userYear = new Date(date).getFullYear();
    
    if(!taskName ||!date ||!time){
        alert('Please fill all fields');
        return;
    } else if (userYear < thisYear) {
        clearData();
        alert('Task date cannot be in the past');
        return;
    }
    
    const task = {
        taskName,
        date,
        time
    };
    
    totalTask_Container.append(`
        <div class="task">
            <h3>${task.taskName}</h3>
            <p>Date: ${task.date}</p>
            <p>Time: ${task.time}</p>
        </div>
    `);
    // Send task to the backend for storage
    // $.post('/submitTask', task);

    // Show success message
    alert('Task submitted successfully');
    clearData();

    // Update the task count
    // const currentTaskCount = parseInt($('#taskCount').text());
})