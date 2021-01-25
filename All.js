var El={
    Name:document.getElementById("Name"),
    Family:document.getElementById("Family"),
    Pass:document.getElementById("Pass"),
    btn:document.querySelector("button")
}
var list=[
    {
        name:"saeed",
        family:"kaboli",
        pass:"12345"
    }
];
function add(Name,family,pass){
    if(isNaN(El.Name.value)==false){
        alert('the fild name is Number')
    }
    else{
    
        list.push(
            {
                name:El.Name.value,
                Family:El.Family.value,
                Pass:El.Pass.value
        
            }
        ); 
        
    }
}
El.btn.onclick=add;
console.log(list);