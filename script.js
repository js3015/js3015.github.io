var button = document.getElementById("add");
var del = document.getElementById("del");
var input = document.querySelector('input[type="text"]');
var list = document.querySelector(".plates");
var state = {
    items: []
};

var data = localStorage.getItem("data");
if(data) {
    state = JSON.parse(data);
}

window.onload = function() {
    var loaded = sessionStorage.getItem('loaded');
    if(loaded) {
        update();
    } else {
        sessionStorage.setItem('loaded', true);
    }
}

function update(){
    list.innerHTML = "";
    for(var i = 0; i < state.items.length; i++) {
        var li = document.createElement("li");
        li.innerText = state.items[i];
        list.appendChild(li); 
    }
}

button.addEventListener("click", function(){
    event.preventDefault();
    var l = input.value;
    var li = document.createElement("li");
    li.innerText = l;
    list.appendChild(li);
    input.value = "";

    state.items.push(l);
    localStorage.setItem("data", JSON.stringify(state));
});

del.addEventListener("click", function(){
    event.preventDefault();
    localStorage.clear();
    list.innerHTML = "";
    state.items = [];
});
