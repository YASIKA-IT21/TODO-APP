const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");  
function Addtask(){
    if(inputbox.value==='')
    {
        alert("You must write something");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let cross = document.createElement("cross");
        cross.innerHTML='\u00d7';
        li.appendChild(cross);
    }
    inputbox.value="";
    save();
}  
listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checker");
        save();
    }
    else if(e.target.tagName ==="CROSS")
    {
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function show()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
show();