import type { Lang } from '../model/i18n';
import { renderMarkdown } from './markdown';

// Import all markdown files at build time (esbuild bundles these as strings)
import socialIndexTh from '../content/social-account-management/index.th.md';
import socialIndexEn from '../content/social-account-management/index.en.md';
import socialAddWatchTh from '../content/social-account-management/add-watch.th.md';
import socialAddWatchEn from '../content/social-account-management/add-watch.en.md';
import socialBindTh from '../content/social-account-management/bind-social-and-identity.th.md';
import socialBindEn from '../content/social-account-management/bind-social-and-identity.en.md';
import identityIndexTh from '../content/identity-account-management/index.th.md';
import identityIndexEn from '../content/identity-account-management/index.en.md';
import identityAddAccountTh from '../content/identity-account-management/add-account.th.md';
import identityAddAccountEn from '../content/identity-account-management/add-account.en.md';

const contents: Record<string, Record<Lang, string>> = {
    'social-account-management/index': { th: socialIndexTh, en: socialIndexEn },
    'social-account-management/add-watch': { th: socialAddWatchTh, en: socialAddWatchEn },
    'social-account-management/bind-social-and-identity': { th: socialBindTh, en: socialBindEn },
    'identity-account-management/index': { th: identityIndexTh, en: identityIndexEn },
    'identity-account-management/add-account': { th: identityAddAccountTh, en: identityAddAccountEn },
};

export function getContent(key: string, lang: Lang): string {
    const content = contents[key]?.[lang] ?? contents[key]?.['th'] ?? '';
    return renderMarkdown(content);
}
