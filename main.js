//If
function task1_if() {
    let numb = parseInt(prompt('Write number:'))
    if (numb > 0) {
        alert('positive number')
    }
    else if (numb < 0) {
        alert('Negative number')
    }
    else if (numb == 0) {
        alert('Number = 0')
    }
}
function task2_if() {
    let age = parseInt(prompt("Write your age"))
    if (age => 3 && age <= 120) {
        alert(`Your age correct`)
    }
    else if (age < 3) {
        alert('Or you baby or you not born')
    }
}
function task3_if() {
    let userInput = prompt("Write number:");

    if (!isNaN(userInput)) {

        let absoluteValue = Math.abs(parseFloat(userInput));

        alert("Number module: " + absoluteValue);
    } else {
        alert("Incorect number");
    }
}
function task4_if() {
    let hours = parseInt(prompt('Write hours:'))
    let minutes = parseInt(prompt('Write minutes:'))
    let seconds = parseInt(prompt('Write seconds:'))
    if (hours >= 0 && hours <= 24 && minutes >= 0 && minutes <= 60 && seconds >= 0 && seconds <= 60) {
        alert("Time input correct")
    }
    else {
        alert("Incorect input")
    }
}
function task5_if() {
    let x = parseFloat(prompt("Write cords x:"));
    let y = parseFloat(prompt("Write cords y:"));

    if (!isNaN(x) && !isNaN(y)) {
        if (x == 0 && y == 0) {
            alert("The point is at the origin of coordinates.");
        } else if (x == 0) {
            alert("The point is on the Y axis.");
        } else if (y == 0) {
            alert("The point is on the X-axis.");
        } else {
            let quadrant;
            if (x > 0 && y > 0) {
                quadrant = 1;
            } else if (x < 0 && y > 0) {
                quadrant = 2;
            } else if (x < 0 && y < 0) {
                quadrant = 3;
            } else {
                quadrant = 4;
            }

            alert("The point is located in " + quadrant + " quarters.");
        }
    } else {
        alert("Please enter the correct coordinates.");
    }
}
//Switch
function task1_switch() {
    let month_num = parseInt(prompt("Write number of month:"))
    if (month_num >= 1 && month_num <= 12) {
        switch (month_num) {
            case 1:
                alert("January")
                break
            case 2:
                alert("February")
                break
            case 3:
                alert("March")
                break
            case 4:
                alert("April")
                break
            case 5:
                alert("May")
                break
            case 6:
                alert("June")
                break
            case 7:
                alert("July")
                break
            case 8:
                alert("August")
                break
            case 9:
                alert("September")
                break
            case 10:
                alert("October")
                break
            case 11:
                alert("November")
                break
            case 12:
                alert("December")
                break
        }
    }
    else {
        alert('Write correct month')
    }
}
function task2_switch() {
    let first_num = parseInt(prompt('Write first number:'))
    let second_num = parseInt(prompt('Write second number:'))
    let operation = prompt("Write operation(+-*/)")
    switch (operation) {
        case "+":
            alert(first_num + second_num)
            break
        case "-":
            alert(first_num - second_num)
            break
        case "*":
            alert(first_num * second_num)
            break
        case "/":
            if (first_num != 0 && second_num != 0) {
                alert(first_num / second_num)
            }
            else {
                alert("You can't divide by 0")
            }
            break
    }
}
//Ternar
function task1_ternary() {
    let first_num = parseInt(prompt('Write first number:'))
    let second_num = parseInt(prompt('Write second number:'))
    first_num > second_num ? alert(`${first_num} more than ${second_num}`) : alert(`${second_num} more than ${first_num}`)
}
function task2_ternary()
{
    let numb = parseInt(prompt("Write number:"))
    if(numb == 0)
    {
        alert("number not multiple of 5")
    }
    else
    {
        numb % 5 == 0 ? alert("number multiple of 5") : alert("number not multiple of 5")
    }
    
}
function task3_ternary()
{
    let planet = prompt("Write name of planet:")
    planet.toLowerCase() == "земля"? alert("Привіт, землянине!"):alert("Привіт, інопланетянине!")
}