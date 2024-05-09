// Script.js
let tasks = [];

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskName = taskInput.value.trim();

  if (taskName !== "") {
    tasks.push({ name: taskName, completed: false });
    displayTasks();
    taskInput.value = "";
  }
}

function displayTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task.name;
    
    const editButton = document.createElement("button");
    editButton.textContent = "Ubah";
    editButton.className = "edit";
    editButton.onclick = () => editTask(index);
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete";
    deleteButton.onclick = () => deleteTask(index);
    li.appendChild(deleteButton);

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Batal Selesai" : "Tandai Selesai";
    completeButton.className = "complete";
    completeButton.onclick = () => toggleComplete(index);
    li.appendChild(completeButton);

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    taskList.appendChild(li);
  });
}

function editTask(index) {
  const newTaskName = prompt("Ubah nama tugas:");
  if (newTaskName !== null) {
    tasks[index].name = newTaskName.trim();
    displayTasks();
  }
}

function deleteTask(index) {
  if (confirm("Apakah Anda yakin ingin menghapus tugas ini?")) {
    tasks.splice(index, 1);
    displayTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}