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
    li.innerHTML = '<span class = "texts">' +item.value+'</span>';
    lists.appendChild(li); 
    input.value = "";
    
    let deletebtn = document.createElement("button");
    deletebtn.className = "btn btn-danger btn-sm float-right delete";
    deletebtn.appendChild(document.createTextNode("X"));
    // can also be done as 
    // deletebtn.innerHTML = "X";
    li.appendChild(deletebtn);

    let editbtn = document.createElement("button");
    editbtn.className = "btn btn-sm float-right Edit";
    editbtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editbtn);

}
// IMPORTANT
function remitem(e)
{
        if(e.target.classList.contains("delete")) //there's a class named delete in the items 
        {  
            let confirmation = confirm("Are You Sure?");
            if(confirmation){
                let li = e.target.parentNode;
                lists.removeChild(li);
            }
        }else

        if(e.target.classList.contains("Edit"))
        {
            
            let input = document.createElement("input");
            let text = e.target.parentNode.querySelector(".texts").textContent;
            input.value = text;
            e.target.parentNode.removeChild(e.target.parentNode.firstElementChild);
            let firstChild = e.target.parentNode.firstElementChild;
            e.target.parentNode.insertBefore(input,firstChild);
            e.target.innerHTML = "&#10003";
            e.target.className = "btn btn-sm float-right Editing"
        } else

        if(e.target.classList.contains("Editing"))
        {
            let input = e.target.parentNode.querySelector("input");
            let newtext = input.value;
            let linewtext = document.createElement("span");
            console.log(newtext);
            linewtext.className = "texts";
            linewtext.innerHTML = newtext;
            e.target.parentNode.removeChild(e.target.parentNode.firstElementChild);
            let firstChild = e.target.parentNode.firstElementChild;
            e.target.parentNode.insertBefore(linewtext,firstChild);
            e.target.innerHTML = "Edit";
            
            e.target.className = "btn btn-sm float-right Edit";
            
        }    
}


function filterItems(e){
   
    let text = e.target.value.toLowerCase();
    let allItems = lists.getElementsByTagName("li");
    //console.log(allItems);
    let arrayofitems = Array.from(allItems);
    
    arrayofitems.forEach(function(item)
    {
        let name = item.querySelector(".texts").textContent.toLowerCase();
        if(name.includes(text)==true)
        {
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}

