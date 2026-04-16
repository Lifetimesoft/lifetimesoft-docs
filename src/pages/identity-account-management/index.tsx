import {Lang} from "../../model/i18n";
import {DocPage} from "../../layout/doc-page";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Identity Account', link: 'add-account'},
]

export const IdentityAccountManagement = ({lang}: { lang: Lang }) => {
    const html = getContent('identity-account-management/index', lang);
    return (
        <DocPage
            title="Identity Account Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="Identity Account Management"
            mainLink="/identity-account-management"
            menu={menu}
            breadcrumbs={[{label: 'Identity Account Management'}]}
        />
    )
}
