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
})
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
taskList.appendChild(li)

})
}                                                   
