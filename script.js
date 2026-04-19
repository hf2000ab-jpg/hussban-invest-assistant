/*
 * Hussban Invest - Premium AI Sales Assistant
 * Bilingual (AR/EN) | WhatsApp Business | Manus AI
 */

/* ─── Configuration ─── */
const CONFIG = {
    WHATSAPP: '00962770661862',
    MANUS_API_KEY: 'sk-3P7oDW85yaVVZLzphZCFJG4IdtbiKcIG115cK6gmSKncVnanXopoumk5IgkcsKy33oXcjI9lOfhizC7Ujt5L5I1Hn4AH',
    DATABASE_URL: 'https://docs.google.com/spreadsheets/d/11Jo4KnhSgh_CnAOa7Nn4JNGa9Ax_TX7J1BYizMbyTDs/export?format=csv&cachebust=' + Date.now(),
    CORS_PROXY: 'https://api.allorigins.win/raw?url=',
};

/* ─── i18n Translations ─── */
const TRANSLATIONS = {
    ar: {
        nav_home: 'الرئيسية', nav_projects: 'المشاريع', nav_assistant: 'المساعد الذكي',
        nav_features: 'مميزاتنا', nav_contact: 'تواصل معنا', nav_whatsapp: 'واتساب',
        hero_badge: 'المطور العقاري الأفضل في الأردن',
        hero_title1: 'استثمر بذكاء', hero_title2: 'مع Hussban Invest',
        hero_subtitle: 'مساعدنا الذكي يعمل 24/7 لتقديم أفضل الفرص العقارية في الأردن وخارجه — باللغتين العربية والإنجليزية.',
        hero_cta1: 'جرّب المساعد الذكي', hero_cta2: 'استعرض مشاريعنا',
        stat1: 'مشروع فاخر', stat2: 'استجابة فورية', stat3: 'سنة خبرة',
        chat_live: 'متصل الآن', chat_title: 'المساعد الذكي للمبيعات',
        chat_status: 'Hussban Invest • متصل الآن',
        input_placeholder: 'اكتب استفسارك هنا أو تحدث 🎤...',
        proj_badge: 'مشاريعنا العقارية', proj_title: 'اكتشف مشاريعنا الحصرية',
        proj_desc: 'مجمعات سكنية راقية ومشاريع استثمارية متميزة في أفضل المواقع',
        badge_residential: 'سكني', badge_invest: 'استثماري', badge_luxury: 'فاخر',
        badge_intl: 'دولي', badge_commercial: 'تجاري',
        victoria_name: 'كمباوند فلل فيكتوريا', victoria_loc: 'طريق المطار، عمّان',
        victoria_desc: 'فلل مستقلة بتصاميم عصرية في موقع استراتيجي متميز',
        yasmina_name: 'كمباوند ياسمينا ريزدنس', yasmina_loc: 'الأردن',
        yasmina_desc: 'مجمع سكني راقٍ يجمع بين الأناقة والراحة في بيئة متكاملة',
        mafrak_name: 'كمباوند فلل الأردن - المفرق', mafrak_loc: 'المفرق، الأردن',
        mafrak_desc: 'فرصة استثمارية استثنائية بأسعار تنافسية في شمال الأردن',
        mafrak_price: 'يبدأ من <strong>48,000 دينار</strong>',
        dabouq_name: 'فلل دابوق الفاخرة', dabouq_loc: 'دابوق، عمّان',
        dabouq_desc: 'فلل بحجم 500م² بتشطيبات حصرية في أرقى مناطق عمّان',
        dabouq_price: 'يبدأ من <strong>850,000 دينار</strong>',
        prev_name: 'مشاريعنا خارج الأردن', prev_loc: 'تركيا وخارجها',
        prev_desc: 'سجل من المشاريع الناجحة في أسواق دولية متميزة',
        comm_name: 'المشاريع التجارية', comm_loc: 'الأردن',
        comm_desc: 'فرص تجارية واستثمارية في قطاعات متنوعة وعوائد مجزية',
        price_from: 'يبدأ من', price_contact: 'تواصل للأسعار',
        ai_badge: 'ذكاء اصطناعي', ai_title: 'تحدث مع مساعدنا الذكي',
        ai_desc: 'احصل على إجابات فورية، عروض مخصصة، وتفاصيل المشاريع — الآن وبلغتك',
        tips_title: 'يمكنك أن تسألني عن:',
        tip1: 'أسعار المشاريع والوحدات المتاحة', tip2: 'خطط التمويل والتقسيط',
        tip3: 'مواقع المشاريع وخرائطها', tip4: 'طلب عرض PDF مخصص',
        tip5: 'حجز موعد استشارة مجانية',
        wa_direct: 'أو تواصل مباشرة عبر واتساب:',
        feat_badge: 'لماذا نحن؟', feat_title: 'مميزات تجعلنا الخيار الأفضل',
        feat1_t: 'مساعد ذكي 24/7', feat1_d: 'يعمل على مدار الساعة بالعربية والإنجليزية لتحليل احتياجاتك وتقديم أفضل العروض فوراً',
        feat2_t: 'عروض PDF فورية', feat2_d: 'احصل على عرض سعر مفصّل جاهز للطباعة في ثوانٍ مع جميع مواصفات الوحدة',
        feat3_t: 'تواصل واتساب مباشر', feat3_d: 'بعد المحادثة تُرسل بياناتك مباشرةً لفريق المبيعات عبر واتساب بضغطة واحدة',
        feat4_t: 'حاسبة التمويل', feat4_d: 'احسب قسطك الشهري والدفعة المبدئية تفاعلياً لأي مشروع تختاره',
        feat5_t: 'QR لكل مشروع', feat5_d: 'امسح الرمز للحصول على تفاصيل المشروع كاملة في أي وقت ومن جهازك',
        feat6_t: 'استثمار آمن وموثوق', feat6_d: 'خبرة 15+ سنة في السوق العقاري الأردني والدولي مع سجل حافل من المشاريع الناجحة',
        footer_tagline: 'شريكك العقاري الموثوق في الأردن وخارجه للاستثمار الآمن والمربح',
        footer_projects: 'مشاريعنا', footer_contact: 'تواصل معنا',
        footer_location: 'عمّان، الأردن', footer_rights: 'جميع الحقوق محفوظة.',
        welcome: 'أهلاً وسهلاً! 👋 أنا مساعد <strong>Hussban Invest</strong> الذكي. يسعدني مساعدتك في إيجاد العقار المثالي. كيف يمكنني خدمتك اليوم؟',
        qr_projects: ['أسعار المشاريع', 'خطط التمويل', 'مواقع المشاريع', 'طلب عرض PDF'],
    },
    en: {
        nav_home: 'Home', nav_projects: 'Projects', nav_assistant: 'AI Assistant',
        nav_features: 'Features', nav_contact: 'Contact', nav_whatsapp: 'WhatsApp',
        hero_badge: 'Jordan\'s Premier Real Estate Developer',
        hero_title1: 'Invest Smartly', hero_title2: 'with Hussban Invest',
        hero_subtitle: 'Our AI assistant works 24/7 to present the best real estate opportunities in Jordan and beyond — in both Arabic & English.',
        hero_cta1: 'Try AI Assistant', hero_cta2: 'Browse Projects',
        stat1: 'Premium Projects', stat2: 'Instant Response', stat3: 'Years Expertise',
        chat_live: 'Online Now', chat_title: 'AI Sales Assistant',
        chat_status: 'Hussban Invest • Online Now',
        input_placeholder: 'Type your inquiry or speak 🎤...',
        proj_badge: 'Our Properties', proj_title: 'Discover Our Exclusive Projects',
        proj_desc: 'Premium residential compounds and investment projects at prime locations',
        badge_residential: 'Residential', badge_invest: 'Investment', badge_luxury: 'Luxury',
        badge_intl: 'International', badge_commercial: 'Commercial',
        victoria_name: 'Victoria Villas Compound', victoria_loc: 'Airport Road, Amman',
        victoria_desc: 'Independent villas with modern designs at a prime strategic location',
        yasmina_name: 'Yasmina Residence Compound', yasmina_loc: 'Jordan',
        yasmina_desc: 'An upscale residential compound combining elegance and comfort in a complete environment',
        mafrak_name: 'Jordan Villas - Mafraq', mafrak_loc: 'Mafraq, Jordan',
        mafrak_desc: 'Exceptional investment opportunity at competitive prices in northern Jordan',
        mafrak_price: 'From <strong>JOD 48,000</strong>',
        dabouq_name: 'Dabouq Luxury Villas', dabouq_loc: 'Dabouq, Amman',
        dabouq_desc: '500m² villas with exclusive finishes in Amman\'s most prestigious area',
        dabouq_price: 'From <strong>JOD 850,000</strong>',
        prev_name: 'International Projects', prev_loc: 'Turkey & Beyond',
        prev_desc: 'A track record of successful projects in distinguished international markets',
        comm_name: 'Commercial Projects', comm_loc: 'Jordan',
        comm_desc: 'Commercial and investment opportunities in diverse sectors with attractive returns',
        price_from: 'From', price_contact: 'Contact for Prices',
        ai_badge: 'AI Powered', ai_title: 'Chat with Our AI Assistant',
        ai_desc: 'Get instant answers, custom quotes, and project details — now in your language',
        tips_title: 'You can ask me about:',
        tip1: 'Project prices and available units', tip2: 'Financing and payment plans',
        tip3: 'Project locations and maps', tip4: 'Request a custom PDF quote',
        tip5: 'Book a free consultation',
        wa_direct: 'Or contact us directly on WhatsApp:',
        feat_badge: 'Why Us?', feat_title: 'Features That Make Us The Best Choice',
        feat1_t: '24/7 Smart Assistant', feat1_d: 'Works around the clock in Arabic and English to analyze your needs and present the best offers instantly',
        feat2_t: 'Instant PDF Quotes', feat2_d: 'Get a detailed, print-ready price offer in seconds with all unit specifications',
        feat3_t: 'Direct WhatsApp Connect', feat3_d: 'After the conversation, your data is sent directly to the sales team via WhatsApp with one tap',
        feat4_t: 'Financing Calculator', feat4_d: 'Calculate your monthly installment and down payment interactively for any project you choose',
        feat5_t: 'QR Per Project', feat5_d: 'Scan the code to get full project details anytime from your device',
        feat6_t: 'Safe & Trusted Investment', feat6_d: '15+ years of experience in the Jordanian and international real estate market with a strong track record',
        footer_tagline: 'Your trusted real estate partner in Jordan and beyond for safe and profitable investment',
        footer_projects: 'Our Projects', footer_contact: 'Contact Us',
        footer_location: 'Amman, Jordan', footer_rights: 'All rights reserved.',
        welcome: 'Welcome! 👋 I\'m <strong>Hussban Invest</strong>\'s AI Assistant. I\'m happy to help you find the perfect property. How can I assist you today?',
        qr_projects: ['Project Prices', 'Financing Plans', 'Project Locations', 'Request PDF Quote'],
    }
};

/* ─── State ─── */
let currentLang = 'ar';
let isDarkMode = true;
let isAudioEnabled = true;
let dynamicProjects = [];
let SYSTEM_PROMPT = '';
let conversationHistory = [];
let seenManusIds = new Set();
let currentLeadState = { name:'PENDING', phone_number:'PENDING', property_type:'PENDING', payment_method:'PENDING', financing_entity:'PENDING', financing_duration:'PENDING', down_payment:'PENDING', score:'COLD' };

/* ─── DOM Elements ─── */
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');
const voiceSynthBtn = document.getElementById('voice-synthesis-btn');
const voiceInputBtn = document.getElementById('voice-btn');
const langBtn = document.getElementById('lang-btn');
const langLabel = document.getElementById('lang-label');
const jsonOutput = document.getElementById('json-output');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const quickReplies = document.getElementById('quick-replies');

/* ─── Language System ─── */
function applyTranslations() {
    const t = TRANSLATIONS[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    langLabel.textContent = currentLang === 'ar' ? 'EN' : 'عر';
}

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyTranslations();
    buildSystemPrompt();
    renderQuickReplies();
});

/* ─── Theme System ─── */
themeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeIcon.className = isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

/* ─── Navbar scroll & hamburger ─── */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ─── Intersection Observer Animations ─── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => entry.target.classList.add('animated'), parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

/* ─── Particle Canvas ─── */
(function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
        W = canvas.width = window.innerWidth;
        H = canvas.height = window.innerHeight;
    }

    function init() {
        resize();
        particles = [];
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * W, y: Math.random() * H,
                r: Math.random() * 1.5 + 0.3,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.5 + 0.1
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const color = isDark ? '0,201,212' : '0,127,136';
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color},${p.alpha})`;
            ctx.fill();
            p.x += p.dx; p.y += p.dy;
            if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        });
        // Draw subtle connections
        particles.forEach((p, i) => {
            particles.slice(i + 1).forEach(q => {
                const d = Math.hypot(p.x - q.x, p.y - q.y);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(${color},${0.05 * (1 - d / 120)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            });
        });
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init);
    init(); draw();
})();

/* ─── Speech Synthesis ─── */
voiceSynthBtn.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    voiceSynthBtn.classList.toggle('active', isAudioEnabled);
    voiceSynthBtn.querySelector('i').className = isAudioEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    if (!isAudioEnabled) window.speechSynthesis.cancel();
});

function speakText(text) {
    if (!isAudioEnabled) return;
    const plain = text.replace(/<[^>]*>/gm, '').replace(/[\u2700-\u27BF\uE000-\uF8FF\uFE00-\uFE0F\u2100-\u26FF]+/g, '');
    const utt = new SpeechSynthesisUtterance(plain);
    utt.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    utt.rate = 1.05; utt.pitch = 1;
    window.speechSynthesis.speak(utt);
}

/* ─── Voice Input ─── */
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRec) {
    const recognition = new SpeechRec();
    recognition.interimResults = false;
    voiceInputBtn.addEventListener('click', () => {
        recognition.lang = currentLang === 'ar' ? 'ar-JO' : 'en-US';
        voiceInputBtn.classList.add('recording');
        recognition.start();
    });
    recognition.onresult = e => {
        userInput.value = e.results[0][0].transcript;
        voiceInputBtn.classList.remove('recording');
        sendMessage();
    };
    recognition.onerror = () => voiceInputBtn.classList.remove('recording');
} else {
    voiceInputBtn.style.display = 'none';
}

/* ─── Quick Replies ─── */
function renderQuickReplies() {
    if (!quickReplies) return;
    const t = TRANSLATIONS[currentLang];
    quickReplies.innerHTML = '';
    (t.qr_projects || []).forEach(label => {
        const btn = document.createElement('button');
        btn.className = 'quick-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => {
            userInput.value = label;
            sendMessage();
        });
        quickReplies.appendChild(btn);
    });
}

/* ─── Message Display ─── */
function addMessage(html, type) {
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = html;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    if (type === 'bot-msg') speakText(html);
}

function showTyping() {
    removeTyping();
    const div = document.createElement('div');
    div.className = 'typing-indicator'; div.id = 'typing-ind';
    div.innerHTML = '<span></span><span></span><span></span>';
    div.style.display = 'inline-block';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
function removeTyping() {
    const el = document.getElementById('typing-ind');
    if (el) el.remove();
}

/* ─── CSV Parser ─── */
function parseCSV(str) {
    const arr = []; let quote = false;
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];
        arr[row] = arr[row] || []; arr[row][col] = arr[row][col] || '';
        if (cc === '"' && quote && nc === '"') { arr[row][col] += cc; ++c; continue; }
        if (cc === '"') { quote = !quote; continue; }
        if (cc === ',' && !quote) { ++col; continue; }
        if ((cc === '\r' && nc === '\n' && !quote) || (cc === '\n' && !quote) || (cc === '\r' && !quote)) {
            ++row; col = 0; if (cc === '\r' && nc === '\n') ++c; continue;
        }
        arr[row][col] += cc;
    }
    return arr;
}

/* ─── System Prompt Builder ─── */
function buildSystemPrompt() {
    const lang = currentLang;
    const projectsKB = dynamicProjects.map(p =>
        `- ${lang === 'ar' ? 'اسم المشروع' : 'Project'}: ${p.name} | ${lang === 'ar' ? 'النوع' : 'Type'}: ${p.type} | ${lang === 'ar' ? 'السعر' : 'Price'}: ${p.price} | ${lang === 'ar' ? 'الوصف' : 'Desc'}: ${p.desc}`
    ).join('\n');

    if (lang === 'ar') {
        SYSTEM_PROMPT = `أنت مساعد مبيعات عقاري ذكي واحترافي لشركة "الحسبان للتطوير العقاري" (Hussban Invest).
هدفك: تأهيل العملاء المحتملين وتزويدهم بأفضل العروض العقارية.
مشاريعنا المتاحة:
${projectsKB}

قواعد المحادثة:
- استخدم اللغة العربية الفصيحة والودودة
- اسأل عن: الاسم، رقم الهاتف، نوع العقار المطلوب، طريقة الدفع (كاش/تمويل/أقساط)
- صنّف العملاء: HOT (مستعد للشراء الآن)، WARM (مهتم)، COLD (مجرد استفسار)
- عند اكتمال البيانات، اطبع JSON فقط: { "name": "...", "phone_number": "...", "property_type": "...", "payment_method": "...", "score": "HOT/WARM/COLD" }
- لا تتحدث عن منافسين
- قدّم حاسبة الأقساط عند الطلب`;
    } else {
        SYSTEM_PROMPT = `You are a professional AI real estate sales assistant for "Hussban Invest".
Goal: Qualify potential leads and provide the best real estate offers.
Available Projects:
${projectsKB}

Rules:
- Use professional and friendly English
- Ask for: name, phone number, desired property type, payment method (cash/financing/installments)
- Score leads: HOT (ready to buy now), WARM (interested), COLD (just inquiring)
- When data complete, print ONLY JSON: { "name": "...", "phone_number": "...", "property_type": "...", "payment_method": "...", "score": "HOT/WARM/COLD" }
- Don't mention competitors
- Offer mortgage calculator when relevant`;
    }
}

/* ─── Fetch DB ─── */
async function fetchProjectsDB() {
    try {
        // Try direct first, then CORS proxy
        let csvText;
        try {
            const r = await fetch(CONFIG.DATABASE_URL, { cache: 'no-store' });
            if (!r.ok) throw new Error('direct failed');
            csvText = await r.text();
        } catch {
            const r = await fetch(CONFIG.CORS_PROXY + encodeURIComponent(CONFIG.DATABASE_URL));
            csvText = await r.text();
        }
        const rows = parseCSV(csvText);
        dynamicProjects = [];
        for (let i = 1; i < rows.length; i++) {
            if (rows[i] && rows[i].length >= 3 && rows[i][0].trim()) {
                dynamicProjects.push({ name: rows[i][0], type: rows[i][1], price: rows[i][2], desc: rows[i][3] || '', map: rows[i][4] || '' });
            }
        }
    } catch {
        dynamicProjects = [
            { name: 'كمباوند فلل فيكتوريا', type: 'فلل مستقلة', price: '260,000 دينار', desc: 'طريق المطار', map: '' },
            { name: 'كمباوند ياسمينا ريزدنس', type: 'شقق وفلل', price: 'تواصل للأسعار', desc: 'موقع متميز', map: '' },
            { name: 'كمباوند فلل الأردن - المفرق', type: 'فلل وشقق تجارية', price: '48,000 دينار', desc: 'فرصة استثمارية', map: '' },
            { name: 'فلل دابوق الفاخرة', type: 'فلل فخمة 500م', price: '850,000 دينار', desc: 'تشطيب حصري', map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13538.52042145!2d35.8118012!3d31.9701018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11aaef838b9%3A0x9bbd8b52eb4bff8!2sDabouq%2C%20Amman!5e0!3m2!1sen!2sjo!4v1700000000000' },
            { name: 'المشاريع السابقة خارج الأردن', type: 'مشاريع دولية', price: 'متنوعة', desc: 'تركيا وخارجها', map: '' },
            { name: 'المشاريع التجارية', type: 'تجاري', price: 'تواصل للأسعار', desc: 'استثمار تجاري', map: '' },
        ];
    }
    buildSystemPrompt();
}

/* ─── WhatsApp Integration ─── */
function sendToWhatsApp(data) {
    const t = TRANSLATIONS[currentLang];
    currentLeadState = { ...currentLeadState, ...data };
    if (jsonOutput) jsonOutput.textContent = JSON.stringify(currentLeadState, null, 2);

    const msg = currentLang === 'ar'
        ? `🏢 *Hussban Invest - عميل جديد*\n\n👤 الاسم: ${data.name || 'غير محدد'}\n📞 الهاتف: ${data.phone_number || 'غير محدد'}\n🏠 المشروع: ${data.property_type || 'غير محدد'}\n💳 الدفع: ${data.payment_method || 'غير محدد'}\n🔥 التقييم: ${data.score || 'WARM'}`
        : `🏢 *Hussban Invest - New Lead*\n\n👤 Name: ${data.name || 'N/A'}\n📞 Phone: ${data.phone_number || 'N/A'}\n🏠 Project: ${data.property_type || 'N/A'}\n💳 Payment: ${data.payment_method || 'N/A'}\n🔥 Score: ${data.score || 'WARM'}`;

    const waUrl = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(msg)}`;
    const successMsg = currentLang === 'ar'
        ? `✅ <strong>تم تسجيل بياناتك بنجاح!</strong><br>اختر ما تريد القيام به:<br><br>
           <a href="${waUrl}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> تواصل عبر واتساب</a>
           <button onclick="window.generatePDF()" class="pdf-btn"><i class="fa-solid fa-file-pdf"></i> تحميل عرض PDF</button>`
        : `✅ <strong>Your data has been recorded!</strong><br>Choose what to do next:<br><br>
           <a href="${waUrl}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> Contact via WhatsApp</a>
           <button onclick="window.generatePDF()" class="pdf-btn"><i class="fa-solid fa-file-pdf"></i> Download PDF Quote</button>`;
    addMessage(successMsg, 'bot-msg');
}

/* ─── PDF Generation ─── */
window.generatePDF = function() {
    const container = document.getElementById('pdf-container');
    container.style.display = 'block';
    const data = currentLeadState;
    container.innerHTML = `
        <div style="text-align:center;border-bottom:3px solid #00c9d4;padding-bottom:15px;margin-bottom:20px;">
            <img src="https://hussbaninvest.com/wp-content/uploads/2023/10/Logo-sticky.png" style="height:60px;margin:0 auto 10px;">
            <h1 style="color:#0a0e1a;font-size:1.4rem;">${currentLang==='ar'?'الحسبان للتطوير العقاري':'Hussban Real Estate Development'}</h1>
            <h3 style="color:#666;font-size:1rem;">${currentLang==='ar'?'عرض مالي مخصص':'Personalized Financial Quote'}</h3>
        </div>
        <table style="width:100%;border-collapse:collapse;text-align:right;">
            <tr style="background:#f8f8f8;"><td style="padding:10px;border:1px solid #ddd;width:40%;"><strong>${currentLang==='ar'?'اسم العميل':'Client Name'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${data.name}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'رقم الهاتف':'Phone Number'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${data.phone_number}</td></tr>
            <tr style="background:#f8f8f8;"><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'المشروع المطلوب':'Property Interest'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${data.property_type}</td></tr>
            <tr><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'طريقة الدفع':'Payment Method'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${data.payment_method}</td></tr>
        </table>
        <p style="margin-top:20px;font-size:0.85rem;color:#888;text-align:center;">Hussban Invest • +962 77 066 1862 • hussbaninvest.com</p>`;
    const opt = { margin: 0.8, filename: 'Hussban_Quote.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2, useCORS: true }, jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }};
    html2pdf().set(opt).from(container).save().then(() => { container.style.display = 'none'; });
};

/* ─── Mortgage Calculator ─── */
window.updateMortgage = function(val) {
    document.getElementById('down-val').textContent = Number(val).toLocaleString();
    const remaining = 260000 - Number(val);
    document.getElementById('installment-val').textContent = remaining > 0 ? Math.round(remaining / 5).toLocaleString() : 0;
};

/* ─── AI Chat (Manus with CORS Proxy fallback) ─── */
async function chatWithAI(userMessage) {
    conversationHistory.push(`User: ${userMessage}`);
    currentLeadState.score = 'WARM';

    const prompt = SYSTEM_PROMPT + '\n\n--- Conversation ---\n' + conversationHistory.join('\n') + '\n\nAgent:';

    try {
        const createRes = await fetch('https://api.manus.ai/v2/task.create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-manus-api-key': CONFIG.MANUS_API_KEY },
            body: JSON.stringify({ message: { content: prompt } }),
        });
        if (!createRes.ok) throw new Error('API error');
        const taskData = await createRes.json();
        const taskId = taskData.id || taskData.taskId || (taskData.data && taskData.data.taskId);
        if (!taskId) throw new Error('No task ID');
        pollManus(taskId);
    } catch {
        removeTyping();
        const fallback = currentLang === 'ar'
            ? '⚠️ عذراً، تعذّر الوصول لخدمة الذكاء الاصطناعي. يرجى التواصل معنا مباشرة.'
            : '⚠️ Sorry, the AI service is temporarily unavailable. Please contact us directly.';
        addMessage(fallback + `<br><a href="https://wa.me/${CONFIG.WHATSAPP}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>`, 'bot-msg');
    }
}

async function pollManus(taskId) {
    let tries = 0;
    const iv = setInterval(async () => {
        tries++;
        try {
            const res = await fetch(`https://api.manus.ai/v2/task.listMessages?taskId=${taskId}`, {
                headers: { 'Content-Type': 'application/json', 'x-manus-api-key': CONFIG.MANUS_API_KEY }
            });
            if (!res.ok) return;
            const data = await res.json();
            const messages = data.messages || (data.data && data.data.messages) || [];
            for (const msg of messages) {
                if (msg.role !== 'user' && !seenManusIds.has(msg.id)) {
                    seenManusIds.add(msg.id);
                    const aiText = msg.content || msg.message || '';
                    if (aiText.includes('{') && aiText.includes('}')) {
                        try {
                            const match = aiText.match(/\{[\s\S]*?\}/);
                            if (match) {
                                const lead = JSON.parse(match[0]);
                                if (lead && lead.name && lead.phone_number) {
                                    removeTyping(); clearInterval(iv);
                                    sendToWhatsApp(lead); return;
                                }
                            }
                        } catch {}
                    }
                    if (aiText.trim().length > 0) {
                        removeTyping(); clearInterval(iv);
                        let formatted = aiText.replace(/\n/g, '<br>');
                        // Inject map if project mentioned
                        dynamicProjects.forEach(p => {
                            if (p.name && formatted.includes(p.name) && p.map && p.map.length > 5) {
                                formatted += `<div class="map-embed"><iframe src="${p.map}" width="100%" height="150" style="border:0;" allowfullscreen loading="lazy"></iframe></div>`;
                            }
                        });
                        // Mortgage calculator
                        if (/قسط|أقساط|تمويل|installment|financing/i.test(formatted)) {
                            const lbl = currentLang === 'ar' ? ['حاسبة الأقساط (بدون فوائد)', 'اختر دفعتك الأولى:', 'الدفعة:', 'دينار', 'القسط السنوي (5 سنوات):', 'دينار/سنة'] : ['Installment Calculator (0% interest)', 'Choose your down payment:', 'Down Payment:', 'JOD', 'Annual Installment (5 years):', 'JOD/yr'];
                            formatted += `<div class="mortgage-box"><h4>${lbl[0]}</h4><p>${lbl[1]}</p><input type="range" min="20000" max="260000" step="5000" value="50000" class="mortgage-slider" oninput="updateMortgage(this.value)"><br>${lbl[2]} <strong id="down-val">50,000</strong> ${lbl[3]}<div class="mortgage-result">${lbl[4]} <span id="installment-val">42,000</span> ${lbl[5]}</div></div>`;
                        }
                        addMessage(formatted, 'bot-msg');
                        conversationHistory.push(`Agent: ${aiText}`);
                        return;
                    }
                }
            }
            if (tries >= 40) { clearInterval(iv); removeTyping(); addMessage(currentLang === 'ar' ? '⚠️ انتهى وقت الانتظار. أرسل رسالتك مرة أخرى.' : '⚠️ Timeout. Please send your message again.', 'bot-msg'); }
        } catch {}
    }, 3000);
}

/* ─── Send Message ─── */
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;
    addMessage(text, 'user-msg');
    userInput.value = '';
    quickReplies.innerHTML = '';
    showTyping();
    await chatWithAI(text);
}
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

/* ─── Init ─── */
window.addEventListener('load', async () => {
    applyTranslations();
    renderQuickReplies();
    voiceSynthBtn.classList.add('active');

    // Highlight active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    await fetchProjectsDB();

    setTimeout(() => {
        showTyping();
        setTimeout(() => {
            removeTyping();
            const welcome = TRANSLATIONS[currentLang].welcome;
            addMessage(welcome, 'bot-msg');
            conversationHistory.push(`Agent: ${welcome}`);
        }, 1200);
    }, 600);
});
