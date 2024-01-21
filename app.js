let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date (userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let today = new Date();

    
    let m2 = today.getDate();;
    let y2 = today.getMonth() + 1;
    let d2 = today.getFullYear()

    let d3, m3, y3;
    y3 = y2 - y1;

}