document.addEventListener("DOMContentLoaded", function () {
    const navContainer = document.getElementById("bottom-nav-container");
    if (!navContainer) return;

    // Mendeteksi halaman yang sedang dibuka untuk penanda aktif
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    const navItems = [
        { name: "Beranda", icon: "fa-house", href: "index.html" },
        { name: "Profil", icon: "fa-user-tie", href: "about.html" },
        { name: "FAQ", icon: "fa-question-circle", href: "faq.html" },
        { name: "Konsultasi", icon: "fa-comments", href: "https://wa.me/62816526757", external: true }
    ];

    let navHTML = `<nav class="bottom-nav px-4 py-2.5 shadow-lg"><ul class="grid grid-cols-4 gap-1 text-center">`;

    navItems.forEach(item => {
        const isActive = currentPath === item.href;
        const activeClass = isActive 
            ? "text-amber-600 font-bold" 
            : "text-slate-400 hover:text-slate-700 font-medium";
        const targetAttr = item.external ? 'target="_blank" rel="noopener noreferrer"' : '';

        navHTML += `
            <li>
                <a href="${item.href}" ${targetAttr} class="flex flex-col items-center justify-center py-1 transition ${activeClass}">
                    <i class="fa-solid ${item.icon} text-base mb-1"></i>
                    <span class="text-[10px] tracking-tight">${item.name}</span>
                </a>
            </li>
        `;
    });

    navHTML += `</ul></nav>`;
    navContainer.innerHTML = navHTML;
});