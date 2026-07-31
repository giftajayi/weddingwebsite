/* =========================
   OPEN INVITATION
========================= */


function openInvitation() {

    const envelope = document.getElementById("envelopeScreen");

    envelope.style.opacity = "0";

    envelope.style.transition = "opacity 1s ease";


    setTimeout(function(){

        envelope.style.display = "none";

    },1000);


}





/* =========================
   COUNTDOWN TIMER
========================= */


function countdown(){

    const weddingDate = new Date("October 15, 2026 08:00:00").getTime();


    const now = new Date().getTime();


    const difference = weddingDate - now;



    if(difference <= 0){

        document.getElementById("countdown").innerHTML =
        "Today is the day! ❤️";

        return;

    }



    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        /(1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        /(1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        /1000
    );



    document.getElementById("countdown").innerHTML =

    `
    <div>
    ${days} Days
    </div>

    <div>
    ${hours} Hours
    </div>

    <div>
    ${minutes} Minutes
    </div>

    <div>
    ${seconds} Seconds
    </div>
    `;


}



setInterval(countdown,1000);

countdown();







/* =========================
   IMAGE FADE ANIMATION
========================= */


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform = "translateY(0)";


}


});


},

{

threshold:0.2

}

);



document.querySelectorAll(
".story-card, .card, .gallery-grid img"
)

.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(40px)";

element.style.transition="all 0.8s ease";


observer.observe(element);


});