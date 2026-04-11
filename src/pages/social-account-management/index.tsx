import {Lang, t} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";
import {CONST} from "../../model/const";

const menu = [
    {text: 'Add Watch Account', link: 'add-watch'}
]

export const SocialAccountManagement = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <LayoutDocs title="Social Account Management Documentation - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Social Account Management" mainLink="/social-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[{label: 'Social Account Management'}]}/>
                    <div class="flex-grow overflow-y-auto w-full">
                        <div class="w-full px-10 py-10 pb-16">
                        <h1 class="text-2xl font-bold text-gray-900 mb-2">Social Account Management</h1>
                        <p class="text-gray-500 mb-8">
                            {lang === 'th'
                                ? 'Social Account Management เป็น Service จัดการ Social Media Account ที่ต้องการ สามารถเพิ่ม ลบ แก้ไข Account ที่ต้องการได้'
                                : 'Social Account Management is a service for managing Social Media Accounts. You can add, delete, and edit accounts as needed.'}
                        </p>

                        <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                            <div class="text-sm font-semibold text-green-800 mb-3">{lang === 'th' ? 'Platform ที่รองรับ' : 'Supported Platforms'}</div>
                            <div class="flex flex-wrap gap-2">
                                <span class="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-700 text-sm rounded-lg px-3 py-1.5">
                                    <svg class="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                    </svg>
                                    YouTube
                                </span>
                                <span class="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-700 text-sm rounded-lg px-3 py-1.5">
                                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                                    </svg>
                                    TikTok
                                </span>
                            </div>
                        </div>

                        <div class="text-sm font-semibold text-gray-700 mb-3">{lang === 'th' ? 'คู่มือการใช้งาน' : 'Guides'}</div>
                        <div class="flex flex-col gap-2">
                            <a href={`/social-account-management/add-watch?lang=${lang}`}
                               class="group flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-green-400 hover:shadow-sm transition-all">
                                <div>
                                    <div class="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">Add Watch Account</div>
                                    <div class="text-xs text-gray-400 mt-0.5">
                                        {lang === 'th' ? 'วิธีการเพิ่ม Watch Account เพื่อติดตาม Social Account' : 'How to add a Watch Account to monitor Social Accounts'}
                                    </div>
                                </div>
                                <svg class="w-4 h-4 text-gray-300 group-hover:text-green-500 group-hover:translate-x-0.5 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDocs>
    )
}
