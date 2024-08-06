var totalNumberOfTasks = document.getElementById("taskList").childElementCount;

const  totalNumContainer = document.getElementsByTagName("var"),
deleteBtns = document.querySelectorAll(".taskDeleteBtn"),
editBtns = document.querySelectorAll(".taskEditBtn"),

taskInputName = document.querySelector("#taskName");
var taskInputDateTime = document.querySelector("#taskDateTime");

const editCancelButton = document.querySelector("#editCancel"),
submitEditButton = document.querySelector("#editSubmit");


totalNumContainer[0].textContent = totalNumberOfTasks;

// console.log(editBtns);
deleteBtns.forEach(deleteBtn =>{
    deleteBtn.addEventListener("click", function (){
        const parentEl = this.closest(".taskContainer");
        if (parentEl){
            parentEl.style.display = "none";
            totalNumberOfTasks--;
            
            totalNumContainer[0].textContent = totalNumberOfTasks;
            if (totalNumberOfTasks == 0) {
                totalNumContainer[0].classList.remove("bg-green-300")
                totalNumContainer[0].classList.add("empty");
            }
            
        }
    });
});

function displayEdit() {
    const parentE = document.querySelector("#allTasks");
    parentE.style.display = 'none';
    const aside = document.getElementById("aside");
    aside.classList.remove("hidden");
    aside.classList.add("flex");
}

function cancelEdit() {
    const parentE = document.querySelector("#allTasks");
    parentE.style.display = 'flex';
    const aside = document.getElementById("aside");
    aside.classList.remove("flex");
    aside.classList.add("hidden");
}

editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', () => {
        displayEdit();
        const parentE = editBtn.closest(".task");

        var taskName = parentE.querySelector(".taskNameHeader").textContent;
                const taskDate = parentE.querySelector(".date").textContent;
                const taskTime = parentE.querySelector(".time").textContent;
        
        setTimeout(inputValues, 500);

        function inputValues() {

            if (parentE) {
                const [month, day, year] = taskDate.split('/');
                const reversedDate = [year, month, day].join('/');
                const FormattedReversedDate = reversedDate.replace(/\//g, '-');

                taskInputDateTime.value = FormattedReversedDate+"T"+taskTime;
                taskInputName.value = taskName;
            }
           
        }
        
    });
    
});

editCancelButton.addEventListener("click", cancelEdit);


// submitEditButton.addEventListener("click", () => {
//     const parentE = submitEditButton.closest(".task");
//     var finalTaskName = taskInputName.value;
//     var taskName = parentE.querySelector(".taskNameHeader");
//     taskName.textContent = finalTaskName;
//     console.log(finalTaskName);
//     cancelEdit();
// });




                            // Input functionalities


 // console.log(date)

    

    // const checkTaskName = () =>{
    //     titleEm.textContent = "Please add a title";
    //     titleEm.classList.remove("hidden");
    //     taskNameEl.classList.remove("border-transparent");
    //     titleEm.classList.add("block")
    //     taskNameEl.classList.add("errorInput")
    // }
    
    // const checkDate = () => {
    //     dateEm.textContent = "Please select a date";
    //     dateEm.classList.remove("hidden");
    //     taskDateTimeEl.classList.remove("border-transparent");
    //     dateEm.classList.add("block")
    //     taskDateTimeEl.classList.add("errorInput")
    // }
    
    // const checkTime = () => {
    //     checkDate();
    //     dateEm.textContent = "Please select a specific time";
    // }
    
    // const checkBackDateTime = () => {
    //     let taskDate = new Date(taskDateTimeEl.value),
    //         userMonth = taskDate.getMonth(),
    //         userDay = taskDate.getDate(),
    //         userYear = taskDate.getFullYear(),
    //         taskTime = new Date(taskDateTimeEl.value),
    //         userHour = taskTime.getHours(),
    //     userMinutes = taskTime.getMinutes();
    
    //     if (userMonth == thisMonth && userDay == thisDay && userHour < thisHour) {
    //         checkTime();
    //         dateEm.textContent = "Please input this hour or later";
    //         return true;
    //     } else if (userMonth == thisMonth && userDay == thisDay && userHour == thisHour && userMinutes <= thisMinute) {
    //         checkTime();
    //         dateEm.textContent = "Please input some mins in the future";
    //         return true;
    //     };
    
    //     if (userYear < thisYear){
    //         checkDate();
    //         dateEm.textContent = "Please input this year or later.";
    //         return true;
    //     } else if (userMonth < thisMonth){
    //         checkDate();
    //         dateEm.textContent = "Please input this month or later.";
    //         return true;
    //     } else if (userYear == thisYear && userMonth == thisMonth && userDay < thisDay){
    //         checkDate();
    //         dateEm.textContent = "Please input today or later.";
    //         return true;
    //     }
    //     return false;
        
    // }
    
    // const clearEm = (elem,error) => {
    //         elem.classList.remove("errorInput");
    //         elem.classList.add("border-transparent");
    //         error.classList.add("hidden");
    //         error.classList.remove("block");
    //         error.textContent = "";
    // }
    
    // taskNameEl.addEventListener("input", () => {
    //     if (taskNameEl.value.length <= 2) {
    //        checkTaskName();
    //         titleEm.textContent = "Task name should be at least 3 characters long";
    //     } else {
    //         clearEm(taskNameEl,titleEm);
    //     }
    // });
    
    // taskDateTimeEl.addEventListener("input", () => {
    //     switch (true) {
    //         case !taskDateTimeEl.value:
    //             checkDate();
    //             checkTime();
    //             dateEm.textContent = "please add a date and time";
    //         break;
    //         case checkBackDateTime():
    //             checkBackDateTime();
    //         break;
    //         default:
    //             clearEm(taskDateTimeEl, dateEm);
    //         break;
    //     }
    // });
    
    // totalTaskContainer.addEventListener('click', () => {
    //     window.location.href = "allTasks.html";
    // })
    
    // const clearData = () => {
    //     taskNameEl.value = '';
    //     taskDateTimeEl.value = '';
    // }
    // console.log(totalNumberOfTasks);
