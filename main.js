function timer() {
    let currTime = new Date().getTime();
    let timerTime = new Date();
    timerTime.setMinutes(timerTime.getUTCMinutes() + 25);
    const timer = timerTime.getTime();

    let val = setInterval( function() {
        let curr = new Date().getTime();
        let distance = timer - curr;

        let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("time").innerHTML = min + ":" + sec;

        if (distance < 0) {
            clearInterval(val);
            document.getElementById("time").innerHTML = "DONE";
        }
    }, 1000);
}

function toggle() {
    var name = document.getElementById("start");
    var control = document.getElementById("control");
    if (name.innerHTML === "Start") {
        name.innerHTML = "Stop";
        control.setAttribute("style", "background-color: red");
        timer();
    } else {
        name.innerHTML = "Start";
        control.setAttribute("style", "background-color: rgb(30, 228, 106)");
    }
}

function reset() {
    document.getElementById("time").innerHTML = "25:00"; // change to user input value
}

function addTask() {
    // Text: Task Name
    let listItem = document.createElement("p");
    let text = document.getElementById("task").value;
    let textVal = document.createTextNode(text);
    listItem.appendChild(textVal);

    // Time: Pomodoro Timer Length
    let timeItem = document.createElement("b");
    let num = document.getElementById("timer").value;
    let timeVal = document.createTextNode(num);
    timeItem.appendChild(timeVal);
    listItem.appendChild(timeItem);

    // Checkbox: Done?
    let box = document.createElement("input");
    box.setAttribute("type", "checkbox");
    listItem.appendChild(box);

    // Button: Delete
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    listItem.appendChild(btn);
    btn.addEventListener("click", function() {
        event.target.parentElement.remove();
    })

    document.getElementById("list").appendChild(listItem); 
}

function clearAll() {
    const list = document.querySelector("#list");
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}