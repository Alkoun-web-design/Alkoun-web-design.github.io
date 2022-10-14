const h = document.getElementById("home");
const p = document.getElementById("projects");
const a = document.getElementById("about-us");
const c = document.getElementById("contact-us");
const pp = document.getElementById("priv-policy");


// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1028,
    duration: 40000,
    easing: 'linear',
    loop: true,
});


// Page Contents Fading In
const pageFadeIn = anime({
  delay: 1000,
  targets: '#home',
  duration: 8000,
  opacity: 1,
});


// Navigation
function showHome() {
  anime({
    delay: 50,
    targets: '#home',
    duration: 8000,
    opacity: 1,
  });
  h.style.display = "block";
  c.style.display = "none";
  a.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
};
  
function showProjects() {
  anime({
    delay: 50,
    targets: '#projects',
    duration: 8000,
    opacity: 1,
  });
  p.style.display = "flex"; 
  c.style.display = "none";
  a.style.display = "none";
  h.style.display = "none";
  pp.style.display = "none";
};

function showAboutUs() {
  anime({
    delay: 50,
    targets: '#about-us',
    duration: 8000,
    opacity: 1,
  });
  a.style.display = "block";
  c.style.display = "none";
  h.style.display = "none";
  p.style.display = "none";
  pp.style.display = "none";
};

function showContactUs() {
  anime({
    delay: 50,
    targets: '#contact-us',
    duration: 8000,
    opacity: 1,
  });
  c.style.display = "block";
  p.style.display = "none";
  h.style.display = "none";
  a.style.display = "none";
  pp.style.display = "none";
};

function showPrivPolicy() {
  anime({
    delay: 50,
    targets: '#priv-policy',
    duration: 8000,
    opacity: 1,
  });
  pp.style.display = "block";
  c.style.display = "none";
  p.style.display = "none";
  h.style.display = "none";
  a.style.display = "none";
};

// Project Details show upon hover
const projectDetails1 = document.querySelector(".project-1-details");
const projectName1 = document.getElementById("project-1");
const projectDetails2 = document.querySelector(".project-2-details");
const projectName2 = document.getElementById("project-2");
const projectDetails3 = document.querySelector(".project-3-details");
const projectName3 = document.getElementById("project-3");

projectName1.addEventListener("mouseover", function() {
  anime({
    targets: '.project-1-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails1.style.display="block";
  projectDetails2.style.display="none";
  projectDetails3.style.display="none";
});

projectName2.addEventListener("mouseover", function() {
  anime({
    targets: '.project-2-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails2.style.display="block";
  projectDetails1.style.display="none";
  projectDetails3.style.display="none";
});

projectName3.addEventListener("mouseover", function() {
  anime({
    targets: '.project-3-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails3.style.display="block";
  projectDetails1.style.display="none";
  projectDetails2.style.display="none";
});


//Social Media Icons hovering
const socialMediaIcons = document.querySelector(".sm-icons");
socialMediaIcons.addEventListener("mouseover", function() {
  socialMediaIcons.style.fill="linear-gradient(90deg, #1D176C 0%, #7118B6 100%)";
});




//  navButton.addEventListener("mouseout", event => {
//  console.log("Mouse out");
//});



//document.querySelector('.nav-btn').onclick = pageFadeIn;



/*// Navigation button hover and mouse over for project details





const pageFadeOut = anime({
  delay: 500,
  targets: '#home, #about-us, #projects, #contact-us',
  duration: 8000,
  opacity: 1,
});



//Content Appearing and Disappearing
var animation = anime({
  targets: '.play-pause-demo .el',
  translateX: 270,
  delay: function(el, i) { return i * 100; },
  direction: 'alternate',
  autoplay: false,
  loop: false,
  easing: 'easeIn'
});




document.querySelector('.play-pause-demo .pause').onclick = animation.pause;


//Another approach
logoTimeline
.add({
    targets: text1,
    duration: 700,
    delay: function(el, index) { return index*50; },
    opacity: 1,

    easing: 'easeOutCirc',
    translateX: function(el, index) {
        return [(-50+index*10),0]
    },
    offset:0,
    complete: function(anim) {
        logoTimeline.remove();
    }
});
*/
