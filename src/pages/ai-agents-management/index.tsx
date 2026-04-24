import { DocPage } from '../../layout/doc-page'
import { getContent } from '../../lib/content'
import { Lang } from '../../model/i18n'

export default function AIAgentsManagementPage(props?: any) {
    const lang: Lang = props?.lang || 'en'
    const html = getContent('ai-agents-management/overview', lang)
    
    const menu = [
        { text: 'Overview', link: 'overview' },
        { text: 'Cron Expression Format', link: 'cron-expression-format' },
        { text: 'Troubleshooting', link: 'troubleshooting' },
        { text: 'Best Practices', link: 'best-practices' },
    ]
    
    return (
        <DocPage
            title="AI Agents Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="AI Agents Management"
            mainLink="/ai-agents-management"
            menu={menu}
            breadcrumbs={[{ label: 'AI Agents Management' }]}
        />
    )
}
