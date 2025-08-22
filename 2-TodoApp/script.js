const inputBox = document.getElementById("inputBox");
const listcontainer = document.getElementById("li-container");

function addTask(){
    if(inputBox.value === "") alert("you should write something");
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    inputBox.value = "";
}

listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showStoredData(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showStoredData();
