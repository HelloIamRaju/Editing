const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

const sections = document.querySelectorAll(".section");

function checkInView() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const inView = (rect.top <= window.innerHeight / 1.5);

    if (inView) {
      section.classList.add("in-view");
    }
  });
}

window.addEventListener("scroll", checkInView);
window.addEventListener("load", checkInView);


const readMoreButtons = document.querySelectorAll('.read-more-button');
const readMoreContents = document.querySelectorAll('.read-more-content');

readMoreButtons.forEach((button, index) => {
  let isReadMore = false;
  button.addEventListener('click', () => {
    if (isReadMore) {
      readMoreContents[index].style.display = 'none';
      button.textContent = 'Read More';
    } else {
      readMoreContents[index].style.display = 'block';
      button.textContent = 'Read Less';
    }
    isReadMore = !isReadMore;
  });
});
