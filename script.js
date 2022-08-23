const submitButton = document.querySelector("#submit-task");
const userTask = document.querySelector("#task-input-section")
let taskArray = [];
let i = 0;

const appendTasks = () => {
    taskArray.push(userTask.value);
    console.log(taskArray);
    
    //List bolgoj oruulah
    const taskList = document.createElement("ul"); 
    const taskTextValue = document.createTextNode(taskArray[i]);
    taskList.appendChild(taskTextValue);

    const element = document.getElementById("unorderedList");
    element.appendChild(taskList);
    i++;
}