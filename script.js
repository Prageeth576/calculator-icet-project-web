function submit() {
    let inputValue = document.getElementById("inputValue").value;
    console.log("submit : ", inputValue);

    const division = inputValue.split("/");
    const multiplication = inputValue.split("*");
    const subtraction = inputValue.split("-");
    const addition = inputValue.split("+");

    let num1;
    let num2;

    if (division.length==2) {
        num1 = Number(division[0]);
        num2 = Number(division[1]);

        let total = num1 / num2;
        document.getElementById("displayValue").innerHTML = inputValue + " =";
        document.getElementById("inputValue").value = total;
        console.log(num1, " / ", num2, " = ", total);

    } else if (multiplication.length==2) {
        num1 = Number(multiplication[0]);
        num2 = Number(multiplication[1]);

        let total = num1 * num2;
        document.getElementById("displayValue").innerHTML = inputValue + " =";
        document.getElementById("inputValue").value = total;
        console.log(num1, " * ", num2, " = ", total);

    } else if (subtraction.length==2) {
        num1 = Number(subtraction[0]);
        num2 = Number(subtraction[1]);

        let total = num1 - num2;
        document.getElementById("displayValue").innerHTML = inputValue + " =";
        document.getElementById("inputValue").value = total;
        console.log(num1, " - ", num2, " = ", total);

    } else if(addition.length==2) {
        num1 = Number(addition[0]);
        num2 = Number(addition[1]);

        let total = num1 + num2;
        document.getElementById("displayValue").innerHTML = inputValue + " =";
        document.getElementById("inputValue").value = total;
        console.log(num1, " + ", num2, " = ", total);
    } else {

    }


}