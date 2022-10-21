export let Task = (props) => {
    let {name, due, done} = props
    
    let doneClass = ""
    if (done) {
        doneClass = "✓"
    }
    
    return `
        <div class="task">
         <div class="task__body">
            <div class="task__name">${name}</div>
            <div class="task__due">${due}</div>
         </div>
        <div class="task__done">${doneClass}</div>
      </div>
     `
}