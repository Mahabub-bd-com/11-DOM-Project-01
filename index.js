// example code DOM Project 01
const framework = document.querySelector("#framework");
const btnAdd = document.querySelector("#btnAdd");

const list = document.querySelector("#list");
const btnRemove =document.querySelector("#btnRemove");

btnAdd.addEventListener("click", (event)=>{
    event.preventDefault()

    if(framework.value == ""){
        alert("Input Field is Empty");

        return;
    }

    const option = new Option(framework.value, framework.value);

    list.add(option, undefined);

    framework.value = "";

})

// Add Function
btnRemove.addEventListener("click", (e)=>{
    e.preventDefault();

    let selected = [];

    for ( let i = 0; i <list.options.length; i++ ){
        selected[i] = list.options[i].selected;

    }

// Remove Function
    let index = list.options.length;

    while (index--) {
        if(selected[index]) {
            list.remove(index)
        }
    }


})

// end example code 
