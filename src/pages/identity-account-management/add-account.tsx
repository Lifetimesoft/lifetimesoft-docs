import {Lang} from "../../model/i18n";
import {DocPage} from "../../layout/doc-page";
import {getContent} from "../../lib/content";

const menu = [
    {text: 'Add Identity Account', link: 'add-account'},
]

export const AddIdentityAccount = ({lang}: { lang: Lang }) => {
    const html = getContent('identity-account-management/add-account', lang);
    return (
        <DocPage
            title="Add Identity Account — Identity Account Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="Identity Account Management"
            mainLink="/identity-account-management"
            menu={menu}
            breadcrumbs={[
                {label: 'Identity Account Management', href: `/identity-account-management?lang=${lang}`},
                {label: 'Add Identity Account'},
            ]}
        />
    )
}
