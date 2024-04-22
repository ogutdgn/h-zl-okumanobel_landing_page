'use strict';

const blogData = [
  {
    title: "Neden Hızlı Okumayı Öğrenmeliyim?",
    imageUrl: "assets/images/blog-1.jpg",
    brief: "Hızlı okumanın bireysel ve akademik faydalarını keşfedin.",
    content: `Hızlı okuma, okuduğunuz metin üzerinden daha hızlı geçmenizi ve dolayısıyla daha fazla bilgiyi kısa sürede işlemenizi sağlar. Bu yetenek, özellikle bilgi yoğun dünyamızda çok değerlidir. Gün içinde karşılaştığımız bilgi bombardımanı içinde önemli olan bilgileri sıralamak ve anlamak için hızlı okuma teknikleri büyük bir avantaj sağlar. Ayrıca, hızlı okuma eğitimi sırasında yapılan göz ve beyin egzersizleri, dikkat süresini ve konsantrasyonu artırır, bu da öğrenme kapasitesini genel olarak iyileştirir. Bu blogda, hızlı okumanın temel prensipleri, teknikleri ve günlük hayata entegrasyonu hakkında bilgiler sunacağız.`
  },
  {
    title: "Hızlı Okumanın Üni. Sınavı Başarısına Katkıları Nelerdir?",
    imageUrl: "assets/images/blog-2.jpg",
    brief: "Üniversite sınavına hazırlanan öğrenciler için hızlı okumanın önemi.",
    content: `Üniversite sınavları gibi büyük sınavlarda başarılı olmak için hızlı ve etkili okuma becerileri elzemdir. Sınavlarda karşılaşılan çok sayıda soruyu belirli bir süre içinde çözmek zorundayken, hızlı okuma teknikleri bu süreci büyük ölçüde kolaylaştırabilir. Bu blogda, hızlı okuma tekniklerinin öğrencilerin sınav performansını nasıl artırabileceği, alınabilecek pratik adımlar ve çeşitli alıştırmalarla bu becerilerin nasıl geliştirilebileceği üzerine detaylı bilgiler vereceğiz. Özellikle vurgulama, anahtar kelimeleri tespit etme ve metni yapılandırma teknikleri üzerinde duracağız.`
  },
  {
    title: "Göz Egzersizlerinin Bana Nasıl Bir Faydası Olacak?",
    imageUrl: "assets/images/blog-3.jpg",
    brief: "Göz sağlığınızı koruyun ve okuma verimliliğinizi artırın.",
    content: `Gözlerimiz, özellikle bilgisayar, tablet ve telefon ekranlarına bakma süremizin artmasıyla daha fazla yorulmaktadır. Göz egzersizleri, bu yorgunluğu azaltmada ve göz sağlığını korumada kritik bir rol oynar. Bu egzersizler, göz kaslarını güçlendirir, odaklanma yeteneğini artırır ve gözlerin daha uzun süre sağlıklı kalmasını sağlar. Bu blogda, basit göz egzersizlerinin nasıl yapıldığı, bu egzersizlerin günlük rutinlere nasıl dahil edilebileceği ve düzenli uygulamanın faydaları detaylı bir şekilde anlatılacak.`
  }
];

function createBlogCards() {
  const container = document.getElementById('ul-blogs');
  blogData.forEach((blog, index) => {
    const card = document.createElement('li');
    card.className = 'blog-card';
    card.innerHTML = `
        <div class="blog-card">
          <figure class="card-banner img-holder has-after" style="--width: 370; --height: 370;">
          <img src="${blog.imageUrl}" width="370" height="370" loading="lazy"
            alt="Become A Better Blogger: Content Planning" class="img-cover">
          </figure>
          <div class="card-content">
            <h3 >${blog.title}</h3>
            <p>${blog.brief}</p>
            <button class="card-title" onclick="openPopup(${index})">Read More</button>
          </div>
        <div/>
    `;
    container.appendChild(card);
  });
}

function openPopup(index) {
  const data = blogData[index];
  console.log(data);
  document.getElementById('blogTitle').textContent = data.title;
  document.getElementById('blogContent').textContent = data.content;
  // document.getElementById('blogImage').src = data.imageUrl;
  document.getElementById('blogPopup').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', createBlogCards);

document.querySelector('.close-btn').addEventListener('click', function() {
  document.getElementById('blogPopup').style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == document.getElementById('blogPopup')) {
    document.getElementById('blogPopup').style.display = 'none';
  }
}


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