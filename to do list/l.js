document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');

    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span class="task-text">${task}</span>
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            const editButton = listItem.querySelector('.edit-button');
            editButton.addEventListener('click', () => editTask(index));

            const deleteButton = listItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => deleteTask(index));

            taskList.appendChild(listItem);
        });
    }

    function addTask() {
        const newTask = taskInput.value.trim();
        if (newTask) {
            tasks.push(newTask);
            taskInput.value = '';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    function editTask(index) {
        const updatedTask = prompt('Edit Task:', tasks[index]);
        if (updatedTask !== null) {
            tasks[index] = updatedTask;
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    function deleteTask(index) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    addTaskButton.addEventListener('click', addTask);
    renderTasks();
});
