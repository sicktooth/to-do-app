var totalNumberOfTasks = document.getElementById("taskList").childElementCount;
const  totalNumContainer = document.getElementsByTagName("var"),
deleteBtns = document.querySelectorAll(".taskDeleteBtn");

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

// totalNumContainer[0].textContent = totalNumberOfTasks;
console.log(totalNumberOfTasks);