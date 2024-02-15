const droppable = document.querySelectorAll('.lane');
const draggable = document.querySelectorAll('.task');

draggable.forEach(task => {
    task.addEventListener("dragstart", ()=>{
        task.classList.add("is-dragging");
    });
    task.addEventListener("dragend", ()=>{
        task.classList.remove("is-dragging")
    })
});

droppable.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        const insertTask = shiftTask(zone,e.clientY);
        const curTask = document.querySelector(".is-dragging");
        if (!insertTask) {
            zone.appendChild(curTask);
        }
        else{
            zone.insertBefore(curTask,insertTask);
        }
    })
});
const shiftTask = (zone,mouseY) =>{
    const allItems = zone.querySelectorAll(".task:not(.is-dragging)")
    let closestTask = null;
    let closestOffSet = Number.NEGATIVE_INFINITY;

    allItems.forEach((task)=>{
        const {top} = task.getBoundingClientRect();
        const offset = mouseY-top;
        if (closestOffSet < offset && offset<0) {
            closestOffSet = offset;
            closestTask = task;
        }
    })
    return closestTask;
}

