import {Lang, t} from "../model/i18n";
import {LayoutDocs} from "../layout/layout-docs";
import {HeaderDocs} from "../layout/header-docs";
import {Footer} from "../layout/footer";
import {services} from "../model/services";

export const Index = ({lang}: { lang: Lang }) => {
    const tr = t(lang)
    
    const allApps = services.flatMap(s => s.apps.map(a => ({
        ...a,
        group: s.name
    })));

    return (
        <LayoutDocs title="Lifetime Soft - Documentation" lang={lang}>
            <HeaderDocs lang={lang}/>
            
            {/* Hero */}
            <section class="bg-gradient-to-br from-green-50 via-white to-emerald-50 border-b border-gray-100 py-16 px-4">
                <div class="max-w-3xl mx-auto text-center">
                    <div class="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-medium rounded-full px-3 py-1 mb-4">
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                        {tr.heroBadge}
                    </div>
                    <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">{tr.heroTitle}</h1>
                    <p class="mt-4 text-base text-gray-500 max-w-xl mx-auto">
                        {tr.heroDesc}
                    </p>
                </div>
            </section>

            {/* Featured Services */}
            <section class="max-w-7xl mx-auto px-4 py-12">
                <h2 class="text-xl font-semibold text-gray-800 mb-1">{tr.featuredTitle}</h2>
                <p class="text-sm text-gray-400 mb-6">{tr.featuredDesc}</p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allApps.map(app => (
                        <a href={`${app.url}?lang=${lang}`} class="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all">
                            <div class="flex items-start justify-between gap-2">
                                <div class="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">{app.name[lang]}</div>
                                <span class="shrink-0 text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5">{app.group}</span>
                            </div>
                            <div class="mt-1.5 text-sm text-gray-500">{app.desc[lang]}</div>
                            <div class="mt-3 text-xs text-green-600 font-medium flex items-center gap-1">
                                {tr.readDocs}
                                <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                    <path d="m9 18 6-6-6-6"/>
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* All Services */}
            <section class="max-w-7xl mx-auto px-4 pb-16" x-data="searchHandler">
                <div class="border-t border-gray-100 pt-10">
                    <h2 class="text-xl font-semibold text-gray-800 mb-1">{tr.allServicesTitle}</h2>
                    <p class="text-sm text-gray-400 mb-6">{tr.allServicesDesc}</p>
                </div>

                <div class="flex flex-col sm:flex-row gap-4">
                    {/* Sidebar filter */}
                    <div class="sm:w-48 shrink-0">
                        <div class="bg-white border border-gray-200 rounded-xl overflow-hidden">
                            <div class="px-4 py-3 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">{tr.categoryLabel}</div>
                            <div class="p-2">
                                <button class="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                                    x-bind:class="serviceActiveIndex === -1 ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50'"
                                    data-index="-1"
                                    x-on:click="handleCategoryClick($event)">
                                    {tr.allLabel} ({allApps.length})
                                </button>
                                {services.map((service, index) => (
                                    <button class="w-full text-left px-3 py-2 rounded-lg text-sm transition-colors"
                                        x-bind:class={`serviceActiveIndex === ${index} ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-600 hover:bg-gray-50'`}
                                        data-index={String(index)}
                                        x-on:click="handleCategoryClick($event)">
                                        {service.name} ({service.apps.length})
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div class="flex-1 min-w-0">
                        {/* Mobile category select */}
                        <div class="sm:hidden mb-3">
                            <select class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-green-400"
                                x-on:change="handleSelect($event)">
                                <option value="-1">{tr.allLabel} ({allApps.length})</option>
                                {services.map((service, index) => (
                                    <option value={index}>{service.name} ({service.apps.length})</option>
                                ))}
                            </select>
                        </div>

                        {/* Search */}
                        <div class="relative mb-4">
                            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                            </svg>
                            <input type="text" placeholder={tr.searchPlaceholder}
                                class="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100"
                                x-model="filter"/>
                        </div>

                        {/* Cards */}
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <template x-for="(app, index) in serviceApp.filter(a => !filter || a.name.toLowerCase().includes(filter.toLowerCase()) || a.desc.toLowerCase().includes(filter.toLowerCase()))">
                                <a class="group block bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-md transition-all"
                                   x-bind:href={`app.url + '?lang=${lang}'`}>
                                    <div class="flex items-start justify-between gap-2">
                                        <div class="font-medium text-gray-900 group-hover:text-green-700 transition-colors text-sm" x-text="app.name"></div>
                                        <span class="shrink-0 text-xs bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5" x-text="app.group"></span>
                                    </div>
                                    <div class="mt-1 text-xs text-gray-500" x-text="app.desc"></div>
                                </a>
                            </template>
                        </div>
                    </div>
                </div>
            </section>

            <script dangerouslySetInnerHTML={{__html: `
                const servicesData = ${JSON.stringify(services)};
                function searchHandler() {
                    const allApps = servicesData.flatMap(s => s.apps.map(a => ({
                        name: a.name['${lang}'],
                        desc: a.desc['${lang}'],
                        url: a.url,
                        group: s.name
                    })));
                    
                    return {
                        services: servicesData,
                        filter: '',
                        serviceActiveIndex: -1,
                        serviceApp: allApps,
                        allApps: allApps,
                        handleCategoryClick(event) {
                            const index = parseInt(event.currentTarget.dataset.index);
                            if (index === -1) {
                                this.serviceApp = this.allApps;
                            } else {
                                const s = servicesData[index];
                                this.serviceApp = s.apps.map(a => ({
                                    name: a.name['${lang}'],
                                    desc: a.desc['${lang}'],
                                    url: a.url,
                                    group: s.name
                                }));
                            }
                            this.serviceActiveIndex = index;
                            this.filter = '';
                        },
                        handleSelect(event) {
                            const index = parseInt(event.target.value);
                            if (index === -1) {
                                this.serviceApp = this.allApps;
                            } else {
                                const s = servicesData[index];
                                this.serviceApp = s.apps.map(a => ({
                                    name: a.name['${lang}'],
                                    desc: a.desc['${lang}'],
                                    url: a.url,
                                    group: s.name
                                }));
                            }
                            this.serviceActiveIndex = index;
                            this.filter = '';
                        }
                    };
                }
            `}}/>

            <Footer lang={lang}/>
        </LayoutDocs>
    )
}
