
// News room making

let businessData = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";

let key = "df20cdfb2aec4cdea7841520d797bb41";

let fisteight = document.querySelector("#fisteight");
let sendeight = document.querySelector("#sendeight");
let thirdeight = document.querySelector("#thirdeight");

let businesKey = `${businessData}${key}`;


async function fetchdata() {
    let data = await fetch(businesKey);
    let fethed = await data.json()
    return fethed;
}
let bussNews = fetchdata();

async function showdata() {

    try {

        let fetchbussNews = await bussNews;

        let businessAriticel = fetchbussNews.articles;

        let indexId = 8;

        let fstegtBuinss = businessAriticel.slice(0, indexId);
        let sendBusiness = businessAriticel.slice(8, 16);
        let thirdBusiness = businessAriticel.slice(16, 20);

        let html = "";

        fstegtBuinss.forEach((e, i) => {


            let defalutimg = "./assets/defalult.jpg"

            html += `
            <div class="col-md-3">
            <a href=${e.url} target="_blank">
                <div class="historybox">
                    <div class="imgthumb">
                        <img src=${e.urlToImage ? e.urlToImage : defalutimg} alt="">
                    </div>
                    <p>${e.title}</p>
                </div>
            </a>
        </div>
        `
            fisteight.innerHTML = html;


        });


        // second data fetch

        let html2 = "";

        sendBusiness.forEach((e, i) => {

            let defalutimg = "./assets/defalult.jpg"

            html2 += `
            <div class="col-md-3">
            <a href=${e.url} target="_blank">
                <div class="historybox">
                    <div class="imgthumb">
                        <img src=${e.urlToImage ? e.urlToImage : defalutimg} alt="">
                    </div>
                    <p>${e["title"]}</p>
                </div>
            </a>
        </div>
        `
            sendeight.innerHTML = html2;
        });

        // Third data fetch

        let html3 = "";

        thirdBusiness.forEach((e, i) => {

            let defalutimg = "./assets/defalult.jpg"

            html3 += `
            <div class="col-md-3">
            <a href=${e.url} target="_blank">
            <div class="historybox">
                <div class="imgthumb">
                    <img src=${e.urlToImage ? e.urlToImage : defalutimg} alt="">
                </div>
                <p>${e["title"]}</p>
                
            </div>
            </a>
        </div>
            `
            thirdeight.innerHTML = html3;
        });

    } catch (e) {

        let err = e

        console.log(e)

    }
}

showdata();


// Navbar 

let navbar = document.querySelector(".nav_bar");

window.addEventListener('scroll', (e) => {



    let scrolVal = scrollY;

    if (scrolVal > 300) {
        navbar.classList.add("stkyclas");
        gsap.to('.barand h1', {
            scale: 0.8,
            ease: "power1.inOut",
        })
    } else {
        navbar.classList.remove("stkyclas");

        gsap.to('.barand h1', {
            scale: 1.1,
            ease: "power1.inOut",
        })
    }
})

// Manubar functionlity 

let manubar = document.querySelector(".manubar");
let navbarmau = document.querySelector(".navbarmau");
let main_nav = document.querySelector(".nav_bar");
let cross = document.querySelector(".cross");
let bar = document.querySelector(".bar");

function animaiteLink(){

    gsap.from('.navbarmau p', {
        y: -300,
        duration: 0.7,
        stagger: 0.3,
        opacity: 0
    })

    gsap.from('.navbarmau i', {

        x:100,
        stagger: 0.3,
        opacity: 0
    })


}





let flag = 1;

manubar.addEventListener('click', () => {

    if (flag == 1) {
        // navbarmau.classList.add('manucalss');
        main_nav.classList.add("navhight");
        navbarmau.classList.add("manucalss")
        cross.classList.add("visvislity");
        bar.style.display = "none"
        flag = 0;
        animaiteLink()
    } else {
        // navbarmau.classList.remove('manucalss');
        main_nav.classList.remove("navhight");
        navbarmau.classList.remove("manucalss")
        cross.classList.remove("visvislity");
        bar.style.display = "block"
        flag = 1; 
    }

})

//---- Animation------


const tl = gsap.timeline();

tl.from('.barand h1', {
    y: -300,
    duration: 1,
    stagger: 0.1,
    opacity: 0
})

tl.from('.logobx i', {
    y: -300,
    duration: 1,
    stagger: 0.1,
    opacity: 0
})

gsap.from(".sideone .sideoneimg img", {

    scale: 1.2,
    opacity: 0,
    duration: 2,
    delay: 1,
    stagger: 0.1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".sideone",
        scroller: "body",
        marker: true,
        start: "top 50%",
        end: "top 30%",
        scrub: 1
    }
}
)


gsap.from("#page3 .sideoneimg img",
    {
        y: 1000,

        scrollTrigger: {
            trigger: "#page3",
            scroller: "body",
            marker: true,
            start: "top 50%",
            end: "top 30%",
            scrub: 1
        }
    }
)

const t2 = gsap.timeline();
t2.to("#page4",
    {
        backgroundColor: "#ff5430", ease: Power3.easeOut,delay:2,

        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            marker: true,
            start: "top 50%",
            end: "top 30%",
            scrub: 1
        }
    }
)

t2.from("#page4 .sideoneimg img",
    {
        x:900,
        delay: 1,
        stagger: 0.1,

        scrollTrigger: {
            trigger: "#page4",
            scroller: "body",
            marker: true,
            start: "top 50%",
            end: "top 30%",
            scrub: 1
        }
    }
)

// =====================

gsap.to(".barand h1",{
    color:"#101213",
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".history",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

gsap.to(".logobx i",{
    color:"#101213",
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".history",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

gsap.to(".sidelinktwo",{
    color:"#101213",
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".history",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

gsap.from(".history .title h5",{
    y:100,
    opacity:0,


    scrollTrigger: {
        trigger: ".history",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

gsap.to(".sidelinkone",{
    color:"#101213",
    stagger: 0.1,

    scrollTrigger: {
        trigger: ".history",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

// =====================

gsap.from(".culture .title h5",{
    color:"#303133",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})


gsap.from(".sidelinkone",{
    color:"white",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})


gsap.from(".sidelinktwo",{
    color:"white",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})


gsap.to(".barand h1",{
    color:"white",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})

gsap.to(".logobx i",{
    color:"white",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top 1%",
        end: "top 1%",
        scrub: 1
    }

})


gsap.to(".culture",{
    backgroundColor:"#eda900",
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".culture",
        scroller: "body",
        marker: true,
        start: "top -100%",
        end: "top -100%",
        scrub: 1
    }

})


gsap.to(".football",{
    backgroundColor:"#ff5430",
    stagger: 0.1,
    ease: Power3.easeOut,
    scrollTrigger: {
        trigger: ".football",
        scroller: "body",
        marker: true,
        start: "top -90%",
        end: "top -90%",
        scrub: 1
    }

})

