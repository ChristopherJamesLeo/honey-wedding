console.log("hello world");

// Start jquery area
$(document).ready(function(){
    // console.log("hello jquery");

    // Start Gallery Section
    $('.gallery_img').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    gallery : {
        enabled : true,
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

    // The "opener" function should return the element from which popup will be zoomed in
    // and to which popup will be scaled down
    // By defailt it looks for an image tag:
        opener: function(openerElement) {
      // openerElement is the element on which popup was initialized, in this case its <a> tag
      // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
    }

    });
    // End Gallery Section

    // Start Reservation section
    $("#meal,#guest").click(function(){
        // console.log("hello")
        $(this).siblings().toggleClass("active");
    })
    // End Reservation Section

    // Start Gift Section
    $("#gift_carousel").owlCarousel({
        items : 5,
        loop : true
    });
    // End Gift Section 
})

// End jquery area

document.querySelector(".navbar-toggler").addEventListener("click",function(e){
    this.classList.toggle("active");
})

// let getItems = document.querySelectorAll(".meal_item");
// let getinputbox = document.querySelector("#meal");

// getItems.forEach(function(getItem){
//     getItem.addEventListener("click",function(){
//         // console.log(this.parentElement);
//         this.parentElement.classList.remove("active");
//         // console.log(this.innerText);
//         getinputbox.value = this.innerText;
//     })
// })

function selectbox(selector , box){
    let getItems = document.querySelectorAll(selector);
    let getinputbox = document.querySelector(box);

    getItems.forEach(function(getItem){
        getItem.addEventListener("click",function(){
            // console.log(this.parentElement);
            this.parentElement.classList.remove("active");
            // console.log(this.innerText);
            getinputbox.value = this.innerText;
        })
    })
}

selectbox(".meal_item","#meal");

selectbox(".guest_item","#guest");


// Start Timer

var getday = document.getElementById("day");
var gethour = document.getElementById("hour");
var getminute = document.getElementById("minute");
var getsecond = document.getElementById("second");

let timerInt ;

timerInt = setInterval(function(){
    let getcurdate = new Date();

    var getcurtime = getcurdate.getTime();
    
    // console.log(getcurtime);
    
    
    let getenddate = new Date("5-19-2023 14:47:23");
    
    var getendtime = getenddate.getTime();
    // console.log(getendtime);

    if(getenddate > getcurdate){
        let getdiftime = getendtime - getcurtime;
        showtimer(getdiftime)
    }else {
        let getdiftime =  getcurtime - getendtime;
        showtimer(getdiftime);

    }

},1000)


function showtimer(mili){
    let getdifday = Math.floor(mili / (24*60*60*1000));
    let getdifhour = Math.floor((mili / (1000 * 60 * 60)) % 24);
    let getdifminute = Math.floor((mili / (1000 * 60)) % 60);
    let getdifsecond = Math.floor((mili / 1000) % 60);

    // console.log(getdifday,getdifhour,getdifminute,getdifsecond)

    getday.innerText = `${getdifday < 10 ? "0"+getdifday : getdifday}`;
    gethour.innerText = `${getdifhour < 10 ? "0"+getdifhour : getdifhour}`;
    getminute.innerText = `${getdifminute < 10 ? "0"+getdifminute : getdifminute}`;
    getsecond.innerText = `${getdifsecond < 10 ? "0"+getdifsecond : getdifsecond}`;
}

// End Timer