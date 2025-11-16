// Simple i18n (EN/AR) + RTL toggle
const dict = {
  en: {
    nav_features: "Features",
    nav_how: "How it works",
    nav_team: "Team",
    nav_try: "Try Live App",
    badge_bilingual: "Bilingual (AR/EN)",
    hero_title: "Split expenses with friends — fast, clear, and fair.",
    hero_lead: "Qattah helps groups track shared expenses, see who owes what, and settle up in seconds.",
    cta_primary: "Open Qattah",
    cta_secondary: "See the demo",
    features_title: "Why Qattah?",
    feat1_title: "Create groups & add expenses",
    feat1_desc: "Invite friends, add shared costs, attach receipts, and track balances.",
    feat2_title: "Auto settlement",
    feat2_desc: "Qattah calculates who should pay whom, minimizing the number of transactions.",
    feat3_title: "Fast & secure",
    feat3_desc: "Supabase backend with secure storage and deployment on Railway for high availability.",
    metrics_title: "MVP Metrics",
    m1: "Avg API response",
    m2: "Uptime (Railway)",
    m3: "Feature completion",
    m4: "User satisfaction",
    how_title: "How it works",
    how_1: "Create a group for your trip or event.",
    how_2: "Add expenses and assign who participated.",
    how_3: "View balances and settle up in one tap.",
    demo_title: "Screens & Demo",
    team_title: "Team",
    t1_name: "Ibrahim",
    t1_role: "Project Manager",
    t2_name: "Khaled",
    t2_role: "Frontend & Documentation Lead",
    t3_name: "Fahad",
    t3_role: "Backend/DB Lead & Tester",
    faq_title: "FAQ",
    faq_1_q: "Is Qattah free?",
    faq_1_a: "Yes, the MVP is free for testing during the project period.",
    faq_2_q: "Does it support Arabic?",
    faq_2_a: "Yes. Toggle AR/EN using the “AR / EN” button in the header.",
    faq_3_q: "Where is data stored?",
    faq_3_a: "Data is stored securely in Supabase with public file URLs for avatars."
  },
  ar: {
    nav_features: "الميزات",
    nav_how: "كيف تعمل",
    nav_team: "الفريق",
    nav_try: "جرّب التطبيق",
    badge_bilingual: "ثنائي اللغة (عربي/إنجليزي)",
    hero_title: "قسّم المصاريف مع أصدقائك — بسرعة ووضوح وعدالة.",
    hero_lead: "قطّة تساعد المجموعات على تتبّع المصاريف المشتركة ومعرفة المستحقات وإغلاق الحساب بسهولة.",
    cta_primary: "افتح تطبيق قطّة",
    cta_secondary: "شاهد العرض",
    features_title: "لماذا قطّة؟",
    feat1_title: "إنشاء مجموعات وإضافة مصاريف",
    feat1_desc: "ادعُ أصدقاءك، أضِف التكاليف المشتركة، أرفق الإيصالات، وتابع الأرصدة.",
    feat2_title: "تصفية تلقائية للمدفوعات",
    feat2_desc: "قطّة يحسب من يدفع لمن مع تقليل عدد التحويلات المطلوبة.",
    feat3_title: "سريع وآمن",
    feat3_desc: "خادم Supabase مع تخزين آمن ونشر على Railway لتوافرٍ عالٍ.",
    metrics_title: "مؤشرات الـMVP",
    m1: "متوسط زمن استجابة الـAPI",
    m2: "التوافر (Railway)",
    m3: "نسبة إكمال الميزات",
    m4: "رضا المستخدمين",
    how_title: "كيف تعمل",
    how_1: "أنشئ مجموعة لرحلتك أو فعاليتك.",
    how_2: "أضِف المصاريف وحدّد المشاركين.",
    how_3: "اعرض الأرصدة وسدّد بضغطة واحدة.",
    demo_title: "الواجهات والعرض",
    team_title: "الفريق",
    t1_name: "إبراهيم",
    t1_role: "قائد المشروع",
    t2_name: "خالد",
    t2_role: "قائد الواجهة والتوثيق",
    t3_name: "فهد",
    t3_role: "قائد الخلفية وقاعدة البيانات والمختبر",
    faq_title: "الأسئلة الشائعة",
    faq_1_q: "هل قطّة مجاني؟",
    faq_1_a: "نعم، النسخة التجريبية مجانية خلال فترة المشروع.",
    faq_2_q: "هل يدعم العربية؟",
    faq_2_a: "نعم. بدّل بين العربية والإنجليزية بزر “AR / EN” في الأعلى.",
    faq_3_q: "أين تُخزَّن البيانات؟",
    faq_3_a: "تُخزَّن البيانات بأمان في Supabase مع روابط عامة للصور الرمزية."
  }
};

const els = document.querySelectorAll("[data-i18n]");
const langToggle = document.getElementById("langToggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

let current = localStorage.getItem("q_lang") || "en";
applyLang(current);

langToggle.addEventListener("click", () => {
  current = current === "en" ? "ar" : "en";
  localStorage.setItem("q_lang", current);
  applyLang(current);
});

function applyLang(l){
  const d = dict[l];
  els.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if(d[key]) el.textContent = d[key];
  });
  document.documentElement.setAttribute("lang", l === "ar" ? "ar" : "en");
  document.documentElement.setAttribute("dir", l === "ar" ? "rtl" : "ltr");
}
