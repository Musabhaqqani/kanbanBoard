const taskInput = document.getElementById("add");
const lane = document.querySelector(".lane");

taskInput.addEventListener('keydown', function (e) {
    if (e.code == "Enter") {
        addTask();
    }
})

const addTask = () => {
    const task = taskInput.value;
    if (task == "")
        return
    const newTask = document.createElement('p');
    newTask.classList.add('task');
    newTask.setAttribute('draggable', 'true');
    newTask.innerText = task;

    newTask.addEventListener("dragstart", () => {
        newTask.classList.add("is-dragging");
    });
    newTask.addEventListener("dragend", () => {
        newTask.classList.remove("is-dragging")
    });

    lane.appendChild(newTask);
}
