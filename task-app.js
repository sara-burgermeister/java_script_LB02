'use strict'

//get task list as JSON-object format
let tasks = getSavedTasks();

//set initial filter of empty
const filters = {
    searchText: '',
    hideCompleted: false
}

//show task list
renderTasks(tasks, filters);


/**
 * Event for a new task
 */
document.querySelector('#new-task').addEventListener('submit', (e) => {
    e.preventDefault()
    let lable = document.getElementById("lable");
    console.log(lable.value);
    let description = document.getElementById("description");
    console.log(description.value);

    //add new task with push-method into JSON-object
    tasks.push({
        id: uuidv4(),
        text: lable.value,
        description: description.value,
        completed: false
    });


//save tasks
    saveTasks(tasks);
//show tasks
    renderTasks(tasks, filters);
    lable.value = '';
    description.value = '';
});


