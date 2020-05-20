//init
class Student {
    constructor(name, toan, ly, hoa) {
        this.name = name;
        this.toan = parseFloat(toan);
        this.ly = parseFloat(ly);
        this.hoa = parseFloat(hoa);
    }
    avg() {
        return ((this.toan + this.ly +this.hoa)/3).toFixed(2);
    }
}
let arrStudent = [];
let table = document.querySelector("tbody");
let noti = document.querySelector(".notification");

//main func
let insertStudent = () => {
    let st = getStudent();
    if (validate(st)) {
        addToTable(st);
    }
}
let calAvg = (e) => {
    //e.preventDefault()
    console.log("cal");
}
//
let validate = st => {
    let isValid = true;
    noti.innerHTML = "";
    let letters = /^[A-Za-z]+$/;   
    if (st.name == "") {
        noti.innerHTML += "Please enter student's name :<< <br>";
        document.getElementById("name").style.borderColor = "red";
        isValid = false;
    } else if (!letters.test(st.name)) {
        noti.innerHTML += "Name must be string :<< <br>";
        document.getElementById("name").style.borderColor = "red";
        isValid = false;
    }
    if (isNaN(st.toan)  ) {
        noti.innerHTML += "Please enter valid Maths Mark :<< <br>";
        document.getElementById("toan").style.borderColor = "red"
        isValid = false;
    }
    if (isNaN(st.ly)  ) {
        noti.innerHTML += "Please enter valid Physics Mark :<< <br>";
        document.getElementById("ly").style.borderColor = "red"
        isValid = false;
    }
    if ( isNaN(st.hoa) ) {
        noti.innerHTML += "Please enter valid Chemistry Mark :<< <br>";
        document.getElementById("hoa").style.borderColor = "red"
        isValid = false;
    }
    return (isValid);
}
let getStudent = () => {
    let name = document.querySelector("#name").value;
    let toan = document.querySelector("#toan").value;
    let ly = document.querySelector("#ly").value;
    let hoa = document.querySelector("#hoa").value;
    let st = new Student(name, toan, ly, hoa)
    arrStudent.push(st);
    return st;
}
let addToTable = st => {
    table.innerHTML += `<tr>\
    <td>${st.name}</td>\
    <td>${st.toan}</td>\
    <td>${st.ly}</td>\
    <td>${st.hoa}</td>\
    <td > <span id="avg">${st.avg()}</span> </td>\
    <td><button type="button" class = "edit">Edit</button></td>\
  </tr>`
}
let edit = () => {
    console.log("disss");
    
    document.querySelector("#submit").disabled = true;
}

//dom
document.querySelector("#submit").addEventListener("click", insertStudent);
document.querySelector("#calAvg").addEventListener("click", calAvg);
document.querySelector(".edit").addEventListener("click", edit);