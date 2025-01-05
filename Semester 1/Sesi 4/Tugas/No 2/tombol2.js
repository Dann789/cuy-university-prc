function press() {
    let tombol1 = document.getElementById("tombol1")
    let tombol2 = document.getElementById("tombol2")
    let tombol3 = document.getElementById("tombol3")
    let tombol4 = document.getElementById("tombol4")

    let lampu1 = document.getElementById("lampu1")
    let lampu2 = document.getElementById("lampu2")
    let lampu3 = document.getElementById("lampu3")
    let lampu4 = document.getElementById("lampu4")
    let lampu5 = document.getElementById("lampu5")
    let lampu6 = document.getElementById("lampu6")
    let lampu7 = document.getElementById("lampu7")
    let lampu8 = document.getElementById("lampu8")
    let lampu9 = document.getElementById("lampu9")
    let lampu10 = document.getElementById("lampu10")

    if(tombol1.checked) {
        lampu1.src = "/assets/images/on.gif"
        lampu2.src = "/assets/images/on.gif"
        lampu3.src = "/assets/images/on.gif"
        lampu4.src = "/assets/images/on.gif"
    } else {
        lampu1.src = "/assets/images/off.gif"
        lampu2.src = "/assets/images/off.gif"
        lampu3.src = "/assets/images/off.gif"
        lampu4.src = "/assets/images/off.gif"
    }

    if(tombol2.checked) {
        lampu5.src = "/assets/images/on.gif"
        lampu6.src = "/assets/images/on.gif"
        lampu7.src = "/assets/images/on.gif"
    } else {
        lampu5.src = "/assets/images/off.gif"
        lampu6.src = "/assets/images/off.gif"
        lampu7.src = "/assets/images/off.gif"
    }

    if(tombol3.checked) {
        lampu8.src = "/assets/images/on.gif"
    } else {
        lampu8.src = "/assets/images/off.gif"
    }

    if(tombol4.checked) {
        lampu9.src = "/assets/images/on.gif"
        lampu10.src = "/assets/images/on.gif"
    } else {
        lampu9.src = "/assets/images/off.gif"
        lampu10.src = "/assets/images/off.gif"
    }
}