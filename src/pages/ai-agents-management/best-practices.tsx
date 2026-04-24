import { DocPage } from '../../layout/doc-page'
import { getContent } from '../../lib/content'
import { Lang } from '../../model/i18n'

export default function BestPracticesPage(props?: any) {
    const lang: Lang = props?.lang || 'en'
    const html = getContent('ai-agents-management/best-practices', lang)
    
    const menu = [
        { text: 'Overview', link: 'overview' },
        { text: 'Cron Expression Format', link: 'cron-expression-format' },
        { text: 'Troubleshooting', link: 'troubleshooting' },
        { text: 'Best Practices', link: 'best-practices' },
    ]
    
    return (
        <DocPage
            title="Best Practices — AI Agents Management — LifetimeSoft Docs"
            lang={lang}
            html={html}
            mainText="AI Agents Management"
            mainLink="/ai-agents-management"
            menu={menu}
            breadcrumbs={[
                { label: 'AI Agents Management', link: '/ai-agents-management' },
                { label: 'Best Practices' }
            ]}
        />
    )
}