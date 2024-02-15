const taskInput = document.getElementById("add");
const lane = document.querySelector(".lane")
let itemList = []

taskInput.addEventListener('keydown', function (e) {
    if (e.code == "Enter") {
        addTask()
    }
})

const addTask = () => {
    const task = taskInput.value;
    if (task == "")
        return
    const newTask = document.createElement('p');
    newTask.classList.add('task')
    newTask.setAttribute('draggable','true')
    newTask.innerText = task
    lane.appendChild(newTask)

}
