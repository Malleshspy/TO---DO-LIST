const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");
function addtask(){
    if(inputbox.value===''){
        alert("Please enter a task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value=" ";
    saveinfo();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveinfo();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveinfo();
    }
},false);
function saveinfo(){
    localStorage.setItem("data",listcontainer.innerHTML);

}
function showtask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();