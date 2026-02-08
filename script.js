// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll('.service-card, .value-card, .team-member, .problem-card, .solution-card, .feature-item, .vision-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Header background 
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(45, 55, 72, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = 'var(--primary-dark)';
        header.style.backdropFilter = 'none';
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Counter animation for statistics (if needed in future)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console message
console.log('%c مبادرة بدن ', 'background: #2d3748; color: #c9b896; font-size: 20px; padding: 10px;');
console.log('%c منظومة صحة وحركة داخل كل حي ', 'color: #8b4545; font-size: 14px;');





 // WhatsApp Integration for Contact Form
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const health = document.getElementById('health').value;
        const level = document.getElementById('level').value;
        const classtyp = document.getElementById('classtyp').value;


        const whatsappNumber = "966590671146";

        
        const message = 
            `*طلب تواصل جديد - مبادرة بَدَن*\n
            *الاسم:* ${name}\n
            *رقم الجوال:* ${phone}\n
            *المشكلات الصحية:* ${health}\n
            *مستوى الكلاس:* ${level}\n
            *نوع الكلاس:* ${classtyp}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

        window.open(whatsappUrl, '_blank' );
    });
}

// service
const servicesData = {
    pilates: {
        title: "حصص بيلاتس متكاملة",
        description: "انضم إلينا في حصص البيلاتس لتقوية عضلاتك العميقة، تحسين وضعية جسمك، وزيادة مرونتك. تماريننا مصممة لتناسب جميع المستويات وتركز على الدقة والتحكم.",
        image: "images/img2 (3).png"
    },
    cycling: {
        title: "حصص دراجات هوائية ",
        description: "استعد لضخ الأدرينالين في حصص الدراجات الداخلية! تجربة رياضية ممتعة وعالية الكثافة لحرق السعرات الحرارية، تقوية القلب، ورفع مستوى لياقتك البدنية.",
        image: "images/img2 (2).png"
    },
    functional: {
        title: "التدريب الوظيفي ",
        description: "تماريننا الوظيفية تحاكي حركات الحياة اليومية لجعل جسمك أقوى وأكثر كفاءة. نركز على تحسين القوة، التوازن، والتنسيق لمساعدتك على أداء مهامك اليومية بسهولة.",
        image: "images/img2 (4).png"
    },
    flexibility: {
        title: "تمارين المرونة واللياقة",
        description: "هذه الحصص مصممة لزيادة مرونة مفاصلك وعضلاتك وتحسين نطاق حركتك. تساعدك على تقليل خطر الإصابات، تخفيف التوتر، والشعور بالراحة في جسمك.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
    }
};


const serviceCards = document.querySelectorAll('.service-card' );
const modal = document.getElementById('service-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');


serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        const serviceId = card.dataset.service; 
        const data = servicesData[serviceId];  

        
        modalImg.src = data.image;
        modalImg.alt = data.title;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;

      
        modal.classList.add('active');
    });
});


function closeModal() {
    modal.classList.remove('active');
}


modalCloseBtn.addEventListener('click', closeModal);


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
