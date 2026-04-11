import {Lang, t} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";
import {CONST} from "../../model/const";

const menu = [
    {text: 'Add Watch Account', link: 'add-watch'}
]

export const AddWatchAccount = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    const staticPath = CONST.STATIC_PATH
    return (
        <LayoutDocs title="Add Watch Account - Social Account Management - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Social Account Management" mainLink="/social-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[
                        {label: 'Social Account Management', href: `/social-account-management?lang=${lang}`},
                        {label: 'Add Watch Account'}
                    ]}/>
                    <div class="flex-grow overflow-y-auto w-full">
                        <div class="w-full px-10 py-10 pb-16">
                        <h1 class="text-2xl font-bold text-gray-900 mb-2">
                            {lang === 'th' ? 'เพิ่ม Watch Account' : 'Add Watch Account'}
                        </h1>
                        <p class="text-gray-500 mb-8">
                            {lang === 'th'
                                ? 'วิธีการเพิ่ม Watch Account เพื่อทำการดูและติดตาม Social Account ต่าง ๆ ที่ต้องการ'
                                : 'How to add a Watch Account to monitor and track Social Accounts.'}
                        </p>

                        <div class="flex flex-col gap-8">
                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                                    <div class="w-px flex-grow bg-gray-200 mt-2"></div>
                                </div>
                                <div class="pb-4 flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'กดปุ่ม เพิ่ม ในส่วนของ Watch Account' : 'Click the Add button in the Watch Account section'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/watch-add-btn.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="watch-add-btn"/>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                                    <div class="w-px flex-grow bg-gray-200 mt-2"></div>
                                </div>
                                <div class="pb-4 flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'เลือก Platform แล้วใส่ ID จากนั้นกด Fetch Data' : 'Select a Platform, enter the ID, then click Fetch Data'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/add-social-account.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="add-social-account"/>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</div>
                                    <div class="w-px flex-grow bg-gray-200 mt-2"></div>
                                </div>
                                <div class="pb-4 flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'ระบบจะ Fetch ข้อมูลและแสดงตัวอย่าง เมื่อยืนยันแล้วกด Import Channel Data' : 'The system will fetch and preview the data. Confirm and click Import Channel Data'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/add-social-account-import.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="add-social-account-import"/>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">4</div>
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'ระบบจะแสดง list account ทั้งหมดที่ import เข้ามา' : 'The system will display all imported accounts'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/watch-account-list.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="watch-account-list"/>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-start gap-3">
                            <svg class="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            <div>
                                <div class="text-sm font-medium text-gray-700 mb-1">{lang === 'th' ? 'วิดีโอสาธิต' : 'Demo Video'}</div>
                                <a href="https://www.youtube.com/watch?v=pysQQhcwbcQ&ab_channel=LifeTimeSoft" target="_blank"
                                   class="text-sm text-green-600 hover:text-green-700 hover:underline break-all">
                                    https://www.youtube.com/watch?v=pysQQhcwbcQ
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDocs>
    )
}
