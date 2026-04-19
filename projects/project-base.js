/**
 * project-base.js — Shared JS for all Hussban Invest project pages
 * Features: Particle Canvas, Swiper Gallery, Lightbox, QR Code, Theme, Lang, WhatsApp
 */

const WHATSAPP_NUMBER = '00962770661862';

/* ── Theme ── */
(function() {
    const btn = document.getElementById('theme-btn');
    const icon = document.getElementById('theme-icon');
    let dark = true;
    if (btn) btn.addEventListener('click', () => {
        dark = !dark;
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        if (icon) icon.className = dark ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
    });
})();

/* ── Language Toggle ── */
const PROJECT_I18N = {
    ar: {
        back: '← العودة للرئيسية', scroll_gallery: 'معرض الصور', scroll_details: 'التفاصيل',
        scroll_location: 'الموقع', enquire: 'استفسر الآن', whatsapp: 'تواصل واتساب',
        available_units: 'الوحدات المتاحة', price_label: 'السعر يبدأ من',
        contact_price: 'تواصل لمعرفة السعر', qr_title: 'QR الصفحة', qr_desc: 'امسح للوصول لصفحة المشروع',
        gallery_empty: 'معرض الصور قيد الإعداد', map_empty: 'الموقع قيد الإضافة',
        cta_title: 'هل أنت مهتم بهذا المشروع؟', cta_desc: 'تواصل معنا الآن للحصول على استشارة مجانية وعرض تفصيلي مخصص لك.',
        download_qr: '⬇ تحميل QR',
    },
    en: {
        back: '← Back to Home', scroll_gallery: 'Gallery', scroll_details: 'Details',
        scroll_location: 'Location', enquire: 'Enquire Now', whatsapp: 'WhatsApp',
        available_units: 'Available Units', price_label: 'Starting from',
        contact_price: 'Contact for Price', qr_title: 'Page QR Code', qr_desc: 'Scan to access this project page',
        gallery_empty: 'Gallery coming soon', map_empty: 'Location coming soon',
        cta_title: 'Interested in this project?', cta_desc: 'Contact us now for a free consultation and a tailored detailed offer.',
        download_qr: '⬇ Download QR',
    }
};

let currentLang = 'ar';
function applyLang() {
    const t = PROJECT_I18N[currentLang];
    document.querySelectorAll('[data-pi18n]').forEach(el => {
        const k = el.getAttribute('data-pi18n');
        if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    const ll = document.getElementById('lang-label');
    if (ll) ll.textContent = currentLang === 'ar' ? 'EN' : 'عر';
}
const langBtn = document.getElementById('lang-btn');
if (langBtn) langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLang();
});

/* ── Particle Canvas ── */
(function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    function init() {
        resize(); particles = [];
        for (let i = 0; i < 50; i++) particles.push({
            x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.2+0.3,
            dx: (Math.random()-0.5)*0.25, dy: (Math.random()-0.5)*0.25, alpha: Math.random()*0.4+0.1
        });
    }
    function draw() {
        ctx.clearRect(0,0,W,H);
        const dark = document.documentElement.getAttribute('data-theme') !== 'light';
        const c = dark ? '0,201,212' : '0,127,136';
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle = `rgba(${c},${p.alpha})`; ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        });
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init);
    init(); draw();
})();

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Intersection Observer ── */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const d = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => entry.target.classList.add('animated'), parseInt(d));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

/* ── Gallery / Swiper ── */
function initGallery(images) {
    const mainEl = document.querySelector('.swiper-gallery');
    const thumbEl = document.querySelector('.swiper-thumbs');
    if (!mainEl) return;

    const wrapperMain = mainEl.querySelector('.swiper-wrapper');
    const wrapperThumb = thumbEl ? thumbEl.querySelector('.swiper-wrapper') : null;

    if (!images || images.length === 0) {
        // Show placeholder
        if (wrapperMain) wrapperMain.innerHTML = `<div class="swiper-slide"><div class="gallery-placeholder"><i class="fa-solid fa-images"></i><p data-pi18n="gallery_empty">${PROJECT_I18N[currentLang].gallery_empty}</p></div></div>`;
        if (wrapperThumb) wrapperThumb.innerHTML = `<div class="swiper-slide"><div class="gallery-placeholder"><i class="fa-solid fa-image"></i></div></div>`;
    } else {
        if (wrapperMain) wrapperMain.innerHTML = images.map((src,i) => `<div class="swiper-slide" data-lightbox-idx="${i}"><img src="${src}" alt="Project Image ${i+1}" loading="lazy"></div>`).join('');
        if (wrapperThumb) wrapperThumb.innerHTML = images.map((src,i) => `<div class="swiper-slide"><img src="${src}" alt="" loading="lazy"></div>`).join('');
    }

    let thumbSwiper = null;
    if (thumbEl && wrapperThumb) {
        thumbSwiper = new Swiper('.swiper-thumbs', {
            spaceBetween: 8, slidesPerView: 4, freeMode: true, watchSlidesProgress: true,
        });
    }

    const swiper = new Swiper('.swiper-gallery', {
        spaceBetween: 10, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        pagination: { el: '.swiper-pagination', clickable: true },
        thumbs: thumbSwiper ? { swiper: thumbSwiper } : undefined,
        effect: 'fade', fadeEffect: { crossFade: true },
        autoplay: images && images.length > 1 ? { delay: 4000, disableOnInteraction: false } : false,
    });

    // Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    if (lightbox && images && images.length > 0) {
        mainEl.querySelectorAll('.swiper-slide').forEach((slide, i) => {
            slide.addEventListener('click', () => {
                lightboxImg.src = images[i];
                lightbox.classList.add('open');
            });
        });
        if (lightboxClose) lightboxClose.addEventListener('click', () => lightbox.classList.remove('open'));
        lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    }
}

/* ── QR Code Generator ── */
function generateQR(url, canvasId) {
    const canvas = document.getElementById(canvasId || 'qr-canvas');
    if (!canvas) return;
    // Use QR API since we're browser-only
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(url)}&bgcolor=ffffff&color=00c9d4&format=png`;
    const img = document.createElement('img');
    img.src = qrUrl;
    img.width = 160; img.height = 160;
    img.alt = 'QR Code';
    img.style.borderRadius = '8px';
    img.style.display = 'block';
    img.style.margin = '0 auto';
    canvas.replaceWith(img);

    // Download button
    const dlBtn = document.querySelector('.qr-download');
    if (dlBtn) {
        dlBtn.addEventListener('click', () => {
            const a = document.createElement('a');
            a.href = qrUrl;
            a.download = 'hussban-project-qr.png';
            a.click();
        });
    }
}

/* ── WhatsApp CTA ── */
function buildWhatsAppLink(projectName) {
    const msg = currentLang === 'ar'
        ? `مرحباً، أريد الاستفسار عن مشروع ${projectName}`
        : `Hello, I'd like to inquire about ${projectName}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function setWhatsAppLinks(projectName) {
    document.querySelectorAll('[data-wa-link]').forEach(el => {
        el.href = buildWhatsAppLink(projectName);
    });
}

/* ── Init ── */
window.addEventListener('load', () => {
    applyLang();
    // This is called per-page after defining project data
    if (typeof initProjectPage === 'function') initProjectPage();
});
