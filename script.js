//initialize (create) empty array element called task
let tasks = []
//add an ONCLICK event listener to the "add task task button" that calls an function
document.getElementById('addTaskButton').addEventListener('click', function(){
    //get the value of the input box and store it in a variable called taskInput
    let taskInput = document.getElementById('taskInput').value
    //check if taskInput has something in it
    if (taskInput) {
        tasks.push(taskInput)
        //clear the input field after adding the task
        document.getElementById('taskInput').value = ''
        //call the function to update the task list display
        displayTasks()
    }
});
//function to display all my tasks in a list
function displayTasks() {
    //select the unordered list (taskList) in the html
    let taskList = document.getElementById('taskList')
    //clear the existing task list before updating it
    taskList.innerHTML = ''
    //loop through every task in the array and create a list item
tasks.forEach((task, index) => {
    //create a new <li> element for each task
    let li = document.createElement('li')
    //add bootstrap classes for styling
    li.classList.add(
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
li.innerHTML = `${task} <button class='btn btn-dark btn-sm' onclick='removeTask(${index})'> √ </button> `
//append the new task to the task list
taskList.appendChild(li);
});
//keep track of task number
updateTaskCounter();
}                                                   
//Function to remove a task from the list when the √ button is clicked
function removeTask(index){
    tasks.splice(index, 1)
    //Call the function to update the task list display
    displayTasks()
}
//Event listener for the clear all tasks button
document.getElementById('clearTaskBtn').addEventListener('click', function(){
 //Empty the tasks array to remove all tasks
 tasks = []
 //Call the function to update the task list display
  displayTasks()
})
//add tasks with enter key
 document.getElementById('taskInput').addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
       let taskInput = document.getElementById('taskInput').value;
       if (taskInput) {
        tasks.push(taskInput);
      document.getElementById('taskInput').value= '';
      displayTasks();
       }
    }
});
//update number of tasks
function updateTaskCounter(){
    let taskCounter = document.getElementById('updateTaskCounter');
    taskCounter.textContent = `Number of Tasks: ${tasks.length}`;
}
