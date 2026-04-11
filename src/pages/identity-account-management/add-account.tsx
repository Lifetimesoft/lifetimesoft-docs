import {Lang, t} from "../../model/i18n";
import {LayoutDocs} from "../../layout/layout-docs";
import {HeaderDocs} from "../../layout/header-docs";
import {Sidebar} from "../../layout/sidebar";
import {Toolbar} from "../../layout/toolbar";
import {CONST} from "../../model/const";

const menu = [
    {text: 'Add Identity Account', link: 'add-account'}
]

export const AddIdentityAccount = ({lang}: { lang: Lang }) => {
    const staticPath = CONST.STATIC_PATH
    return (
        <LayoutDocs title="Add Identity Account - Identity Account Management - LifetimeSoft" lang={lang}>
            <HeaderDocs lang={lang}/>
            <div class="flex flex-row flex-grow overflow-hidden">
                <Sidebar mainText="Identity Account Management" mainLink="/identity-account-management" menu={menu} lang={lang}/>
                <div class="flex flex-col flex-grow min-w-0">
                    <Toolbar breadcrumbs={[
                        {label: 'Identity Account Management', href: `/identity-account-management?lang=${lang}`},
                        {label: 'Add Identity Account'}
                    ]}/>
                    <div class="flex-grow overflow-y-auto w-full">
                        <div class="w-full px-10 py-10 pb-16">
                        <h1 class="text-2xl font-bold text-gray-900 mb-2">
                            {lang === 'th' ? 'เพิ่ม Identity Account' : 'Add Identity Account'}
                        </h1>
                        <p class="text-gray-500 mb-8">
                            {lang === 'th'
                                ? 'วิธีการเพิ่ม Identity Account เช่น เบอร์โทรศัพท์ หรือ E-mail เข้าสู่ระบบ'
                                : 'How to add an Identity Account such as a phone number or email to the system.'}
                        </p>

                        <div class="flex flex-col gap-8">
                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">1</div>
                                    <div class="w-px flex-grow bg-gray-200 mt-2"></div>
                                </div>
                                <div class="pb-4 flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'กดปุ่ม เพิ่ม ในส่วนของ Identity Account' : 'Click the Add button in the Identity Account section'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/watch-add-btn.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="add-btn"/>
                                </div>
                            </div>

                            <div class="flex gap-4">
                                <div class="flex flex-col items-center">
                                    <div class="w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex items-center justify-center shrink-0">2</div>
                                </div>
                                <div class="flex-1">
                                    <div class="font-medium text-gray-800 mb-3">
                                        {lang === 'th' ? 'เลือก Type แล้วใส่ข้อมูลตาม type จากนั้นกด Add Data' : 'Select the Type, fill in the data accordingly, then click Add Data'}
                                    </div>
                                    <img src={`${staticPath}/docs/img/add-identity-account.png`} class="rounded-xl border border-gray-200 shadow-sm max-w-full" alt="add-identity-account"/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutDocs>
    )
}
