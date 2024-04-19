'use strict';

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Pop-up açma ve kapatma işlemleri
var modal = document.getElementById('loginModal');
var btn = document.querySelector('.btn.has-before'); // Kayıt / Giriş butonu
var closeBtn = document.querySelector('.close-btn');

btn.onclick = function() {
  modal.style.display = 'block';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Sekmeler arası geçiş
var tabs = document.querySelectorAll('.tab');
var panes = document.querySelectorAll('.tab-pane');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', function() {
    tabs.forEach(t => t.classList.remove('active'));
    panes.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    panes[index].classList.add('active');
  });
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementsByName('password')[1].value; // İkinci şifre alanına erişim

  if (password !== confirmPassword) {
    Toastify({
      text: "Girdiğiniz şifreler eşleşmiyor. Lütfen şifrelerinizi kontrol edin.",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      backgroundColor: "red",
      onClick: function(){} // Callback function after click
  }).showToast();
    event.preventDefault(); // Form gönderimini engelle
  }
});

function showToast() {
  Toastify({
      text: "This is a toast",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: 'right', // `left`, `center` or `right`
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
      onClick: function(){} // Callback function after click
  }).showToast();
}

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);