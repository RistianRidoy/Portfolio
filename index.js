/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
 let currentIndex = 0;
 const slides = document.querySelectorAll(".slide");
 const titleElement = document.getElementById("certificate-title");
 const titles = [
   "Machine Learning Using Python from PythonCoding",
   "Generative AI from Great Learning",
   "NLP AND Text Mining for Beginners from Simplilearn",
   "Introduction to Data Science from Simplilearn",
   "Best Membership Certificate from NSU ACM Student Chapter Club",
   "CareTutors Tutoring Certificate",
   "Chemistry Olympiad 2017 from Bangladesh Chemical Society"
 ];
 
 function updateSlide() {
   const offset = -currentIndex * 100;
   document.querySelector(".carousel").style.transform = `translateX(${offset}%)`;
   titleElement.textContent = titles[currentIndex];
 }
 
 function prevSlide() {
   currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
   updateSlide();
 }
 
 function nextSlide() {
   currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
   updateSlide();
 }
 
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});

// Open Lightbox
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = imgElement.src; // Set clicked image in lightbox
  lightbox.classList.add("show");;
}

// Close Lightbox when clicking outside the image
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
} 