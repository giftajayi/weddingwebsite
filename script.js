// =========================
// OPEN INVITATION ENVELOPE
// =========================


function openInvitation() {

    const envelopeScreen = document.getElementById("envelopeScreen");


    envelopeScreen.classList.add("envelope-open");


    setTimeout(function(){

        envelopeScreen.style.display = "none";

    }, 1000);

}







// =========================
// COUNTDOWN TIMER
// =========================


const weddingDate = new Date("October 15, 2026 12:00:00").getTime();



const countdown = setInterval(function(){


    const now = new Date().getTime();


    const distance = weddingDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );



    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );



    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );



    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );



    document.getElementById("countdown").innerHTML =

    days + " Days " +
    hours + " Hours " +
    minutes + " Minutes " +
    seconds + " Seconds";



    if(distance < 0){


        clearInterval(countdown);


        document.getElementById("countdown").innerHTML =
        "Today is the day! ❤️";


    }



},1000);