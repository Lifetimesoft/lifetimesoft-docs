export type Lang = 'en' | 'th'

export const translations = {
    en: {
        // Header
        navLang: 'ภาษาไทย',
        navLangCode: 'th',
        launchApp: 'Launch the App',

        // Home
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

        // Footer
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
        // Header
        navLang: 'English',
        navLangCode: 'en',
        launchApp: 'เข้าใช้งาน',

        // Home
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

        // Footer
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

export function getLang(query: string | undefined, acceptLang: string | undefined): Lang {
    if (query === 'th' || query === 'en') return query
    if (acceptLang?.startsWith('th')) return 'th'
    return 'th' // Default to Thai
}

export function t(lang: Lang) {
    return translations[lang]
}
