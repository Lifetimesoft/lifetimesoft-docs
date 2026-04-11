// Language detection and switching
const translations = {
    en: {
        navLang: 'ภาษาไทย',
        navLangCode: 'th',
        launchApp: 'Launch the App',
        heroTitle: 'Lifetime Soft Docs',
        heroDesc: 'Official documentation, setup guides, and reference materials for all Lifetime Soft services',
        heroBadge: 'Official Documentation',
        featuredTitle: 'Featured Guides',
        featuredDesc: 'Popular documentation frequently accessed',
        allServicesTitle: 'All Services',
        allServicesDesc: 'Search documentation by service',
        categoryLabel: 'Category',
        allLabel: 'All',
        searchPlaceholder: 'Search documentation...',
        readDocs: 'Read docs',
        followUs: 'Follow Us',
        lifetimeSoft: 'Lifetime Soft',
        contact: 'Contact',
        footerTagline: 'Documentation and reference guides for all Lifetime Soft services',
        footerCopyright: 'Lifetime Soft ©',
        footerMade: '— Made with ♥ for the Lifetime Soft Vision',
        website: 'Website',
        privacyPolicy: 'Privacy Policy',
    },
    th: {
        navLang: 'English',
        navLangCode: 'en',
        launchApp: 'เข้าใช้งาน',
        heroTitle: 'เอกสาร Lifetime Soft',
        heroDesc: 'เอกสารการใช้งาน วิธีการตั้งค่า และคู่มืออ้างอิงสำหรับทุก service ของ Lifetime Soft',
        heroBadge: 'เอกสารอย่างเป็นทางการ',
        featuredTitle: 'คู่มือแนะนำ',
        featuredDesc: 'เอกสารยอดนิยมที่ใช้บ่อย',
        allServicesTitle: 'บริการทั้งหมด',
        allServicesDesc: 'ค้นหาเอกสารตาม service ที่ต้องการ',
        categoryLabel: 'หมวดหมู่',
        allLabel: 'ทั้งหมด',
        searchPlaceholder: 'ค้นหาเอกสาร...',
        readDocs: 'อ่านเอกสาร',
        followUs: 'ติดตามเรา',
        lifetimeSoft: 'Lifetime Soft',
        contact: 'ติดต่อ',
        footerTagline: 'เอกสารการใช้งานและคู่มืออ้างอิงสำหรับทุก service ของ Lifetime Soft',
        footerCopyright: 'Lifetime Soft ©',
        footerMade: '— สร้างด้วย ♥ เพื่อวิสัยทัศน์ของ Lifetime Soft',
        website: 'เว็บไซต์',
        privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    }
};

const services = {
    en: [
        { name: 'Social Account Management', desc: 'Manage, add, and delete social media accounts', url: '/social-account-management', group: 'Social' },
        { name: 'Identity Account Management', desc: 'Manage, add, and delete phone numbers and emails', url: '/identity-account-management', group: 'Identity' }
    ],
    th: [
        { name: 'Social Account Management', desc: 'จัดการ เพิ่ม ลบ แอคเคาท์ social media', url: '/social-account-management', group: 'Social' },
        { name: 'Identity Account Management', desc: 'จัดการ เพิ่ม ลบ เบอร์โทร E-mail', url: '/identity-account-management', group: 'Identity' }
    ]
};

function getLang() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang');
    if (lang === 'en' || lang === 'th') return lang;
    return 'th'; // Default
}

function applyTranslations(lang) {
    const tr = translations[lang];
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (tr[key]) {
            if (el.tagName === 'INPUT') {
                el.placeholder = tr[key];
            } else {
                el.textContent = tr[key];
            }
        }
    });
    
    // Update lang switcher
    document.querySelectorAll('[data-lang-switch]').forEach(el => {
        el.textContent = tr.navLang;
        el.href = `?lang=${tr.navLangCode}`;
    });
    
    // Update service cards if on home page
    if (window.updateServiceCards) {
        window.updateServiceCards(lang);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const lang = getLang();
    applyTranslations(lang);
});

// Export for use in other scripts
window.getLang = getLang;
window.translations = translations;
window.servicesData = services;
