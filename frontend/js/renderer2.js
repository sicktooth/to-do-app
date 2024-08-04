var totalNumberOfTasks = document.getElementById("taskList").childElementCount;

const  totalNumContainer = document.getElementsByTagName("var"),
deleteBtns = document.querySelectorAll(".taskDeleteBtn"),
editBtns = document.querySelectorAll(".taskEditBtn"),
titleInput = document.querySelector(".taskNameHeader"),
dateInput = document.querySelector(".taskDate"),
timeInput = document.querySelector(".taskTime");


totalNumContainer[0].textContent = totalNumberOfTasks;

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

editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', () => {
        const parentEl = this.closest(".taskContainer");
        if (parentEl){
            // parentEl.style.display = "none";
            // totalNumberOfTasks--;
            
            // totalNumContainer[0].textContent = totalNumberOfTasks;
            
        }
    });
});

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