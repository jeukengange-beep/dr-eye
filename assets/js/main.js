const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.programs': 'Programs',
    'nav.research': 'Research',
    'nav.leadership': 'Leadership',
    'nav.contact': 'Contact',
    'badge.bio': 'Bio',
    'badge.programs': 'Programs',
    'badge.research': 'Research',
    'badge.leadership': 'Leadership',
    'badge.contact': 'Contact',
    'hero.title': 'Physician and educator shaping the future of global health through research, digital health, leadership and innovation.',
    'hero.tagline': 'DIGITAL HEALTH • RESEARCH • LEADERSHIP • INNOVATION',
    'hero.cta': 'Explore my Work',
    'intro.text': 'I help health professionals and organizations adopt practical, ethical and impactful ways to use technology while building strong teams and systems.',
    'about.title': 'About Dr. Eye Ngoa',
    'about.bio': 'In addition to advancing the SDGs through professional education and mentoring in the healthcare sector, I assist healthcare professionals and organizations in adopting practical, ethical, and effective technology solutions while fostering strong teams and systems. Explore the impact of my work over the past few years.',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'experience.1.title': 'Regional Representative for Central Africa & Trainer (06/2024 – Present)',
    'experience.1.org': 'Afromed Academy of Medical Research and Innovation, Lusaka, Zambia.',
    'experience.1.details': 'Lead a network of country representatives across 5 regions; Designed training programs reaching 1,000+ health professionals.',
    'experience.2.title': 'Clinical Researcher & General Coordinator (08/2023 – Present)',
    'experience.2.org': 'Triad Research Foundation, Buea, Cameroon.',
    'experience.2.details': 'Conducting epidemiological studies; Published findings in peer-reviewed journals; Supported grant proposals securing over $500k.',
    'experience.3.title': 'Site-Based Coordinator (01/2024 – Present)',
    'experience.3.org': 'University of Washington, USA (Global Health E-learning Program).',
    'education.1.title': 'Master of Public Health Methodology (MPHM) – Université Libre de Bruxelles (ULB), Belgique (En cours/2025).',
    'education.2.title': 'Doctor of Medicine (M.D.) – Faculty of Medicine and Pharmaceutical Sciences, Douala (Graduated 2020).',
    'programs.title': 'Programs & Partnerships',
    'programs.subtitle': 'Leading initiatives in research, mental health, and medical education.',
    'programs.card1.title': 'Afromed Academy',
    'programs.card1.text': 'Academy focused on medical research and innovation in Africa (training, projects and mentoring).',
    'programs.card2.title': 'Africa Suicide Prevention Association (ASPA)',
    'programs.card2.text': 'Pan‑African network for suicide prevention: advocacy, research and community programs.',
    'programs.card3.title': 'Young Physicians Network (YPN)',
    'programs.card3.text': 'Mentorship, annual conference and leadership tracks for early‑career doctors.',
    'programs.card4.title': 'Triad Research Foundation',
    'programs.card4.text': 'Forums, grants and training on global mental health, hypertension and more.',
    'programs.card5.title': 'eDGH • University of Washington',
    'programs.card5.text': 'Collaborative courses and site‑based coordination to strengthen research culture.',
    'research.title': 'Scientific Research & Publications',
    'research.text': 'Committed to evidence-based medicine and epidemiological research in Africa.',
    'research.paper1.title': 'Impact of filtering face pieces (FFP3) respiratory protective mask usage on the respiratory functions of informal sector carpenters in Douala: a five-month before-after study.',
    'research.paper1.journal': 'Pan African Medical Journal (PMC)',
    'research.paper1.status': 'Published',
    'research.paper2.title': 'Malnutrition & Outcomes among Hospitalized Children in Conflict-Affected Cameroon.',
    'research.paper2.journal': 'Global Health Report',
    'research.paper2.status': 'Published/In Review',
    'research.cta': 'Read Paper',
    'leadership.media': 'Digital Healing with Dr. Eye Ngoa',
    'leadership.gallery': 'Leadership & Impact Gallery',
    'leadership.community': 'Community Engagement',
    'leadership.vopaca': 'Vopaca Program: Voluntary physician supporting community health initiatives.',
    'leadership.onehealth': 'One Health Series: Podcast/Talk show promoting integrated health perspectives.',
    'contact.title': 'Contact',
    'contact.form.title': 'Send a Message',
    'contact.name': 'Full Name',
    'contact.email': 'Email',
    'contact.organization': 'Organization',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    'contact.details': 'Reach out directly',
    'footer.brand': 'Dr. EYE NGOA',
    'footer.links': 'Quick Links',
    'footer.copyright': '© 2025 Dr. EYE NGOA Jean Junior. All rights reserved.',
    'footer.credit': 'Designed & Built by TEGOFACK Corp.',
    'contact.linkedin': 'LinkedIn',
    'contact.facebook': 'Facebook'
  }
};

['fr', 'de', 'zh', 'ar'].forEach((lang) => {
  translations[lang] = { ...translations.en };
});

function applyLanguage(lang) {
  const safeLang = translations[lang] ? lang : 'en';
  document.documentElement.lang = safeLang;
  document.documentElement.dir = safeLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('rtl', safeLang === 'ar');

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations[safeLang][key] || translations.en[key];
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = translations[safeLang][key] || translations.en[key];
    if (value) {
      el.placeholder = value;
    }
  });
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach((link) => {
    const href = link.getAttribute('href');
    const isActive = (path === '' && href === 'index.html') || path === href;
    link.classList.toggle('active', isActive);
  });
}

function initNavigation() {
  const burger = document.querySelector('.burger');
  const navList = document.querySelector('nav ul');

  if (burger && navList) {
    burger.addEventListener('click', () => {
      navList.classList.toggle('open');
    });

    navList.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => navList.classList.remove('open'));
    });
  }
}

function initLanguage() {
  const select = document.querySelector('.lang-select');
  const saved = localStorage.getItem('dr-eye-lang') || 'en';
  if (select) {
    select.value = saved;
    select.addEventListener('change', (event) => {
      const chosen = event.target.value;
      localStorage.setItem('dr-eye-lang', chosen);
      applyLanguage(chosen);
    });
  }
  applyLanguage(saved);
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initNavigation();
  setActiveNav();
});
