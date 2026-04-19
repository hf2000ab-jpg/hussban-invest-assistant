/*
 * Hussban Invest — Smart Conversational AI Engine
 * Bilingual AR/EN | WhatsApp Business | Zero External API Dependencies
 * Version 3.0 — Fully Self-contained
 */

/* ─── Configuration ─── */
const CONFIG = {
    WHATSAPP: '00962770661862',
    DATABASE_URL: 'https://docs.google.com/spreadsheets/d/11Jo4KnhSgh_CnAOa7Nn4JNGa9Ax_TX7J1BYizMbyTDs/export?format=csv&cachebust=' + Date.now(),
    CORS_PROXY: 'https://api.allorigins.win/raw?url=',
    TYPING_DELAY_MIN: 800,
    TYPING_DELAY_MAX: 2200,
};

/* ─── Projects Knowledge Base ─── */
const PROJECTS_KB = {
    victoria: {
        ar: { name: 'كمباوند فلل فيكتوريا', type: 'فلل مستقلة', price: '260,000 دينار', location: 'طريق المطار، عمّان', desc: 'مجمع فلل مستقلة راقٍ على طريق المطار يتميز بتصاميم عصرية ومساحات خضراء واسعة ومرافق متكاملة للعائلة.', url: './projects/victoria.html', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13554.498425121406!2d35.9149021!3d31.8624177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca79e4d588fa7%3A0x60f06bfefbf89be8!2sQueen%20Alia%20International%20Airport%20Road!5e0!3m2!1sen!2sjo!4v1700000000000' },
        en: { name: 'Victoria Villas Compound', type: 'Independent Villas', price: 'JOD 260,000', location: 'Airport Road, Amman', desc: 'An upscale compound of independent villas on Airport Road featuring modern designs, expansive green spaces, and full family amenities.', url: './projects/victoria.html' }
    },
    yasmina: {
        ar: { name: 'كمباوند ياسمينا ريزدنس', type: 'قطع أراضي وفلل', price: '84,000 دينار', location: 'عمان، طريق المطار', desc: 'أكبر مشروع في الأردن يضم 275 فيلا. أقساط لمدة 48 شهر بدون فوائد مع إعفاء من رسوم التسجيل وخدمات متكاملة.', url: './projects/yasmina.html' },
        en: { name: 'Yasmina Residence Compound', type: 'Plots & Villas', price: 'JOD 84,000', location: 'Amman, Airport Road', desc: 'The largest project in Jordan with 275 villas. 48-month interest-free installments, registration fee exemption, and full services.', url: './projects/yasmina.html' }
    },
    mafrak: {
        ar: { name: 'كمباوند فلل الأردن - المفرق', type: 'فلل وشقق', price: '48,000 دينار', location: 'المفرق، الأردن', desc: 'فرصة استثمارية متميزة في شمال الأردن بأسعار تنافسية مدروسة وعوائد إيجارية مجزية في موقع استراتيجي.', url: './projects/mafrak.html' },
        en: { name: 'Jordan Villas - Mafraq', type: 'Villas & Apartments', price: 'JOD 48,000', location: 'Mafraq, Jordan', desc: 'An outstanding investment opportunity in northern Jordan with competitive pricing and attractive rental yields in a strategic location.', url: './projects/mafrak.html' }
    },
    dabouq: {
        ar: { name: 'فلل دابوق الفاخرة', type: 'فلل فخمة 500م²', price: '850,000 دينار', location: 'دابوق، عمّان', desc: 'فلل حصرية بمساحة 500 متر مربع في أرقى أحياء عمّان مع تشطيبات إيطالية راقية ومسابح خاصة وحدائق مصممة.', url: './projects/dabouq.html', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13538.52042145!2d35.8118012!3d31.9701018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11aaef838b9%3A0x9bbd8b52eb4bff8!2sDabouq%2C%20Amman!5e0!3m2!1sen!2sjo!4v1700000000000' },
        en: { name: 'Dabouq Luxury Villas', type: '500m² Premium Villas', price: 'JOD 850,000', location: 'Dabouq, Amman', desc: 'Exclusive 500m² villas in Amman\'s most prestigious neighborhood featuring Italian finishes, private pools, and landscaped gardens.', url: './projects/dabouq.html' }
    },
    previous: {
        ar: { name: 'مشاريع دولية', type: 'مشاريع سابقة', price: 'متنوعة', location: 'تركيا وخارجها', desc: 'سجل حافل بالمشاريع الناجحة خارج الأردن بما فيها مشاريع في تركيا ودول أخرى بعوائد استثمارية ممتازة.', url: './projects/previous.html' },
        en: { name: 'International Projects', type: 'Past Projects', price: 'Varied', location: 'Turkey & Beyond', desc: 'A strong track record of successful projects outside Jordan, including Turkey and other countries with excellent investment returns.', url: './projects/previous.html' }
    },
    commercial: {
        ar: { name: 'المشاريع التجارية', type: 'مكاتب ومعارض', price: 'تواصل للأسعار', location: 'الأردن', desc: 'فرص تجارية واستثمارية متميزة في قطاعات متنوعة تشمل المحلات التجارية والمكاتب والمستودعات بعوائد إيجارية مجزية.', url: './projects/commercial.html' },
        en: { name: 'Commercial Projects', type: 'Offices & Retail', price: 'Contact for pricing', location: 'Jordan', desc: 'Outstanding commercial and investment opportunities across diverse sectors including retail, offices, and warehouses with attractive returns.', url: './projects/commercial.html' }
    }
};

/* ─── Conversation Engine ─── */
const CONV_STATES = { GREETING: 0, GET_NEED: 1, SHOW_PROJECTS: 2, GET_BUDGET: 3, GET_NAME: 4, GET_PHONE: 5, GET_PAYMENT: 6, QUALIFIED: 7, FREE_CHAT: 99 };

const BOT = {
    ar: {
        greeting: `أهلاً وسهلاً! 👋 أنا مساعد <strong>Hussban Invest</strong> الذكي لخدمة المبيعات.\nيسعدني مساعدتك في إيجاد العقار المثالي بأفضل الأسعار! 🏠\n\nهل أنت مهتم بـ:`,
        greetingOptions: ['🏡 شراء عقار للسكن', '💰 الاستثمار العقاري', '📋 الاستفسار عن مشروع معين'],
        askBudget: `ممتاز! 💼 لمساعدتك بشكل أفضل، ما هو المدى السعري الذي تفكر فيه؟`,
        budgetOptions: ['أقل من 100,000 دينار', '100,000 - 300,000 دينار', 'أكثر من 300,000 دينار', 'مرن / أرفضل الاطلاع أولاً'],
        askName: `رائع! 😊 أخبرني باسمك الكريم لأتمكن من تقديم خدمة شخصية لك:`,
        askPhone: (name) => `تشرفنا بمعرفتك ${name}! 📱\nما هو رقم هاتفك للتواصل معك وإرسال التفاصيل الكاملة؟`,
        askPayment: `شكراً جزيلاً! 💳 آخر سؤال — كيف تخطط للدفع؟`,
        paymentOptions: ['💵 كاش (الدفع الفوري)', '🏦 تمويل بنكي', '📅 أقساط مباشرة من الشركة', '🤔 لم أقرر بعد'],
        qualified: (name, project) => `✅ <strong>شكراً ${name}!</strong> تم تسجيل معلوماتك.<br><br>قريباً سيتواصل معك خبراؤنا لتقديم عرض مخصص لـ <strong>${project}</strong>.<br><br>يمكنك التواصل معنا الآن مباشرةً:`,
        fallbackKw: { price: ['سعر', 'سعره', 'كم', 'التكلفة', 'تكلف', 'بكام', 'ثمن'], finance: ['تقسيط', 'قسط', 'تمويل', 'أقساط', 'بنك', 'دفع'], location: ['موقع', 'مكان', 'وين', 'فين', 'أين', 'منطقة', 'خريطة'], pdf: ['pdf', 'ملف', 'عرض', 'تفاصيل', 'برينت'], contact: ['تواصل', 'اتصال', 'واتساب', 'whatsapp', 'رقم'] },
        projectIntro: (p) => `🏗️ <strong>${p.name}</strong>\n📍 ${p.location}\n💰 ${p.price}\n\n${p.desc}\n\n<a href="${p.url}" style="color:var(--primary);font-weight:700;">← عرض تفاصيل المشروع كاملة</a>`,
        allProjects: `إليك مشاريعنا الحالية، اختر ما يناسبك:`,
        notUnderstood: [`حسناً، دعني أساعدك بشكل أفضل. هل تودّ رؤية مشاريعنا المتاحة؟`, `ممتاز! يبدو أنك مهتم بالاستثمار العقاري. هل تريد الاطلاع على أفضل خياراتنا؟`, `بالتأكيد! سأحرص على تقديم المعلومات الأنسب لك. هل ميزانيتك محددة؟`],
        mortgageTitle: '🧮 حاسبة الأقساط (بدون فوائد)',
        mortgageSliderLabel: 'اختر دفعتك الأولى:',
        mortgageDown: 'الدفعة الأولى:',
        mortgageResult: 'القسط السنوي (5 سنوات):',
        mortgageCurrency: 'دينار',
    },
    en: {
        greeting: `Hello! 👋 I'm <strong>Hussban Invest</strong>'s AI Sales Assistant.\nI'm here to help you find your perfect property at the best prices! 🏠\n\nAre you interested in:`,
        greetingOptions: ['🏡 Buying a home', '💰 Real estate investment', '📋 Inquiring about a specific project'],
        askBudget: `Great! 💼 To better assist you, what is your budget range?`,
        budgetOptions: ['Under JOD 100,000', 'JOD 100,000 - 300,000', 'Over JOD 300,000', 'Flexible / Want to explore first'],
        askName: `Wonderful! 😊 Please share your name so I can provide you with personalized service:`,
        askPhone: (name) => `Pleased to meet you, ${name}! 📱\nWhat is your phone number so we can contact you and send full details?`,
        askPayment: `Thank you! 💳 One last question — how are you planning to pay?`,
        paymentOptions: ['💵 Cash (immediate payment)', '🏦 Bank financing', '📅 Direct installments from company', '🤔 Haven\'t decided yet'],
        qualified: (name, project) => `✅ <strong>Thank you, ${name}!</strong> Your information has been recorded.<br><br>Our experts will contact you shortly with a customized offer for <strong>${project}</strong>.<br><br>You can also reach us directly now:`,
        fallbackKw: { price: ['price', 'cost', 'how much', 'expensive', 'cheap', 'value'], finance: ['installment', 'mortgage', 'finance', 'payment', 'bank', 'loan'], location: ['location', 'where', 'map', 'area', 'address', 'place'], pdf: ['pdf', 'file', 'quote', 'details', 'brochure'], contact: ['contact', 'call', 'whatsapp', 'phone', 'reach'] },
        projectIntro: (p) => `🏗️ <strong>${p.name}</strong>\n📍 ${p.location}\n💰 ${p.price}\n\n${p.desc}\n\n<a href="${p.url}" style="color:var(--primary);font-weight:700;">← View full project details</a>`,
        allProjects: `Here are our current projects — choose what suits you:`,
        notUnderstood: [`Let me help you better. Would you like to see our available projects?`, `Sounds interesting! Are you looking for residential or investment properties?`, `Of course! I'll make sure to find you the best options. Do you have a specific budget in mind?`],
        mortgageTitle: '🧮 Installment Calculator (0% interest)',
        mortgageSliderLabel: 'Select your down payment:',
        mortgageDown: 'Down Payment:',
        mortgageResult: 'Annual Installment (5 yrs):',
        mortgageCurrency: 'JOD',
    }
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
        yasmina_desc: 'An upscale residential compound combining elegance and comfort',
        mafrak_name: 'Jordan Villas - Mafraq', mafrak_loc: 'Mafraq, Jordan',
        mafrak_desc: 'Exceptional investment opportunity at competitive prices in northern Jordan',
        mafrak_price: 'From <strong>JOD 48,000</strong>',
        dabouq_name: 'Dabouq Luxury Villas', dabouq_loc: 'Dabouq, Amman',
        dabouq_desc: '500m² villas with exclusive finishes in Amman\'s most prestigious area',
        dabouq_price: 'From <strong>JOD 850,000</strong>',
        prev_name: 'International Projects', prev_loc: 'Turkey & Beyond',
        prev_desc: 'A track record of successful projects in distinguished international markets',
        comm_name: 'Commercial Projects', comm_loc: 'Jordan',
        comm_desc: 'Commercial and investment opportunities in diverse sectors',
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
        feat3_t: 'Direct WhatsApp Connect', feat3_d: 'After the conversation, your data is sent directly to the sales team via WhatsApp',
        feat4_t: 'Financing Calculator', feat4_d: 'Calculate your monthly installment and down payment interactively for any project',
        feat5_t: 'QR Per Project', feat5_d: 'Scan the code to get full project details anytime from your device',
        feat6_t: 'Safe & Trusted Investment', feat6_d: '15+ years of experience in Jordan and international real estate markets',
        footer_tagline: 'Your trusted real estate partner in Jordan and beyond',
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
let convState = CONV_STATES.GREETING;
let leadData = { name: '', phone: '', interest: '', budget: '', payment: '', score: 'COLD' };
let notUnderstoodIdx = 0;
let dynamicProjects = [];

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
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const quickReplies = document.getElementById('quick-replies');

/* ─── Language ─── */
function applyTranslations() {
    const t = TRANSLATIONS[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (t[k] !== undefined) el.innerHTML = t[k];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const k = el.getAttribute('data-i18n-placeholder');
        if (t[k] !== undefined) el.placeholder = t[k];
    });
    document.documentElement.setAttribute('lang', currentLang);
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    if (langLabel) langLabel.textContent = currentLang === 'ar' ? 'EN' : 'عر';
}
if (langBtn) langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyTranslations();
    renderQuickReplies();
});

/* ─── Theme ─── */
if (themeBtn) themeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    if (themeIcon) themeIcon.className = isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
});

/* ─── Navbar ─── */
window.addEventListener('scroll', () => {
    const nb = document.getElementById('navbar');
    if (nb) nb.classList.toggle('scrolled', window.scrollY > 20);
});
if (hamburger) hamburger.addEventListener('click', () => navMenu && navMenu.classList.toggle('open'));
if (navMenu) navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));

/* ─── Intersection Observer Animations ─── */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
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
    function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
    function init() {
        resize(); particles = [];
        for (let i = 0; i < 70; i++) particles.push({
            x: Math.random()*W, y: Math.random()*H, r: Math.random()*1.5+0.3,
            dx: (Math.random()-0.5)*0.3, dy: (Math.random()-0.5)*0.3, alpha: Math.random()*0.5+0.1
        });
    }
    function draw() {
        ctx.clearRect(0,0,W,H);
        const dark = document.documentElement.getAttribute('data-theme') !== 'light';
        const c = dark ? '0,201,212' : '0,127,136';
        particles.forEach(p => {
            ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle = `rgba(${c},${p.alpha})`; ctx.fill();
            p.x+=p.dx; p.y+=p.dy;
            if(p.x<0)p.x=W; if(p.x>W)p.x=0; if(p.y<0)p.y=H; if(p.y>H)p.y=0;
        });
        particles.forEach((p,i)=>{ particles.slice(i+1).forEach(q=>{
            const d=Math.hypot(p.x-q.x,p.y-q.y);
            if(d<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${c},${0.04*(1-d/120)})`;ctx.lineWidth=0.5;ctx.stroke();}
        }); });
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize', init);
    init(); draw();
})();

/* ─── Speech ─── */
if (voiceSynthBtn) voiceSynthBtn.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    voiceSynthBtn.classList.toggle('active', isAudioEnabled);
    voiceSynthBtn.querySelector('i').className = isAudioEnabled ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark';
    if (!isAudioEnabled) window.speechSynthesis.cancel();
});
function speakText(text) {
    if (!isAudioEnabled || !window.speechSynthesis) return;
    const plain = text.replace(/<[^>]*>/gm,'').replace(/[^\u0000-\u007E\u0600-\u06FF\u0750-\u077F]/g,'');
    if (!plain.trim()) return;
    const utt = new SpeechSynthesisUtterance(plain);
    utt.lang = currentLang === 'ar' ? 'ar-SA' : 'en-US';
    utt.rate = 1.1; utt.pitch = 1;
    window.speechSynthesis.speak(utt);
}
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRec && voiceInputBtn) {
    const recognition = new SpeechRec();
    recognition.interimResults = false;
    voiceInputBtn.addEventListener('click', () => {
        recognition.lang = currentLang === 'ar' ? 'ar-JO' : 'en-US';
        voiceInputBtn.classList.add('recording');
        recognition.start();
    });
    recognition.onresult = e => { userInput.value = e.results[0][0].transcript; voiceInputBtn.classList.remove('recording'); sendMessage(); };
    recognition.onerror = () => voiceInputBtn && voiceInputBtn.classList.remove('recording');
} else if (voiceInputBtn) { voiceInputBtn.style.display = 'none'; }

/* ─── Quick Replies ─── */
function renderQuickReplies(options) {
    if (!quickReplies) return;
    quickReplies.innerHTML = '';
    const items = options || TRANSLATIONS[currentLang].qr_projects;
    items.forEach(label => {
        const btn = document.createElement('button');
        btn.className = 'quick-btn';
        btn.textContent = label;
        btn.addEventListener('click', () => {
            quickReplies.innerHTML = '';
            userInput.value = label;
            sendMessage();
        });
        quickReplies.appendChild(btn);
    });
}

/* ─── Message Display ─── */
function addMessage(html, type) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = html.replace(/\n/g, '<br>');
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
    if (chatMessages) { chatMessages.appendChild(div); chatMessages.scrollTop = chatMessages.scrollHeight; }
}
function removeTyping() { const el = document.getElementById('typing-ind'); if (el) el.remove(); }
function botReply(html, options, delay) {
    const d = delay || Math.random() * (CONFIG.TYPING_DELAY_MAX - CONFIG.TYPING_DELAY_MIN) + CONFIG.TYPING_DELAY_MIN;
    showTyping();
    setTimeout(() => {
        removeTyping();
        addMessage(html, 'bot-msg');
        if (options && options.length > 0) renderQuickReplies(options);
        else if (quickReplies) quickReplies.innerHTML = '';
    }, d);
}

/* ─── PDF Generator ─── */
window.generatePDF = function() {
    const container = document.getElementById('pdf-container');
    if (!container) return;
    container.style.display = 'block';
    container.innerHTML = `
    <div style="text-align:center;border-bottom:3px solid #00c9d4;padding-bottom:15px;margin-bottom:20px;">
        <img src="https://hussbaninvest.com/wp-content/uploads/2023/10/Logo-sticky.png" style="height:60px;margin:0 auto 10px;display:block;">
        <h1 style="color:#0a0e1a;font-size:1.4rem;">${currentLang==='ar'?'الحسبان للتطوير العقاري':'Hussban Real Estate Development'}</h1>
        <h3 style="color:#666;font-size:1rem;">${currentLang==='ar'?'عرض مالي مخصص':'Personalized Financial Quote'}</h3>
    </div>
    <table style="width:100%;border-collapse:collapse;text-align:right;">
        <tr style="background:#f8f8f8;"><td style="padding:10px;border:1px solid #ddd;width:40%;"><strong>${currentLang==='ar'?'الاسم':'Name'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.name||'—'}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'الهاتف':'Phone'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.phone||'—'}</td></tr>
        <tr style="background:#f8f8f8;"><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'الاهتمام':'Interest'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.interest||'—'}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'الميزانية':'Budget'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.budget||'—'}</td></tr>
        <tr style="background:#f8f8f8;"><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'طريقة الدفع':'Payment'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.payment||'—'}</td></tr>
        <tr><td style="padding:10px;border:1px solid #ddd;"><strong>${currentLang==='ar'?'التقييم':'Score'}</strong></td><td style="padding:10px;border:1px solid #ddd;">${leadData.score}</td></tr>
    </table>
    <p style="margin-top:20px;font-size:0.85rem;color:#888;text-align:center;">Hussban Invest • +962 77 066 1862 • hussbaninvest.com</p>`;
    const opt = { margin: 0.8, filename: 'Hussban_Quote.pdf', image:{type:'jpeg',quality:0.98}, html2canvas:{scale:2,useCORS:true}, jsPDF:{unit:'in',format:'a4',orientation:'portrait'}};
    html2pdf().set(opt).from(container).save().then(()=>{ container.style.display='none'; });
};

/* ─── WhatsApp Dispatch ─── */
function dispatchToWhatsApp() {
    const b = BOT[currentLang];
    const msg = currentLang === 'ar'
        ? `🏢 *Hussban Invest — عميل جديد*\n\n👤 الاسم: ${leadData.name}\n📞 الهاتف: ${leadData.phone}\n🏠 الاهتمام: ${leadData.interest}\n💰 الميزانية: ${leadData.budget}\n💳 الدفع: ${leadData.payment}\n🔥 التقييم: ${leadData.score}`
        : `🏢 *Hussban Invest — New Lead*\n\n👤 Name: ${leadData.name}\n📞 Phone: ${leadData.phone}\n🏠 Interest: ${leadData.interest}\n💰 Budget: ${leadData.budget}\n💳 Payment: ${leadData.payment}\n🔥 Score: ${leadData.score}`;
    const waUrl = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(msg)}`;
    const html = `${b.qualified(leadData.name, leadData.interest)}<br><br>
    <a href="${waUrl}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> ${currentLang==='ar'?'تواصل الآن':'Contact Now'}</a>
    <button onclick="window.generatePDF()" class="pdf-btn"><i class="fa-solid fa-file-pdf"></i> PDF</button>`;
    botReply(html, [], 800);
}

/* ─── Mortgage Calculator ─── */
window.updateMortgage = function(val) {
    const dv = document.getElementById('down-val');
    const iv = document.getElementById('installment-val');
    if (dv) dv.textContent = Number(val).toLocaleString();
    if (iv) { const rem = 260000 - Number(val); iv.textContent = rem > 0 ? Math.round(rem/5).toLocaleString() : 0; }
};

/* ─── Project Cards HTML ─── */
function buildProjectCard(proj) {
    return `<a href="${proj.url}" style="display:inline-block;margin-top:8px;padding:8px 14px;background:var(--primary-dim);color:var(--primary);border:1px solid var(--border-glow);border-radius:50px;font-size:0.85rem;font-weight:700;text-decoration:none;">🏗 ${proj.name} ←</a>`;
}
function showAllProjects() {
    const b = BOT[currentLang];
    const allProjs = Object.values(PROJECTS_KB).map(p => p[currentLang]);
    let html = b.allProjects + '<br><br>';
    allProjs.forEach(p => { html += buildProjectCard(p) + ' '; });
    botReply(html);
}

/* ─── Keyword Detector ─── */
function detectIntent(text) {
    const t = text.toLowerCase();
    const kw = BOT[currentLang].fallbackKw;
    for (const [intent, words] of Object.entries(kw)) {
        if (words.some(w => t.includes(w))) return intent;
    }
    const allProjKeys = Object.keys(PROJECTS_KB);
    for (const key of allProjKeys) {
        const pname = PROJECTS_KB[key][currentLang].name.toLowerCase();
        if (t.includes(pname.split(' ')[0]) || t.includes(pname.split(' ')[1]||'__')) return 'project_' + key;
    }
    if (/مرحب|أهلا|هلا|سلام|hello|hi|hey/i.test(t)) return 'greet';
    if (/شكر|thank/i.test(t)) return 'thanks';
    return null;
}

/* ─── MAIN Conversation Handler ─── */
function handleUserMessage(text) {
    const b = BOT[currentLang];
    const t = text.trim();
    const intent = detectIntent(t);

    // Free keyword intents (regardless of state)
    if (intent === 'greet' && convState !== CONV_STATES.GREETING) {
        botReply(currentLang==='ar'?'أهلاً بك مجدداً! 😊 كيف يمكنني مساعدتك؟':'Welcome back! 😊 How can I help you?');
        return;
    }
    if (intent === 'thanks') {
        botReply(currentLang==='ar'?'العفو! يسعدني خدمتك دائماً. هل هناك شيء آخر أقدر أساعدك به؟':'You\'re welcome! I\'m always happy to help. Is there anything else I can assist you with?');
        return;
    }
    if (intent === 'finance') {
        const lbl = b.mortgageTitle;
        const html = `<br><div class="mortgage-box"><h4>${b.mortgageTitle}</h4><p>${b.mortgageSliderLabel}</p><input type="range" min="20000" max="260000" step="5000" value="50000" class="mortgage-slider" oninput="updateMortgage(this.value)"><br>${b.mortgageDown} <strong id="down-val">50,000</strong> ${b.mortgageCurrency}<div class="mortgage-result">${b.mortgageResult} <span id="installment-val">42,000</span> ${b.mortgageCurrency}</div></div>`;
        botReply(currentLang==='ar'?`يسعدني مساعدتك بخصوص خطط التمويل والتقسيط! 💳\nلدينا خيارات تمويل مرنة تشمل التمويل البنكي والتقسيط المباشر.${html}`:`I'd be happy to help with financing plans! 💳\nWe offer flexible financing options including bank financing and direct installments.${html}`);
        return;
    }
    if (intent === 'pdf') {
        if (leadData.name && leadData.phone) {
            window.generatePDF();
        } else {
            botReply(currentLang==='ar'?'لإصدار العرض، أحتاج اسمك ورقم هاتفك أولاً. ما اسمك الكريم؟':'To generate the quote, I need your name and phone first. What\'s your name?');
            convState = CONV_STATES.GET_NAME;
        }
        return;
    }
    if (intent === 'contact') {
        const waUrl = `https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent(currentLang==='ar'?'مرحباً، أريد الاستفسار':'Hello, I\'d like to inquire')}`;
        botReply(currentLang==='ar'?`يمكنك التواصل معنا مباشرة:\n\n<a href="${waUrl}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> واتساب: +962 77 066 1862</a>`:`You can contact us directly:\n\n<a href="${waUrl}" target="_blank" class="wa-confirm-btn"><i class="fa-brands fa-whatsapp"></i> WhatsApp: +962 77 066 1862</a>`);
        return;
    }
    if (intent && intent.startsWith('project_')) {
        const key = intent.replace('project_', '');
        const proj = PROJECTS_KB[key][currentLang];
        let html = b.projectIntro(proj);
        if (proj.mapUrl) html += `<div class="map-embed"><iframe src="${proj.mapUrl}" width="100%" height="150" style="border:0;" allowfullscreen loading="lazy"></iframe></div>`;
        botReply(html, [currentLang==='ar'?'عرض السعر':'View Price', currentLang==='ar'?'حاسبة الأقساط':'Calc Installment', currentLang==='ar'?'تواصل واتساب':'WhatsApp']);
        leadData.interest = proj.name;
        leadData.score = 'WARM';
        return;
    }
    if (intent === 'price') { showAllProjects(); return; }
    if (intent === 'location') {
        showAllProjects();
        return;
    }

    // ── State Machine ──
    switch (convState) {
        case CONV_STATES.GREETING:
            botReply(b.greeting, b.greetingOptions, 1500);
            convState = CONV_STATES.GET_NEED;
            break;

        case CONV_STATES.GET_NEED:
            leadData.interest = t;
            if (/سكن|شراء|بيت|بيتي|للسكن|residential|home|buy|house/i.test(t)) {
                leadData.score = 'WARM';
            } else if (/استثمار|ربح|عائد|invest|return/i.test(t)) {
                leadData.score = 'HOT';
                leadData.interest = currentLang === 'ar' ? 'الاستثمار العقاري' : 'Real Estate Investment';
            }
            botReply(b.askBudget, b.budgetOptions);
            convState = CONV_STATES.GET_BUDGET;
            break;

        case CONV_STATES.GET_BUDGET:
            leadData.budget = t;
            if (/أكثر|300|over|more/i.test(t)) { leadData.score = 'HOT'; }
            else if (/100|200|مرن|flexible/i.test(t)) { leadData.score = 'WARM'; }
            // Show matching projects
            let matchHtml = '';
            let matchCount = 0;
            if (/أقل من 100|under 100|48|مفرق/i.test(t)) {
                matchHtml = BOT[currentLang].projectIntro(PROJECTS_KB.mafrak[currentLang]);
                matchCount++;
            } else if (/300|850|دابوق|luxury|dabouq/i.test(t)) {
                matchHtml = BOT[currentLang].projectIntro(PROJECTS_KB.dabouq[currentLang]);
                matchCount++;
            } else if (/100|260|فيكتوريا|victoria/i.test(t)) {
                matchHtml = BOT[currentLang].projectIntro(PROJECTS_KB.victoria[currentLang]);
                matchCount++;
            }
            if (matchHtml) {
                const intro = currentLang === 'ar' ? 'ممتاز! بناءً على ميزانيتك، إليك المشروع الأنسب:\n\n' : 'Based on your budget, here\'s our best match:\n\n';
                botReply(intro + matchHtml, [], 1200);
                setTimeout(() => {
                    botReply(b.askName, [], 1500);
                    convState = CONV_STATES.GET_NAME;
                }, 3200);
            } else {
                botReply(b.askName, [], 1200);
                convState = CONV_STATES.GET_NAME;
            }
            break;

        case CONV_STATES.GET_NAME:
            if (t.length < 2) { botReply(currentLang==='ar'?'يرجى إدخال اسمك الكريم:':'Please enter your name:'); return; }
            leadData.name = t.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            botReply(b.askPhone(leadData.name), [], 800);
            convState = CONV_STATES.GET_PHONE;
            break;

        case CONV_STATES.GET_PHONE:
            if (t.replace(/\D/g,'').length < 7) {
                botReply(currentLang==='ar'?'يرجى إدخال رقم هاتف صحيح (على الأقل 7 أرقام):':'Please enter a valid phone number (at least 7 digits):');
                return;
            }
            leadData.phone = t;
            leadData.score = 'HOT';
            botReply(b.askPayment, b.paymentOptions, 800);
            convState = CONV_STATES.GET_PAYMENT;
            break;

        case CONV_STATES.GET_PAYMENT:
            leadData.payment = t;
            convState = CONV_STATES.QUALIFIED;
            dispatchToWhatsApp();
            break;

        case CONV_STATES.QUALIFIED:
        case CONV_STATES.FREE_CHAT:
        default:
            notUnderstoodIdx = (notUnderstoodIdx + 1) % b.notUnderstood.length;
            botReply(b.notUnderstood[notUnderstoodIdx],
                [currentLang==='ar'?'عرض المشاريع':'Show Projects',
                 currentLang==='ar'?'حاسبة الأقساط':'Installment Calc',
                 currentLang==='ar'?'تواصل واتساب':'WhatsApp']);
            break;
    }
}

/* ─── Send Message ─── */
function sendMessage() {
    if (!userInput) return;
    const text = userInput.value.trim();
    if (!text) return;
    addMessage(text, 'user-msg');
    userInput.value = '';
    if (quickReplies) quickReplies.innerHTML = '';
    handleUserMessage(text);
}
if (sendBtn) sendBtn.addEventListener('click', sendMessage);
if (userInput) userInput.addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });

/* ─── CSV Parser (for Google Sheets) ─── */
function parseCSV(str) {
    const arr = []; let quote = false;
    for (let row=0,col=0,c=0; c<str.length; c++) {
        let cc=str[c],nc=str[c+1];
        arr[row]=arr[row]||[]; arr[row][col]=arr[row][col]||'';
        if(cc==='"'&&quote&&nc==='"'){arr[row][col]+=cc;++c;continue;}
        if(cc==='"'){quote=!quote;continue;}
        if(cc===','&&!quote){++col;continue;}
        if((cc==='\r'&&nc==='\n'&&!quote)||(cc==='\n'&&!quote)||(cc==='\r'&&!quote)){++row;col=0;if(cc==='\r'&&nc==='\n')++c;continue;}
        arr[row][col]+=cc;
    }
    return arr;
}
async function fetchProjectsDB() {
    try {
        let csvText;
        try { const r=await fetch(CONFIG.DATABASE_URL,{cache:'no-store'}); if(!r.ok) throw 0; csvText=await r.text(); }
        catch { const r=await fetch(CONFIG.CORS_PROXY+encodeURIComponent(CONFIG.DATABASE_URL)); csvText=await r.text(); }
        const rows=parseCSV(csvText);
        dynamicProjects=[];
        for(let i=1;i<rows.length;i++){
            if(rows[i]&&rows[i].length>=3&&rows[i][0].trim()){
                dynamicProjects.push({name:rows[i][0],type:rows[i][1],price:rows[i][2],desc:rows[i][3]||'',map:rows[i][4]||''});
            }
        }
    } catch {}
}

/* ─── Init ─── */
window.addEventListener('load', async () => {
    applyTranslations();
    renderQuickReplies();
    if (voiceSynthBtn) voiceSynthBtn.classList.add('active');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
            link.classList.add('active');
        });
    });
    await fetchProjectsDB();
    // Start conversation
    setTimeout(() => {
        showTyping();
        setTimeout(() => {
            removeTyping();
            const b = BOT[currentLang];
            addMessage(b.greeting, 'bot-msg');
            renderQuickReplies(b.greetingOptions);
            convState = CONV_STATES.GET_NEED;
        }, 1400);
    }, 700);
});
