
function showMessage(){

document.getElementById("message").innerHTML =
"Thank you for confirming! We cannot wait to celebrate with you ❤️";

}




const weddingDate = new Date("October 15, 2026 14:00:00").getTime();



const timer = setInterval(function(){



const now = new Date().getTime();


const distance = weddingDate - now;



const days = Math.floor(
distance / (1000*60*60*24)
);



const hours = Math.floor(
(distance % (1000*60*60*24)) /
(1000*60*60)
);



const minutes = Math.floor(
(distance % (1000*60*60)) /
(1000*60)
);



const seconds = Math.floor(
(distance % (1000*60)) /
1000
);




document.getElementById("countdown").innerHTML =

days + " Days " +
hours + " Hours " +
minutes + " Minutes " +
seconds + " Seconds";





if(distance < 0){


clearInterval(timer);


document.getElementById("countdown").innerHTML =
"We are married! ❤️";


}



},1000);