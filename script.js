// ===== REVIEWS DATA =====
// To add a new review, simply add a new object to the appropriate array below.
const reviewsRow1 = [
  {
    name: "Ana Beatriz",
    initials: "AB",
    rating: 5,
    text: "A CitoAprova mudou minha forma de estudar citologia! Consegui gabaritar as questoes de biologia no ENEM. Super recomendo!",
  },
  {
    name: "Lucas Ferreira",
    initials: "LF",
    rating: 5,
    text: "Metodologia gamificada incrivel! Nunca pensei que estudar celula fosse ser tao divertido. Minha nota subiu muito!",
  },
  {
    name: "Mariana Costa",
    initials: "MC",
    rating: 4,
    text: "Plataforma super completa. O metodo avancado me ajudou a entender conceitos que eu tinha dificuldade ha meses.",
  },
  {
    name: "Pedro Henrique",
    initials: "PH",
    rating: 5,
    text: "Estudo todo dia pela CitoAprova! Os quizzes e desafios tornam o aprendizado muito mais leve e eficiente.",
  },
  {
    name: "Julia Santos",
    initials: "JS",
    rating: 5,
    text: "Aprovei em medicina gracas a essa plataforma! A citologia sempre foi meu ponto fraco, agora domino o assunto.",
  },
  {
    name: "Rafael Oliveira",
    initials: "RO",
    rating: 4,
    text: "Conteudo de qualidade e interface muito bonita. Da pra ver que foi feito com carinho por quem entende de educacao.",
  },
];

const reviewsRow2 = [
  {
    name: "Camila Ribeiro",
    initials: "CR",
    rating: 5,
    text: "Melhor plataforma de citologia que ja usei! Os exercicios sao perfeitos para quem quer se preparar pro vestibular.",
  },
  {
    name: "Gustavo Lima",
    initials: "GL",
    rating: 5,
    text: "Incrivel como a gamificacao torna tudo mais facil de lembrar. Minhas notas melhoraram significativamente!",
  },
  {
    name: "Isabella Martins",
    initials: "IM",
    rating: 4,
    text: "Recomendo para todos os vestibulandos! A plataforma e intuitiva e o conteudo e muito bem explicado.",
  },
  {
    name: "Thiago Almeida",
    initials: "TA",
    rating: 5,
    text: "O certificado ao final do curso e um bonus incrivel. Me sinto muito mais preparado para o ENEM agora!",
  },
  {
    name: "Fernanda Souza",
    initials: "FS",
    rating: 5,
    text: "A equipe da CitoAprova esta de parabens! Suporte rapido e conteudo atualizado. Nota 10 em tudo!",
  },
  {
    name: "Diego Nascimento",
    initials: "DN",
    rating: 4,
    text: "Uso a CitoAprova ha 3 meses e ja sinto a diferenca. Material excelente e metodologia que funciona de verdade.",
  },
];

// ===== GENERATE STAR SVG =====
function generateStars(rating) {
  let starsHTML = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starsHTML += `<svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    } else {
      starsHTML += `<svg viewBox="0 0 24 24" style="fill: rgba(255,255,255,0.3)"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    }
  }
  return starsHTML;
}

// ===== CREATE REVIEW CARD HTML =====
function createReviewCard(review) {
  return `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar">${review.initials}</div>
        <div class="review-info">
          <h4>${review.name}</h4>
          <div class="review-stars">${generateStars(review.rating)}</div>
        </div>
      </div>
      <p>${review.text}</p>
    </div>
  `;
}

// ===== POPULATE MARQUEE ROWS =====
function populateMarquee(containerId, reviews) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Generate cards HTML
  let cardsHTML = reviews.map(createReviewCard).join("");

  // Duplicate cards for seamless infinite scroll
  container.innerHTML = cardsHTML + cardsHTML;
}

// ===== HAMBURGER MENU =====
function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.classList.add("mobile-overlay");
  document.body.appendChild(overlay);

  function toggleMenu() {
    const isOpen = nav.classList.toggle("open");
    hamburger.classList.toggle("open");
    overlay.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function closeMenu() {
    nav.classList.remove("open");
    hamburger.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  // Close menu on nav link click
  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
  const header = document.getElementById("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
  highlightNav();
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Add animation class to elements
  const animateElements = [
    ...document.querySelectorAll(".teoria-card"),
    ...document.querySelectorAll(".feature-card"),
    ...document.querySelectorAll(".section-title"),
    ...document.querySelectorAll(".section-desc"),
    ...document.querySelectorAll(".sobre-image"),
    ...document.querySelectorAll(".sobre-text"),
  ];

  animateElements.forEach((el, index) => {
    el.classList.add("animate-on-scroll");
    el.style.transitionDelay = `${index * 0.08}s`;
    observer.observe(el);
  });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ===== PARALLAX ON HERO BLOB =====
function initParallax() {
  const heroBlob = document.querySelector(".hero-blob");
  if (!heroBlob) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroBlob.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  populateMarquee("marquee-row-1", reviewsRow1);
  populateMarquee("marquee-row-2", reviewsRow2);
  initHamburger();
  initHeaderScroll();
  initActiveNav();
  initScrollAnimations();
  initSmoothScroll();
  initParallax();
});
