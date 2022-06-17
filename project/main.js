//try with input type= "submit" as well

let form = document.querySelector("#addForm");
let lists = document.querySelector("#items");
let search = document.querySelector("#filter");

form.addEventListener("submit", additem);
lists.addEventListener("click",remitem);

search.addEventListener("keyup", filterItems);

function additem(e){
    e.preventDefault();  
    let item = document.querySelector('#input');
    
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = item.value;
    lists.appendChild(li); 
    
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger btn-sm float-right delete";
     deletebtn.appendChild(document.createTextNode("X"));
    // can also be done as 
    // deletebtn.innerHTML = "X";
    console.log(e.target);
    li.appendChild(deletebtn);

}

function remitem(e){
    
  /*imp*/  if(e.target.classList.contains("delete")){ //there's a class named delete in the 
        let confirmation = confirm("Are You Sure?");
        if(confirmation){
            let li = e.target.parentNode;
            lists.removeChild(li);
        }
    }
    
}

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let allItems = lists.getElementsByTagName("li");
    
    let arrayofitems = Array.from(allItems);

    arrayofitems.forEach(function(item)
    {
        let name = item.firstChild.textContent.toLowerCase();
        // console.log(name);
        if(name.includes(text)==true)
        {
            console.log(33);
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}