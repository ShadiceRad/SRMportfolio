

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#input').addEventListener("keydown", function(e) {
        if (e.code=== "Enter"){
            console.log("you pressed enter")
        }
    });
});

$('.dropdown-menu li a').each(function() {
    if($(location).attr('href').indexOf($(this).attr('href')) > 0) {
         $('.dropdown-menu').show();
    } 
});

var hb = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu')


hb.addEventListener('click', () => {
    hb.classList.toggle("active");
    navMenu.classList.toggle("active");
   
});

var lastScrollTop;
navbar=document.querySelector(".navbar");
window.addEventListener('scroll', function(){
    var scrollTop = window. pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navbar.style.top ='-100px';
    }
    else {
        navbar.style.top= '0';
    }
    lastScrollTop = scrollTop;
});


function closemsg(){
    const x = document.getElementById('closemsgr');
    
    x.style.display = "none";
 
    
}
function openmsgr(){
    const x = document.getElementById('closemsgr');
  
    x.style.display = "block";
   
}

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hb.classList.remove("active");
        navMenu.classList.remove("active");
    }))


    function visible(id, container) {
    
        const visImg = document.getElementById(id);
        const imgdis = document.getElementById(container);
        const test = document.querySelector(".skill-link").querySelector(".active");
        const test2 = document.getElementsByClassName("skill-content");
    
        test.classList.toggle("active");
        const len = test2.length;
        for (let i=0; i <= len; i++){
            
           if(test2[i].style.display == "flex")
           {
                test2[i].style.display = "none";
                break;
           }
           else{
                
                continue;
           }
        }
        isactive = visImg.classList;
        isblock = imgdis;
       if (isactive != "active" && isblock != "flex" )
       {
        isactive.toggle("active");
        isblock.setAttribute('style', 'display:flex !important;')
       
       }
       else{
            return false;
       }
       
    
    
        
    }

    function skip(position) {
        if(position === "Next"){
            const skill = document.querySelector(".skill-link").querySelector(".active")
           
            const a = skill.id;
            if (a === "txtfrontEnd"){
                visible('txtbackEnd','backend');
            }
            else if( a === "txtbackEnd") {
                visible('txtillPro','illustration');
            }
            else if( a === "txtillPro"){
                visible('txtfrontEnd','frontend');
            }
            else {
                return false;
            }
        }
        else if(position === "Prev") {
            const skill = document.querySelector(".skill-link").querySelector(".active")
           
            const a = skill.id;
            if (a === "txtfrontEnd"){
                visible('txtillPro','illustration');
            }
            else if( a === "txtbackEnd") {
                visible('txtfrontEnd','frontend');
            }
            else if( a === "txtillPro"){
                visible('txtbackEnd','backend');
            }
            else {
                return false;
            }

        }
    }
    