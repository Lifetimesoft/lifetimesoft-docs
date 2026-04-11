import {Lang, t} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";

const menu = [
    {text: 'Add Identity Account', link: 'add-account'}
]

export const IdentityAccountManagement = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    return (
        <LayoutDocs title="Identity Account Management Documentation - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Identity Account Management" mainLink="/identity-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[{label: 'Identity Account Management'}]}/>
                    <div class="flex-grow overflow-y-auto w-full">
                        <div class="w-full px-10 py-10 pb-16">
                        <h1 class="text-2xl font-bold text-gray-900 mb-2">Identity Account Management</h1>
                        <p class="text-gray-500 mb-8">
                            {lang === 'th'
                                ? 'Identity Account Management เป็น Service จัดการ Identity Account สามารถเพิ่ม ลบ แก้ไข Identity ที่ต้องการได้ เช่น เบอร์โทรศัพท์ อีเมล'
                                : 'Identity Account Management is a service for managing Identity Accounts. You can add, delete, and edit identities such as phone numbers and emails.'}
                        </p>

                        <div class="bg-green-50 border border-green-200 rounded-xl p-5 mb-8">
                            <div class="text-sm font-semibold text-green-800 mb-3">{lang === 'th' ? 'Identity Type ที่รองรับ' : 'Supported Identity Types'}</div>
                            <div class="flex flex-wrap gap-2">
                                <span class="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-700 text-sm rounded-lg px-3 py-1.5">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                        <polyline points="22,6 12,13 2,6"/>
                                    </svg>
                                    E-mail
                                </span>
                                <span class="inline-flex items-center gap-1.5 bg-white border border-green-200 text-green-700 text-sm rounded-lg px-3 py-1.5">
                                    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                    Telephone
                                </span>
                            </div>
                        </div>

                        <div class="text-sm font-semibold text-gray-700 mb-3">{lang === 'th' ? 'คู่มือการใช้งาน' : 'Guides'}</div>
                        <div class="flex flex-col gap-2">
                            <a href={`/identity-account-management/add-account?lang=${lang}`}
                               class="group flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-green-400 hover:shadow-sm transition-all">
                                <div>
                                    <div class="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">Add Identity Account</div>
                                    <div class="text-xs text-gray-400 mt-0.5">
                                        {lang === 'th' ? 'วิธีการเพิ่ม Identity Account เช่น เบอร์โทร หรือ E-mail' : 'How to add an Identity Account such as phone number or email'}
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
