// RSVP confirmation message
function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for confirming! We can't wait to celebrate with you ❤️";
}


// Wedding countdown timer
const weddingDate = new Date("October 15, 2026 14:00:00").getTime();


const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    // Calculate time remaining
    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    // Display countdown
    const timer = document.getElementById("countdown");


    if (timer) {
        timer.innerHTML =
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds";
    }


    // After wedding date
    if (distance < 0) {

        clearInterval(countdown);

        if (timer) {
            timer.innerHTML =
            "We are married! Thank you for celebrating with us ❤️";
        }

    }


}, 1000);