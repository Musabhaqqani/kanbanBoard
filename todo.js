const taskInput = document.getElementById("add");
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
    itemList.push(task)
    document.querySelector(".item").innerHTML = itemList.join("<br>")
}
