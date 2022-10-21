import { Task } from "./Task/index.js"

let renderTasks = (tasks) => {
    let seznamUkolu = document.querySelector(".todo__tasks")
    seznamUkolu.innerHTML = tasks
        .map((item) => Task(item))
        .join("")
}

fetch("https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        renderTasks(data)
    })

    let checkboxUndone = document.querySelector("#checkbox-undone")
    console.log(checkboxUndone.checked)
    
    checkboxUndone.addEventListener("click", () => {
            fetch(`https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks${checkboxUndone.checked ? "?done=false" : ""}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data)
                    renderTasks(data)
                })
    })