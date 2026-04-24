import {Lang} from "../../model/i18n";
import {DocPage} from "../../layout/doc-page";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Account', link: 'add-account'},
]

export const AIAccountManagement = ({lang}: { lang: Lang }) => {
    const html = getContent('ai-account-management/index', lang);
    return (
        <DocPage
            title="AI Account Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="AI Account Management"
            mainLink="/ai-account-management"
            menu={menu}
            breadcrumbs={[
                {label: 'AI Account Management'},
            ]}
        />
    )
}

export default AIAccountManagement;
