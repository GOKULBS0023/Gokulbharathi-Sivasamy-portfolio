

const professionText = "Front End Developer";
const professionTypingSpeed = 100;
const professionEraseSpeed = 50;
const delayBetweenAnimations = 1000;

const typedTextElement = document.getElementById("typed-text");

let charIndex = 0;

function typeProfession() {
  if (charIndex < professionText.length) {
    typedTextElement.textContent += professionText.charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, professionTypingSpeed);
  } else {
    setTimeout(eraseProfession, delayBetweenAnimations);
  }
}

function eraseProfession() {
  const currentText = typedTextElement.textContent;
  if (currentText.length > 0) {
    typedTextElement.textContent = currentText.slice(0, -1);
    setTimeout(eraseProfession, professionEraseSpeed);
  } else {
    charIndex = 0;
    setTimeout(typeProfession, delayBetweenAnimations);
  }
}

typeProfession();

// Scroll to top

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", function () {
    setTimeout(function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 300);
  });
});

const projects = [
  {
    id: 1,
    name: "memory matching game",
    category: "game",
    img: "./Images/memory-matching-game.png",
    page: "https://memory-matching-game-skillsafari.netlify.app",
    code: "https://github.com/GOKULBS0023/Memory-matching-game",
  },
  {
    id: 2,
    name: "restaurant menu card",
    category: "design",
    img: "./Images/restaurant-menu-desk.jpeg",
    page: "https://gokul-skillsafari-restaurant-menu.netlify.app/",
    code: "https://github.com/GOKULBS0023/restaurant-menu.git",
  },
  {
    id: 3,
    name: "age calculator",
    category: "tools",
    img: "./Images/age-calculator-desk.jpeg",
    page: "https://age-calculator-frontend-mentor.netlify.app/",
    code: "https://github.com/GOKULBS0023/age-calculator-frontend-mentor",
  },
  {
    id: 4,
    name: "BMI calculator",
    category: "tools",
    img: "./Images/bmi-calculator-desk.jpeg",
    page: "https://bmi-calculator-gokulbs.netlify.app",
    code: "https://github.com/GOKULBS0023/bmi-calculator",
  },
  {
    id: 5,
    name: "product management system",
    category: "tools",
    img: "./Images/product-management-desk.jpeg",
    page: "https://product-management-system-skillsafari.netlify.app",
    code: "https://github.com/GOKULBS0023/product-management-system",
  },
  {
    id: 6,
    name: "temperature calculator",
    category: "tools",
    img: "./Images/temp-convertor-desk.jpeg",
    page: "https://temperature-convertor-gokulbs.netlify.app",
    code: "https://github.com/GOKULBS0023/temperature-convertor",
  },
  {
    id: 7,
    name: "natours CSS animations",
    category: "design",
    img: "./Images/natours-desk.png",
    page: "https://natour-gokulbs.netlify.app",
    code: "https://github.com/GOKULBS0023/Natour-css-animation",
  },
];
// Take to the section:
const aboutSectionEl = document.getElementById("about");
const skillsSectionEl = document.getElementById("skills");
const experienceSectionEl = document.getElementById("experience");
const educationSectionEl = document.getElementById("education");
const projectsSectionEl = document.getElementById("projects");
const contactSectionEl = document.getElementById("contact");

let homePosition = 0;
let aboutPosition;
let skillsPosition;
let experiencePosition;
let educationPosition;
let projectsPosition;
let contactPosition;

const getPosition = () => {
const navbarHeight = document.querySelector("nav").offsetHeight;
  aboutPosition = aboutSectionEl.offsetTop - navbarHeight;
  skillsPosition = skillsSectionEl.offsetTop - navbarHeight;
  experiencePosition = experienceSectionEl.offsetTop - navbarHeight;
  educationPosition = educationSectionEl.offsetTop - navbarHeight;
  projectsPosition = projectsSectionEl.offsetTop - navbarHeight;
  contactPosition = contactSectionEl.offsetTop - navbarHeight;
};
const navLinksEL = document.querySelectorAll("[data-nav]");
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  let currentWidth = window.innerWidth;
  if (currentWidth > 800) {
    if (window.scrollY > 10) {
      navbar.classList.add("visible");
    }else {
      navbar.classList.remove("visible");
    }
  }else {
    navbar.classList.remove("visible");
  }
  navLinksEL.forEach(nav=>{
    nav.classList.remove("active");
  }); 
   if(window.scrollY < skillsPosition) {
    console.log(window.scrollY, skillsPosition);
    document.querySelector('[data-nav="home"]').classList.add("active");
   } else if (window.scrollY < experiencePosition) {
    console.log(window.scrollY, experiencePosition);
    document.querySelector('[data-nav="skills"]').classList.add("active");
   }  else if (window.scrollY < educationPosition) {
    document.querySelector('[data-nav="experience"]').classList.add("active");
   } else if (window.scrollY < projectsPosition) {
    document.querySelector('[data-nav="education"]').classList.add("active"); 
   } else if (window.scrollY < contactPosition) {
    document.querySelector('[data-nav="projects"]').classList.add("active");
   } else if (window.scrollY > contactPosition) {
    document.querySelector('[data-nav="contact"]').classList.add("active");
   } 
});
getPosition();
const takeToSection = (section) => {
  getPosition();
  switch (section) {
    case aboutSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: aboutPosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    case skillsSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: skillsPosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    case experienceSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: experiencePosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    case educationSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: educationPosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    case projectsSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: projectsPosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    case contactSectionEl.getAttribute("id"):
      setTimeout(function () {
        window.scrollTo({
          top: contactPosition,
          behavior: "smooth",
        });
      }, 300);
      break;
    default:
      setTimeout(function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 300);
      break;
  }
};
navLinksEL.forEach((nav) => {
  nav.addEventListener("click", (event) => {
    navLinksEL.forEach(nav=>{
      nav.classList.remove("active");
    });
    nav.classList.add("active");
    takeToSection(event.target.getAttribute("data-nav"));
  });
});
const portfolioSection = document.querySelector(".portfolio");
const displayProjects = (type) => {
  filterButtons.forEach((btn) => {
    btn.classList.remove("active");
    if (btn.getAttribute("data-filter") === type) {
      btn.classList.add("active");
    }
  });
  let projectsList = projects.map((project) => {
    if (type === "all") {
      return `
    <div class="portfolio__card">
      <div class="project__image">
          <img class="img-fluid" src="${project.img}" alt="${project.name}">
      </div>
      <div class="project__desc">
          <h4 class="project__title">${project.name}</h4>
          <ul class="project__tools-list">
              <li><a href="${project.code}" target="_blank">Code</a></li>
              <li><a href="${project.page}" target="_blank">View Page</a></li>
          </ul>
      </div>
    </div>`;
    } else {
      if (type === project.category) {
        return `
    <div class="portfolio__card">
      <div class="project__image">
          <img class="img-fluid" src="${project.img}" alt="${project.name}">
      </div>
      <div class="project__desc">
          <h4 class="project__title">${project.name}</h4>
          <ul class="project__tools-list">
              <li><a href="${project.code}" target="_blank">Code</a></li>
              <li><a href="${project.page}" target="_blank">View Page</a></li>
          </ul>
      </div>
    </div>`;
      }
    }
  });
  projectsList = projectsList.join("");
  portfolioSection.innerHTML = projectsList;
};

const filterButtons = document.querySelectorAll("[data-filter]");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    displayProjects(event.target.getAttribute("data-filter"));
  });
});
displayProjects("all");
