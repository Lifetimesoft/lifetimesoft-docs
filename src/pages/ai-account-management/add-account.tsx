import {Lang} from "../../model/i18n";
import {DocPage} from "../../layout/doc-page";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Account', link: 'add-account'},
]

export const AddAIAccount = ({lang}: { lang: Lang }) => {
    const html = getContent('ai-account-management/add-account', lang);
    return (
        <DocPage
            title="Add AI Account — AI Account Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="AI Account Management"
            mainLink="/ai-account-management"
            menu={menu}
            breadcrumbs={[
                {label: 'AI Account Management', href: `/ai-account-management?lang=${lang}`},
                {label: 'Add AI Account'},
            ]}
        />
    )
}
