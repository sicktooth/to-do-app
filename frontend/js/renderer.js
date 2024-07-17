const { ipcRenderer } = require('electron');
// const path = require('path');

document.getElementById('startPage').addEventListener('submit', (event) => {
    event.preventDefault();

    const task = document.getElementById('taskInput').value;

    ipcRenderer.send('form-submission', task);



    // const email = document.getElementById('email').value;

    // try {
    //     const response = await fetch(path.join(__dirname,'set reminder.html'), {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ task })
    //     });

    //     const data = await response.json();

    //     if (data.success) {
    //         ipcRenderer.send('form-submitted', data);
    //     } else {
    //         alert('Form submission failed');
    //     }
    // } catch (error) {
    //     console.error('Error submitting form:', error);
    // }
});


