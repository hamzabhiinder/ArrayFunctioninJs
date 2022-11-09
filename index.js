
let index = document.querySelector("#index")
let input = document.querySelector("#text")
let result = document.querySelector("#result")

const array = ["Adeel", "Hamza", "Atif"];
let i = 0;

let push = document.querySelector("#push")
let pushbtn = document.querySelector("#pushbtn")


function R1() {
   
    document.getElementById("pushbtn").disabled = false;
    input.disabled = false
    index.disabled=true
     $("#shiftbtn").prop('disabled', true);
     $("#deletebtn").prop('disabled', true);
     $("#indexofbtn").prop('disabled', true);
     $("#Reversebtn").prop('disabled', true);
     $("#Popbtn").prop('disabled', true);
     $("#unShiftbtn").prop('disabled', true);
     $("#sortbtn").prop('disabled', true);
     $("#ValueAtbtn").prop('disabled', true);
     $("#updatebtn").prop('disabled', true);

}
function R2() {
    
    index.innerHTML=""
    document.getElementById("shiftbtn").disabled = false;
    input.disabled=true
    $("#pushbtn").prop('disabled', true);
    $("#deletebtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
    
}function R3() {
    document.getElementById("deletebtn").disabled = false;
   input.disabled=true

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);

    index.disabled = false
}function R4() {
    document.getElementById("indexofbtn").disabled = false;
    input.disabled = false
    index.disabled = true

    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
   
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
}function R5() {
    document.getElementById("Reversebtn").disabled = false;
    input.disabled = true
    index.disabled = true

    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
   
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
   
}function R6() {
    document.getElementById("Popbtn").disabled = false;
    input.disabled=true
    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
  
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
    
}function R7() {
    document.getElementById("unShiftbtn").disabled = false;
    input.disabled = false
    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
   
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
}function R8() {
    document.getElementById("sortbtn").disabled = false;
    input.disabled=true

    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
   
    $("#ValueAtbtn").prop('disabled', true);
    $("#updatebtn").prop('disabled', true);
  
}function R9() {
    document.getElementById("ValueAtbtn").disabled = false;
    input.disabled = true
    index.disabled=true
    $("#deletebtn").prop('disabled', true);
    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);  
    $("#updatebtn").prop('disabled', true);
}function R10() {
    document.getElementById("updatebtn").disabled = false;
    input.disabled = false
    index.disabled = false
    $("#deletebtn").prop('disabled', true);

    $("#pushbtn").prop('disabled', true);
    $("#shiftbtn").prop('disabled', true);
    $("#indexofbtn").prop('disabled', true);
    $("#Reversebtn").prop('disabled', true);
    $("#Popbtn").prop('disabled', true);
    $("#unShiftbtn").prop('disabled', true);
    $("#sortbtn").prop('disabled', true);
    $("#ValueAtbtn").prop('disabled', true);
   
}



function Push() {

    let input = document.querySelector("#text").value
    result.innerHTML = ""
    if (input != "") {
        array.push(input);
        for (const key in array) {
            result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
            console.log(key + array[key])
        }

    } else {
        alert("Insert The Value First")
        console.log("error")
    }
}

function update() {
    let input = document.querySelector("#text").value
    let index = +document.querySelector("#index").value


    array[index] = input

    result.innerHTML = ""
    if (input != "") {

        for (const key in array) {
            result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
            console.log(key + array[key])
        }

    } else {
        alert("Insert The Value First")
        console.log("error")
    }
}

function IndexOf() {
    let input = document.querySelector("#text").value
    let index = document.querySelector("#index")

    let arrayNumber = array.indexOf(input)
    index.value = arrayNumber
    console.log(arrayNumber)



}

function unShift() {
    let input = document.querySelector("#text").value
    result.innerHTML = ""
    if (input != "") {
        array.unshift(input);
        for (const key in array) {
            result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
            console.log(key + array[key])
        }

    } else {
        alert("Insert The Value First")
        console.log("error")
    }
}
function Pop() {
    let input = document.querySelector("#text").value
    result.innerHTML = ""
    array.pop();
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
        console.log(key + array[key])
    }
    console.log("error")
}
function Shift() {

    result.innerHTML = ""
    array.shift();
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
        console.log(key + array[key])
    }
    console.log("error")
}


function ValueAt() {

    result.innerHTML = ""
    var iterator=array.values();
    let i=0

    for (const key of iterator) {
        result.innerHTML += `ValuesAt[${i++}] :- ` + key + "<br/>"
        console.log(key )
    }
    console.log("error")
}
function sort() {

    result.innerHTML = ""
    array.sort();
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
        console.log(key + array[key])
    }
    console.log("error")
}
function deletebtn() {

    let index = +document.querySelector("#index").value

  
    result.innerHTML = ""
    delete array[index];
    console.log(array.values(index))
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
        console.log(key + array[key])
    }
    console.log("error")
}
function reverse() {

    result.innerHTML = ""
    array.reverse();
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"
        console.log(key + array[key])
    }
    console.log("error")
}


function showArray() {



    if (pushbtn.checked == true) {
        $("#push").prop('disabled', false);

    } else {

        $(".btnOff").prop('disabled', true);
    }




    input.disabled = true

    index.disabled = true
    for (const key in array) {
        result.innerHTML += `Array[${key}] :- ` + array[key] + "<br/>"

        console.log(key + array[key])
    }
}
showArray()