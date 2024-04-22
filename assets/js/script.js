"use strict";

const blogData = [
  // {
  //   date: "15 Mayıs, 2024",
  //   title: "Teknolojinin Hızla Geliştiği Çağda Hızlı Okumanın Rolü",
  //   imageUrl: "assets/images/course-1.jpg",
  //   brief: "Teknoloji ve bilgi çağında hızlı okumanın önemi giderek artıyor.",
  //   content: `Teknoloji çağında bilgiye hızlı erişim ve işleme yeteneği hayati öneme sahiptir. Bu blogda, teknolojinin sürekli gelişimi içinde hızlı okumanın nasıl bir avantaj sağladığını, iş ve eğitim dünyasında bu becerinin nasıl fark yaratabileceğini ele alacağız.`
  // },
  // {
  //   date: "22 Mayıs, 2024",
  //   title: "Çocuklar için Hızlı Okuma Teknikleri",
  //   imageUrl: "assets/images/course-2.jpg",
  //   brief: "Çocukların hızlı okuma tekniklerini öğrenmeleri nasıl avantaj sağlar?",
  //   content: `Çocuklar için hızlı okuma tekniklerini erken yaşlarda öğrenmek, onların okul başarısını ve genel öğrenme yeteneklerini artırabilir. Bu blogda, çocuklar için uygulanabilecek hızlı okuma teknikleri ve bu tekniklerin çocukların akademik gelişimine olan katkıları üzerine bilgiler sunacağız.`
  // },
  {
    date: "10 Nisan, 2024",
    title: "Neden Hızlı Okumayı Öğrenmeliyim?",
    imageUrl: "assets/images/blog-1.jpg",
    brief: "Hızlı okumanın bireysel ve akademik faydalarını keşfedin.",
    content: `Hızlı okuma, okuduğunuz metin üzerinden daha hızlı geçmenizi ve dolayısıyla daha fazla bilgiyi kısa sürede işlemenizi sağlar. Bu yetenek, özellikle bilgi yoğun dünyamızda çok değerlidir. Gün içinde karşılaştığımız bilgi bombardımanı içinde önemli olan bilgileri sıralamak ve anlamak için hızlı okuma teknikleri büyük bir avantaj sağlar. Ayrıca, hızlı okuma eğitimi sırasında yapılan göz ve beyin egzersizleri, dikkat süresini ve konsantrasyonu artırır, bu da öğrenme kapasitesini genel olarak iyileştirir. Bu blogda, hızlı okumanın temel prensipleri, teknikleri ve günlük hayata entegrasyonu hakkında bilgiler sunacağız.`,
  },
  {
    date: "23 Nisan, 2024",
    title: "Hızlı Okumanın Üni. Sınavı Başarısına Katkıları Nelerdir?",
    imageUrl: "assets/images/blog-2.jpg",
    brief:
      "Üniversite sınavına hazırlanan öğrenciler için hızlı okumanın önemi.",
    content: `Üniversite sınavları gibi büyük sınavlarda başarılı olmak için hızlı ve etkili okuma becerileri elzemdir. Sınavlarda karşılaşılan çok sayıda soruyu belirli bir süre içinde çözmek zorundayken, hızlı okuma teknikleri bu süreci büyük ölçüde kolaylaştırabilir. Bu blogda, hızlı okuma tekniklerinin öğrencilerin sınav performansını nasıl artırabileceği, alınabilecek pratik adımlar ve çeşitli alıştırmalarla bu becerilerin nasıl geliştirilebileceği üzerine detaylı bilgiler vereceğiz. Özellikle vurgulama, anahtar kelimeleri tespit etme ve metni yapılandırma teknikleri üzerinde duracağız.`,
  },
  {
    date: "29 Mart, 2024",
    title: "Göz Egzersizlerinin Bana Nasıl Bir Faydası Olacak?",
    imageUrl: "assets/images/blog-3.jpg",
    brief: "Göz sağlığınızı koruyun ve okuma verimliliğinizi artırın.",
    content: `Gözlerimiz, özellikle bilgisayar, tablet ve telefon ekranlarına bakma süremizin artmasıyla daha fazla yorulmaktadır. Göz egzersizleri, bu yorgunluğu azaltmada ve göz sağlığını korumada kritik bir rol oynar. Bu egzersizler, göz kaslarını güçlendirir, odaklanma yeteneğini artırır ve gözlerin daha uzun süre sağlıklı kalmasını sağlar. Bu blogda, basit göz egzersizlerinin nasıl yapıldığı, bu egzersizlerin günlük rutinlere nasıl dahil edilebileceği ve düzenli uygulamanın faydaları detaylı bir şekilde anlatılacak.`,
  },
];

const courseData = [
  {
    image: "./assets/images/course-1.jpg",
    length: "3 hafta",
    title: "Ortaokul ve Lise Sınavına Hazırlık için Hızlı Okuma Eğitimi",
    level: "10-15 yaş aralığı",
    price: "₺1000.00",
    lessons: "8 Ders",
    students: "20 Öğrenci",
  },

  {
    image: "./assets/images/course-2.jpg",
    length: "3 hafta",
    title: "Lise ve Uni. Sınavına Hazırlık için Hızlı Okuma Eğitimi",
    level: "15-20 yaş aralığı",
    price: "₺1500.00",
    lessons: "8 Ders",
    students: "22 Öğrenci",
  },

  {
    image: "./assets/images/course-3.jpg",
    length: "3 hafta",
    title: "KPSS Sınavına Hazırlık için Hızlı Okuma Eğitimi",
    level: "20-25 yaş aralığı",
    price: "₺2000.00",
    lessons: "8 Ders",
    students: "33 Öğrenci",
  },

  {
    image: "./assets/images/course-1.jpg",
    length: "3 hafta",
    title: "Yetişkinler için Eğitim",
    level: "Yetişkinler İçin",
    price: "₺3000.00",
    lessons: "8 Ders",
    students: "19 Öğrenci",
  },

  {
    image: "./assets/images/course-2.jpg",
    length: "3 hafta",
    title: "Eğitmenlik için Eğitim",
    level: "Eğitmen Eğitimi",
    price: "₺4000.00",
    lessons: "8 Ders",
    students: "12 Öğrenci",
  },
];

function createBlogCards() {
  const container = document.getElementById("ul-blogs");
  blogData.forEach((blog, index) => {
    const card = document.createElement("li");
    card.className = "blog-card";
    card.innerHTML = `
        <div class="blog-card">
          <figure class="card-banner img-holder has-after" style="--width: 370; --height: 370;">
            <img src="${blog.imageUrl}" width="370" height="370" loading="lazy"
              alt="Become A Better Blogger: Content Planning" class="img-cover">
          </figure>
          <div class="card-content">

            <h3 class="h3" style="margin-bottom: 10px">
              ${blog.title}
            </h3>

            <ul class="card-meta-list">
              <li class="card-meta-item">
                <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>

                <span class="span">${blog.date}</span>
              </li>
            </ul>

            <p>${blog.brief}</p>
            <button class="card-title" style="display: flex; align-items: center;"  onclick="openPopup(${index})">Blogu Okuyun <ion-icon name="arrow-forward-outline" style="margin-left: 10px" aria-hidden="true"></ion-icon></button>
          </div>
        <div/>
    `;
    container.appendChild(card);
  });
}

function createCourses() {
  const container = document.getElementById("ul-courses");
  courseData.forEach((course, index) => {
    const coursebar = document.createElement("li");
    coursebar.className = "course-card";
    coursebar.innerHTML = `
        <div class="course-card disabled-card">
          <figure class="card-banner img-holder" style="--width: 370; --height: 220;">
            <img src="${course.image}" width="370" height="220" loading="lazy"
              alt="Build Responsive Real- World Websites with HTML and CSS" class="img-cover">
          </figure>

          <div class="abs-badge">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

            <span class="span">${course.length}</span>
          </div>

          <div class="card-content">

            <span class="badge">${course.level}</span>

            <h3 class="h3">
              <p class="card-title">${course.title}</p>
            </h3>

            <data class="price" value="${course.price}">${course.price}</data>

            <ul class="card-meta-list">

              <li class="card-meta-item">
                <ion-icon name="library-outline" aria-hidden="true"></ion-icon>

                <span class="span">${course.lessons}</span>
              </li>

              <li class="card-meta-item">
                <ion-icon name="people-outline" aria-hidden="true"></ion-icon>

                <span class="span">${course.students}</span>
              </li>

              <li>
                <button class="buy-btn disabled-button">Satın Al</button>
              </li>

            </ul>

          </div>
          
        <div/>
    `;
    container.appendChild(coursebar);
  });
}

function openPopup(index) {
  const data = blogData[index];
  document.getElementById("blogTitle").textContent = data.title;
  document.getElementById("blogContent").textContent = data.content;
  // document.getElementById('blogImage').src = data.imageUrl;
  document.getElementById("blogPopup").style.display = "block";
}

document.addEventListener("DOMContentLoaded", createBlogCards);
document.addEventListener("DOMContentLoaded", createCourses);

document.querySelector(".close-btn").addEventListener("click", function () {
  document.getElementById("blogPopup").style.display = "none";
});

window.onclick = function (event) {
  if (event.target == document.getElementById("blogPopup")) {
    document.getElementById("blogPopup").style.display = "none";
  }
};

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Pop-up açma ve kapatma işlemleri
var modal = document.getElementById("loginModal");
var btn = document.querySelector(".btn.has-before"); // Kayıt / Giriş butonu
var closeBtn = document.querySelector(".close-btn");

btn.onclick = function () {
  modal.style.display = "block";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Sekmeler arası geçiş
var tabs = document.querySelectorAll(".tab");
var panes = document.querySelectorAll(".tab-pane");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", function () {
    tabs.forEach((t) => t.classList.remove("active"));
    panes.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    panes[index].classList.add("active");
  });
});

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

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
};

addEventOnElem(window, "scroll", activeElem);
