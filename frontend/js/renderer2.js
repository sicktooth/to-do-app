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
        }
    });
});

editBtns.forEach(editBtn => {
    editBtn.addEventListener('click', () => {
    
    });
});
// console.log(totalNumberOfTasks);