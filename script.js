// CLOSE BUTTON
const myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i < myNodeList.length; i++){
    const span = document.createElement("span")
    const text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    myNodeList[i].appendChild(span);
}

// CLOSE BUTTON HIDE FUNCTION
const close = document.getElementsByClassName("close");
for (let j = 0; j < myNodeList.length; j++){
    close[j].onclick = function(){
        const div = this.parentElement;
        div.style.display = "none";
    }
}

// CHECKED STATUS WHEN CLICKING ON LIST ITEM
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// ADD ITEMS
function newElement(){
        const task = document.querySelector(".taskInput").value;
        if(!task){
            alert("TItle field can not be empty!")
        } else{
            const newTask = document.createElement("li");
        newTask.textContent = task;
        list.appendChild(newTask)
        const span = document.createElement("span")
        const text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        newTask.appendChild(span)
        for (let j = 0; j < myNodeList.length; j++){
            close[j].onclick = function(){
                const div = this.parentElement;
                div.style.display = "none";
            }
        }
        }
        
}


// DRAG ITEMS (not yet implemented as checked status is not dragged)

// const tasks = document.querySelectorAll('li');
// let dragTask = null;

// for (let i = 0; i < tasks.length; i++) {
//   tasks[i].addEventListener('dragstart', function(e) {
//     dragTask = this;
//     e.dataTransfer.effectAllowed = 'move';
//     e.dataTransfer.setData('text/html', this.innerHTML);
//   });
//   tasks[i].addEventListener('dragover', function(e) {
//     if (e.preventDefault) e.preventDefault();
//     e.dataTransfer.dropEffect = 'move';
//     return false;
//   });
//   tasks[i].addEventListener('drop', function(e) {
//     if (e.stopPropagation) e.stopPropagation();
//     if (dragTask != this) {
//       dragTask.innerHTML = this.innerHTML;
//       this.innerHTML = e.dataTransfer.getData('text/html');
//     }
//     return false;
//   });
// }
