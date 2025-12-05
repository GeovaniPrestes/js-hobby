document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleBtn');
    const overlay = document.getElementById('sidebarOverlay');

    if (!sidebar || !toggleBtn) return;

    // Restaurar estado salvo
    const saved = localStorage.getItem('sidebarCollapsed');
    if (saved === 'true') sidebar.classList.add('collapsed');

    function isMobile() {
        return window.innerWidth <= 700;
    }

    function updateOverlay() {
        if (!overlay) return;
        const open = !sidebar.classList.contains('collapsed');
        if (isMobile() && open) {
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
        } else {
            overlay.classList.remove('active');
            overlay.setAttribute('aria-hidden', 'true');
        }
    }

    // Inicial
    updateOverlay();

    toggleBtn.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebarCollapsed', sidebar.classList.contains('collapsed'));
        updateOverlay();
    });

    // Fechar ao clicar overlay
    if (overlay) {
        overlay.addEventListener('click', function () {
            sidebar.classList.add('collapsed');
            localStorage.setItem('sidebarCollapsed', true);
            updateOverlay();
        });
    }

    // Atualiza estado ao redimensionar (ex: desktop -> mobile)
    window.addEventListener('resize', updateOverlay);
});