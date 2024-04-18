
function checkFirst() {
    let first = document.getElementById("first").value;
    let regex = /^[a-zA-Z\s]{2,15}$/;

    if (regex.test(first)) { 
        document.getElementById("first_Check").style.color = "green";
        document.getElementById("first_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {
        document.getElementById("first_Check").style.color = "red";
        document.getElementById("first_Check").innerHTML = "Please, enter 2-15 characters";
        return false;
    }
}


function checkLast() {
    let last = document.getElementById("last").value;
    let regex = /^[a-zA-Z\s]{2,20}$/;

    if (regex.test(last)) { 
        document.getElementById("last_Check").style.color = "green";
        document.getElementById("last_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {
        document.getElementById("last_Check").style.color = "red";
        document.getElementById("last_Check").innerHTML = "Please, enter 2-20 characters";
        return false;
    }
}


function checkDest() {
    let dest = document.getElementById("dest").value;
    let regex = /^[a-zA-Z\s\.\,\d\ ]{5,50}$/;

    if (regex.test(dest)) { 
        document.getElementById("dest_Check").style.color = "green";
        document.getElementById("dest_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {
        document.getElementById("dest_Check").style.color = "red";
        document.getElementById("dest_Check").innerHTML = "Please, enter 2-50 characters";
        return false;
    }
}


function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\d{3}-(\d{3})-\d{3}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "green";
        document.getElementById("phone_Check").innerHTML = "Input correct :)";
        return true;
    }
    else {
        document.getElementById("phone_Check").style.color = "red";
        document.getElementById("phone_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}



//меняем цвет кнопки
document.getElementById("chng-btn").onclick = function(){
    this.style.backgroundColor = "rgba(0,0,0,0)";
    this.style.color = "rgba(0,0,0,0)";
}

let isMoved = false;
document.getElementById('movableElement').onclick = function moveElement() {
    if (!isMoved) {
        movableElement.style.transform = 'translate(0px, -100px)';
    } else {
        movableElement.style.transform = 'translate(0, 0)';
    }
    isMoved = !isMoved
}



function outputData() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let dest = document.getElementById("dest").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let dateAndTime = date + " at " + time;
    let quantity = document.getElementById("quantity").value;
    let paymethod = document.getElementById("paymethod").value;

    if (first != "" && last != "" && dest != "" && phone != "" && date != "" && time != "" && quantity != "") {
        document.getElementById("summary").style.color = "green";
        document.getElementById("summary").innerHTML = "Hello, " + first + " " + last + "!";
        document.getElementById("summary").innerHTML += "<p>Your order was successfully placed. We will contact you as soon as possible. You can see the details of your order below: </p>";
        document.getElementById("summary").innerHTML += "<p>Phone number: " + phone + ".</br>";
        document.getElementById("summary").innerHTML += "Destination: " + dest + ".</br>";
        document.getElementById("summary").innerHTML += "Date and Time: " + dateAndTime + ".</br>";
        document.getElementById("summary").innerHTML += "Number of people: " + quantity + ".</br>";
        document.getElementById("summary").innerHTML += "Payment Method: " + paymethod + ".</p>";
        document.getElementById("summary").innerHTML += "<p style='font-weight: bold;'>We are glad that You use our company's services :)</p>";
    }
    else {
        document.getElementById("summary").style.color="red";
        document.getElementById("summary").innerHTML = "Please, fill in all the fields...";
    }
}


