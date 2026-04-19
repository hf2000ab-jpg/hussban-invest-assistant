/* 
 * Hussban Invest - Smart Real Estate Assistant 
 * AI Integration (Manus.ai) + 5 Ultimate Premium Features + Google Sheets Database
 */

const MANUS_API_KEY = "sk-3P7oDW85yaVVZLzphZCFJG4IdtbiKcIG115cK6gmSKncVnanXopoumk5IgkcsKy33oXcjI9lOfhizC7Ujt5L5I1Hn4AH"; // مفتاح ה- API ל- Manus
const DATABASE_URL = "https://docs.google.com/spreadsheets/d/11Jo4KnhSgh_CnAOa7Nn4JNGa9Ax_TX7J1BYizMbyTDs/export?format=csv"; // رابط قوقل شيت (نظام حي)

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const jsonOutput = document.getElementById('json-output');

// أزرار الميزات المتقدمة
const themeBtn = document.getElementById('theme-btn');
const voiceSynthesisBtn = document.getElementById('voice-synthesis-btn');
const voiceInputBtn = document.getElementById('voice-btn');
const uiSoundSent = document.getElementById('ui-sound-sent');
const uiSoundRecv = document.getElementById('ui-sound-receive');

// إعدادات الحالة
let isDarkMode = false;
let isAudioEnabled = true;

// 1. Theme Manager
themeBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// 2. الصوت الآلي للوكيل (Speech Synthesis)
voiceSynthesisBtn.addEventListener('click', () => {
    isAudioEnabled = !isAudioEnabled;
    if (isAudioEnabled) {
        voiceSynthesisBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        voiceSynthesisBtn.classList.add('active');
    } else {
        voiceSynthesisBtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        voiceSynthesisBtn.classList.remove('active');
        window.speechSynthesis.cancel();
    }
});

function speakText(text) {
    if (!isAudioEnabled) return;
    let plainText = text.replace(/<[^>]*>?/gm, ''); 
    plainText = plainText.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    
    const utterance = new SpeechSynthesisUtterance(plainText);
    utterance.lang = 'ar-SA';
    utterance.rate = 1.1; 
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

// 3. التعرف على الإدخال الصوتي (Speech Recognition)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-JO';
    recognition.interimResults = false;
    
    voiceInputBtn.addEventListener('click', () => {
        voiceInputBtn.classList.add('recording');
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        userInput.value = transcript;
        voiceInputBtn.classList.remove('recording');
        sendMessage(); 
    };

    recognition.onerror = () => {
        voiceInputBtn.classList.remove('recording');
    };
} else {
    voiceInputBtn.style.display = 'none'; 
}

function playSound(type) {
    if(!isAudioEnabled) return;
    try {
        if(type === 'sent') {
            uiSoundSent.volume = 0.2;
            uiSoundSent.play().catch(e => {});
        } else {
            uiSoundRecv.volume = 0.2;
            uiSoundRecv.play().catch(e => {});
        }
    } catch(err) {}
}


// لوحة لعرض الحالة
let currentLeadState = {
    name: "PENDING",
    phone_number: "PENDING",
    property_type: "PENDING",
    payment_method: "PENDING",
    financing_entity: "PENDING",
    financing_duration: "PENDING",
    down_payment: "PENDING",
    score: "COLD"
};

let conversationHistory = []; 

function updateJSON(data = currentLeadState) {
    const payload = {
        metadata: { "source": "Ultimate AI Agent", "timestamp": new Date().toISOString() },
        lead_info: { "name": data.name, "phone_number": data.phone_number },
        property_interest: { "type_or_project": data.property_type },
        financing_details: {
            "payment_method": data.payment_method,
            "financing_entity": data.financing_entity,
            "financing_duration": data.financing_duration,
            "down_payment": data.down_payment
        },
        lead_scoring: { "score": data.score }
    };
    
    let html = JSON.stringify(payload, null, 2);
    html = html.replace(/("(.+?)":)/g, '<span style="color: #00a2ad;">$1</span>')
        .replace(/"PENDING"/g, '<span style="color: rgba(255,105,0,0.8);">"PENDING"</span>')
        .replace(/"COLD"/g, '<span style="color: #7b868d;">"COLD"</span>')
        .replace(/"WARM"/g, '<span style="color: #f5a524;">"WARM"</span>')
        .replace(/"HOT"/g, '<span style="color: #cf2e2e; font-weight:bold;">"HOT"</span>');

    jsonOutput.innerHTML = html;
}

function addMessage(msg, type) {
    const div = document.createElement('div');
    div.classList.add('message', type);
    div.innerHTML = msg;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    if(type === 'user-msg') playSound('sent');
    else if(type === 'bot-msg') playSound('received');
}

function showTypingIndicator() {
    const div = document.createElement('div');
    div.classList.add('typing-indicator');
    div.id = 'typing-indicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    div.style.display = 'inline-block';
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) indicator.remove();
}

window.updateMortgage = function(sliderValue) {
    document.getElementById('down-val').innerText = Number(sliderValue).toLocaleString();
    const remaining = 260000 - Number(sliderValue); 
    const annual = remaining / 5; 
    document.getElementById('installment-val').innerText = (annual > 0 ? annual.toLocaleString() : 0);
};

window.generatePDF = function() {
    const pdfContainer = document.getElementById('pdf-container');
    pdfContainer.style.display = 'block';
    pdfContainer.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #00a2ad; padding-bottom: 15px; margin-bottom: 20px;">
            <h1 style="color: #242d2d; margin-bottom: 5px;">الحسبان للتطوير العقاري</h1>
            <h3 style="color: #7b868d;">عرض مالي مخصص لعميل كبار الشخصيات (VIP)</h3>
        </div>
        <table style="width: 100%; text-align: right; border-collapse: collapse;">
            <tr style="background: #f8f8f8;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>اسم العميل:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentLeadState.name || 'محفوظ'}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>المشروع المختار:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentLeadState.property_type || 'قيد الاختيار'}</td></tr>
            <tr style="background: #f8f8f8;"><td style="padding: 10px; border: 1px solid #ddd;"><strong>طريقة الدفع:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentLeadState.payment_method || '----'}</td></tr>
            <tr><td style="padding: 10px; border: 1px solid #ddd;"><strong>الدفعة المقدمة:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${currentLeadState.down_payment || '----'}</td></tr>
        </table>
    `;
    var opt = { margin: 1, filename: 'Hussban_Quotation.pdf', image: { type: 'jpeg', quality: 0.98 }, html2canvas: { scale: 2 }, jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }};
    addMessage("✅ جاري تجهيز الملف وتسليمه...", 'bot-msg');
    
    html2pdf().set(opt).from(pdfContainer).save().then(() => {
        pdfContainer.style.display = 'none';
        pdfContainer.innerHTML = '';
    });
};

function sendToWhatsapp(data) {
    currentLeadState = {...currentLeadState, ...data}; 
    let msgText = `مرحباً الحسبان للاستثمار، أود التواصل معكم بخصوص عقار.\n\n👤 الاسم: ${data.name || 'غير محدد'}\n📞 الرقم: ${data.phone_number || 'غير محدد'}\n🏢 المشروع: ${data.property_type || 'غير محدد'}\n💳 الدفع: ${data.payment_method || 'غير محدد'}\n`;
    if (data.financing_entity && data.financing_entity !== "PENDING") msgText += `🏦 التمويل: ${data.financing_entity}\n`;
    if (data.down_payment && data.down_payment !== "PENDING") msgText += `💰 الدفعة: ${data.down_payment}\n`;
    const wpUrl = `https://wa.me/962770661862?text=${encodeURIComponent(msgText)}`;
    
    addMessage(`✅ **لقد قمت بتسجيل جميع بياناتك بنجاح**.<br>لديك خياران الآن، إما طباعة العرض التوضيحي (PDF) أو التواصل عبر الواتساب!<br><br>
    <a href="${wpUrl}" target="_blank" style="display:inline-block; padding:10px 20px; background:#25D366; color:#fff; text-decoration:none; border-radius:8px; font-weight:bold; margin-left: 10px;">
    <i class="fab fa-whatsapp"></i> الواتس آب</a><button onclick="generatePDF()" class="pdf-btn"><i class="fa-solid fa-file-pdf"></i> عرض PDF</button>`, 'bot-msg');
}

// --------------------------------------------------------------------------------------
// Google Sheets Database Engine  (CSV Parser + Dynamic Prompt)
// --------------------------------------------------------------------------------------
let dynamicProjects = [];
let SYSTEM_PROMPT = "";

function parseCSV(str) {
    const arr = []; let quote = false;
    for (let row = 0, col = 0, c = 0; c < str.length; c++) {
        let cc = str[c], nc = str[c+1];
        arr[row] = arr[row] || []; arr[row][col] = arr[row][col] || '';
        if (cc == '"' && quote && nc == '"') { arr[row][col] += cc; ++c; continue; }
        if (cc == '"') { quote = !quote; continue; }
        if (cc == ',' && !quote) { ++col; continue; }
        if (cc == '\r' && nc == '\n' && !quote) { ++row; col = 0; ++c; continue; }
        if (cc == '\n' && !quote) { ++row; col = 0; continue; }
        if (cc == '\r' && !quote) { ++row; col = 0; continue; }
        arr[row][col] += cc;
    }
    return arr;
}

function buildSystemPrompt() {
    let projectsKnowledge = dynamicProjects.map(p => `- اسم المشروع: ${p.name} | التفاصيل: ${p.type}، بأسعار تبدأ من ${p.price} | المواصفات: ${p.desc}`).join('\n');
    
    SYSTEM_PROMPT = `أنت مساعد ذكي ومبيعات عقاري لشركة "الحسبان للتطوير العقاري" (Hussban Invest).
تحدث باحترافية عن المشاريع العقارية التالية والتي تم جلبها مباشرة من قاعدة بياناتنا:
${projectsKnowledge}

اسأل عن (طريقة الدفع تقسيط ام كاش).
إذا استكملت البيانات، اطبع JSON فقط: { "name": "...", "phone_number": "...", "property_type": "...", "payment_method": "kash/tamwel", "score": "HOT" }`;
}

async function fetchProjectsDatabase() {
    try {
        const response = await fetch(DATABASE_URL);
        if(!response.ok) throw new Error("Bad Google Link");
        
        const csvText = await response.text();
        const rows = parseCSV(csvText);
        
        // مسح المصفوفة القديمة
        dynamicProjects = [];
        // نفترض أن الأعمدة: (الاسم, النوع, السعر, الوصف, رابط الخريطة)
        for(let i=1; i<rows.length; i++) {
            if(rows[i] && rows[i].length >= 3 && rows[i][0].trim() !== "") {
                 dynamicProjects.push({
                     name: rows[i][0],
                     type: rows[i][1],
                     price: rows[i][2],
                     desc: rows[i][3] || "",
                     map: rows[i][4] || ""
                 });
            }
        }
        buildSystemPrompt();
    } catch(e) {
        // Fallback الاحتياطي إن لم يتمكن من جلب الشيت أو كان الحقل الافتراضي
        dynamicProjects = [
            { name: "دابوق", type: "فلل فخمة 500م", price: "850,000 دينار", desc: "تشطيب حصري وراقي", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13538.52042145!2d35.8118012!3d31.9701018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca11aaef838b9%3A0x9bbd8b52eb4bff8!2sDabouq%2C%20Amman!5e0!3m2!1sen!2sjo!4v1700000000000" },
            { name: "فيكتوريا", type: "فلل مستقلة ومزارع", price: "260,000 دينار", desc: "طريق المطار", map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13554.498425121406!2d35.9149021!3d31.8624177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca79e4d588fa7%3A0x60f06bfefbf89be8!2sQueen%20Alia%20International%20Airport%20Road!5e0!3m2!1sen!2sjo!4v1700000000000" },
            { name: "المفرق", type: "فلل وشقق تجارية", price: "48,000 دينار", desc: "فرصة استثمارية كبيرة", map: "" }
        ];
        buildSystemPrompt();
    }
}

window.onload = async () => {
    updateJSON();
    voiceSynthesisBtn.classList.add('active'); 
    
    // سحب البيانات من Google Sheets قبل بدء الحديث
    await fetchProjectsDatabase();
    
    setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            const welcomeText = "أهلاً بك عزيزي في <strong>شركة الحسبان للتطوير العقاري</strong>، كيف يمكنني مساعدتك اليوم؟ لدينا مشاريع حديثة مميزة تم عرضها حالياً في النظام.";
            addMessage(welcomeText, 'bot-msg');
            speakText(welcomeText); 
            conversationHistory.push(`Agent: ${welcomeText}`);
        }, 1200);
    }, 600);
};

let seenManusMessageIds = new Set();

async function chatWithAI(userMessage) {
    if (!MANUS_API_KEY) {
        removeTypingIndicator();
        addMessage("⚠️ مرحباً، لا يمكنني الاتصال بالذكاء الاصطناعي حالياً.", 'bot-msg');
        return;
    }

    conversationHistory.push(`User: ${userMessage}`);
    currentLeadState.score = "WARM";
    updateJSON(currentLeadState);

    const promptContext = SYSTEM_PROMPT + "\n\n--- Conversation History ---\n" + conversationHistory.join('\n') + "\n\nAgent:";

    try {
        const createResponse = await fetch("https://api.manus.ai/v2/task.create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-manus-api-key": MANUS_API_KEY,
            },
            body: JSON.stringify({ message: { content: promptContext } }),
        });

        const taskData = await createResponse.json();
        const taskId = taskData.id || taskData.taskId || (taskData.data && taskData.data.taskId);

        if (!createResponse.ok || !taskId) {
            removeTypingIndicator();
            addMessage(`حدث خطأ أثناء الاتصال بالخوادم، تأكد من صحة الـ API`, 'bot-msg');
            return;
        }

        pollManusResponse(taskId);
    } catch (error) {
        removeTypingIndicator();
        addMessage("⚠️ عذراً، لا يمكنني الوصول للشبكة.", 'bot-msg');
    }
}

async function pollManusResponse(taskId) {
    let pollingTries = 0;
    const pollInterval = setInterval(async () => {
        pollingTries++;
        try {
            const listResponse = await fetch(`https://api.manus.ai/v2/task.listMessages?taskId=${taskId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", "x-manus-api-key": MANUS_API_KEY }
            });

            if (!listResponse.ok) return;

            const data = await listResponse.json();
            const messages = data.messages || (data.data && data.data.messages) || [];

            for (let msg of messages) {
                if (msg.role !== 'user' && !seenManusMessageIds.has(msg.id)) {
                    seenManusMessageIds.add(msg.id);
                    const aiText = msg.content || msg.message || "";
                    
                    if (aiText.includes("{") && aiText.includes("}")) {
                        try {
                            const match = aiText.match(/\{[\s\S]*?\}/);
                            if (match) {
                                const leadData = JSON.parse(match[0]);
                                if (leadData && leadData.name && leadData.phone_number) {
                                    removeTypingIndicator();
                                    updateJSON(leadData);
                                    sendToWhatsapp(leadData);
                                    clearInterval(pollInterval);
                                    return;
                                }
                            }
                        } catch (e) { }
                    }

                    if (aiText.trim().length > 0) {
                        removeTypingIndicator();
                        let formattedText = aiText.replace(/\n/g, '<br>');
                        
                        // حقن الخرائط ديناميكياً بناءً على البيانات من الجدول (Sheets)
                        let mapInjected = false;
                        dynamicProjects.forEach(proj => {
                            if (!mapInjected && proj.name && formattedText.includes(proj.name) && proj.map && proj.map.length > 5) {
                                formattedText += `<br><div class="map-embed"><iframe src="${proj.map}" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy"></iframe></div>`;
                                mapInjected = true;
                            }
                        });
                        
                        // حقن الآلة الحاسبة للقرض المباشر (بدون فوائد)
                        if (formattedText.includes("قسط") || formattedText.includes("أقساط") || formattedText.includes("تمويل")) {
                            formattedText += `<br><div class="mortgage-box"><h4>حاسبة التقسيط المباشر (0% فوائد)</h4><p>مرر لتحديد دفعتك المبدئية لمعرفة القسط المتوقع لمشروعك:</p>
                            <input type="range" min="20000" max="260000" step="5000" value="50000" class="mortgage-slider" oninput="updateMortgage(this.value)">
                            <br>الدفعة: <strong id="down-val">50,000</strong> دينار 
                            <div class="mortgage-result">القسط السنوي: <span id="installment-val">42,000</span> دينار (على 5 سنوات)</div></div>`;
                        }
                        
                        addMessage(formattedText, 'bot-msg');
                        speakText(formattedText); // النطق الآلي
                        conversationHistory.push(`Agent: ${aiText}`); 
                        
                        clearInterval(pollInterval);
                        return; 
                    }
                }
            }

            if (pollingTries >= 40) {
                clearInterval(pollInterval);
                removeTypingIndicator();
                addMessage("⚠️ استغرق وكيل الذكاء الاصطناعي وقتاً أطول من المعتاد. يرجى إعادة المحاولة.", 'bot-msg');
            }

        } catch (error) {
            console.error("Polling error:", error);
        }
    }, 3000); 
}

async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    addMessage(text, 'user-msg');
    userInput.value = '';
    
    showTypingIndicator();
    await chatWithAI(text);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
