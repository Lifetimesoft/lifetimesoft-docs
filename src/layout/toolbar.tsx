type BreadcrumbItem = { label: string, href?: string }

const MenuIcon = () => (
    <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
        <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
    </svg>
)

export const Toolbar = ({breadcrumbs}: { breadcrumbs: BreadcrumbItem[] }) => (
    <div class="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center gap-3">
        <button id="toggleBtn" class="hidden lg:flex items-center justify-center w-7 h-7 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer" title="Toggle sidebar">
            <MenuIcon/>
        </button>
        <button id="openSidebar" class="lg:hidden flex items-center justify-center w-7 h-7 rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer">
            <MenuIcon/>
        </button>
        <nav class="flex items-center gap-1.5 text-sm text-gray-500">
            {breadcrumbs.map((item, i) => (
                <>
                    {i > 0 && (
                        <svg class="w-3.5 h-3.5 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="m9 18 6-6-6-6"/>
                        </svg>
                    )}
                    {item.href
                        ? <a href={item.href} class="hover:text-green-600 transition-colors">{item.label}</a>
                        : <span class="font-medium text-gray-800">{item.label}</span>
                    }
                </>
            ))}
        </nav>
    </div>
)
