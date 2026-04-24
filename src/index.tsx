import {Hono} from 'hono'
import {getLang} from "./model/i18n";
import {Index} from "./pages";
import {SocialAccountManagement} from "./pages/social-account-management";
import {AddWatchAccount} from "./pages/social-account-management/add-watch";
import {BindSocialAndIdentity} from "./pages/social-account-management/bind-social-and-identity";
import {IdentityAccountManagement} from "./pages/identity-account-management";
import {AddIdentityAccount} from "./pages/identity-account-management/add-account";
import AIAgentsManagementPage from "./pages/ai-agents-management";
import CronExpressionFormatPage from "./pages/ai-agents-management/cron-expression-format";
import TroubleshootingPage from "./pages/ai-agents-management/troubleshooting";
import BestPracticesPage from "./pages/ai-agents-management/best-practices";
import AIAccountManagementPage from "./pages/ai-account-management";
import {AddAIAccount} from "./pages/ai-account-management/add-account";

const app = new Hono()

app.get('/', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<Index lang={lang}/>)
})

app.get('/social-account-management', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<SocialAccountManagement lang={lang}/>)
})

app.get('/social-account-management/add-watch', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AddWatchAccount lang={lang}/>)
})

app.get('/social-account-management/bind-social-and-identity', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<BindSocialAndIdentity lang={lang}/>)
})

app.get('/identity-account-management', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<IdentityAccountManagement lang={lang}/>)
})

app.get('/identity-account-management/add-account', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AddIdentityAccount lang={lang}/>)
})

app.get('/ai-account-management', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AIAccountManagementPage lang={lang}/>)
})

app.get('/ai-account-management/add-account', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AddAIAccount lang={lang}/>)
})

app.get('/ai-agents-management', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AIAgentsManagementPage lang={lang}/>)
})

app.get('/ai-agents-management/overview', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<AIAgentsManagementPage lang={lang}/>)
})

app.get('/ai-agents-management/cron-expression-format', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<CronExpressionFormatPage lang={lang}/>)
})

app.get('/ai-agents-management/troubleshooting', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<TroubleshootingPage lang={lang}/>)
})

app.get('/ai-agents-management/best-practices', (c) => {
    const lang = getLang(c.req.query('lang'), c.req.header('Accept-Language'))
    return c.html(<BestPracticesPage lang={lang}/>)
})

app.get('/robots.txt', (c) => {
    return c.text('User-agent: *\nAllow: /\nSitemap: https://docs.lifetimesoft.com/sitemap.xml')
})

app.get('/sitemap.xml', (c) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://docs.lifetimesoft.com/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://docs.lifetimesoft.com/social-account-management</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://docs.lifetimesoft.com/social-account-management/add-watch</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/social-account-management/bind-social-and-identity</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/identity-account-management</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://docs.lifetimesoft.com/identity-account-management/add-account</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-account-management</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-account-management/add-account</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-agents-management</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-agents-management/overview</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-agents-management/cron-expression-format</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-agents-management/troubleshooting</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://docs.lifetimesoft.com/ai-agents-management/best-practices</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>`
    return c.body(xml, 200, {'Content-Type': 'application/xml'})
})

export default app
