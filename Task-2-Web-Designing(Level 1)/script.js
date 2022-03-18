window.addEventListener('scroll', function(){       // Scroll
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
function toggleMenu(){              // Menu
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}
// preloader
var preloader = document.getElementById('preloader');

function myFunction(){
    preloader.style.display = 'none';
}