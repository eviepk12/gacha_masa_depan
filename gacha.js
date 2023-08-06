let jawaban = Math.floor(Math.random() * 5 + 1)

switch(jawaban) {
    case 1:
        document.getElementById("jawaban").innerHTML = "A"
        break;
    case 2:
        document.getElementById("jawaban").innerHTML = "B"
        break;
    case 3:
        document.getElementById("jawaban").innerHTML = "C"
        break;
    case 4:
        document.getElementById("jawaban").innerHTML = "D"
        break;
    case 5:
        document.getElementById("jawaban").innerHTML = "E"
        break;

    default:
        document.write("Error")
}