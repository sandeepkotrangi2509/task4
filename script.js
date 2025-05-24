const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');
window.onload = loadTasks;
function addTask() {
    const task = taskInput.value;
    if (task) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        taskInput.value = '';
        loadTasks();
    }
}
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.onclick = () => { tasks.splice(index, 1); localStorage.setItem('tasks', JSON.stringify(tasks)); loadTasks(); };
        taskList.appendChild(li);
    });
}
