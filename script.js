// Các hàm bạn đã có
function setLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'inline';
        } else {
            element.style.display = 'none';
        }
    });
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu() {
    document.querySelector("nav ul").style.right = "0";
}

function closemenu() {
    document.querySelector("nav ul").style.right = "-250px";
}

// Các hàm mới cho slider và modal
let slideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slider-img');
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

// Modal Logic
function openModal(src) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Close Modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal(); // Đóng modal nếu người dùng nhấp bên ngoài hình ảnh
    }
}
// --------------------------------------------------
