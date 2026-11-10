document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.project-details-dialog').forEach(function (dialog) {
        let lastTrigger = null;
        let contactRequested = false;

        document.querySelectorAll('[data-project-open]').forEach(function (trigger) {
            if (trigger.dataset.projectOpen !== dialog.id) return;
            trigger.addEventListener('click', function () {
                lastTrigger = trigger;
                dialog.showModal();
                dialog.scrollTop = 0;
                document.body.classList.add('project-dialog-open');
            });
        });

        dialog.querySelector('[data-project-close]').addEventListener('click', function () {
            dialog.close();
        });

        dialog.addEventListener('close', function () {
            document.body.classList.remove('project-dialog-open');
            if (contactRequested) {
                contactRequested = false;
                const contactModal = document.getElementById('contactModal');
                if (contactModal && window.bootstrap && bootstrap.Modal) {
                    contactModal.addEventListener('hidden.bs.modal', function () {
                        if (lastTrigger) lastTrigger.focus();
                    }, { once: true });
                    bootstrap.Modal.getOrCreateInstance(contactModal).show(lastTrigger);
                    return;
                }
            }
            if (lastTrigger) lastTrigger.focus();
        });

        dialog.querySelectorAll('[data-project-contact]').forEach(function (button) {
            button.addEventListener('click', function () {
                contactRequested = true;
                dialog.close();
            });
        });

        dialog.addEventListener('click', function (event) {
            if (event.target !== dialog) return;
            const bounds = dialog.getBoundingClientRect();
            const outside = event.clientX < bounds.left || event.clientX > bounds.right
                || event.clientY < bounds.top || event.clientY > bounds.bottom;
            if (outside) dialog.close();
        });
    });

    const wrapper = document.getElementById('projectsWrapper');
    const row = wrapper && wrapper.querySelector('.row');
    if (!row) return;

    function updateProjectsHeight() {
        const cards = Array.from(row.querySelectorAll('.project-card'));
        if (!cards.length) return;
        const firstTop = cards[0].getBoundingClientRect().top;
        const firstRow = cards.filter(function (card) {
            return Math.abs(card.getBoundingClientRect().top - firstTop) < 2;
        });
        const bottom = Math.max(...firstRow.map(function (card) {
            return card.getBoundingClientRect().bottom;
        }));
        const collapsedHeight = Math.ceil(bottom - wrapper.getBoundingClientRect().top + 112);
        wrapper.style.setProperty('--projects-collapsed-height', collapsedHeight + 'px');
        if (wrapper.classList.contains('expanded')) wrapper.style.maxHeight = row.scrollHeight + 15 + 'px';
    }

    updateProjectsHeight();
    if ('ResizeObserver' in window) new ResizeObserver(updateProjectsHeight).observe(row);
    window.addEventListener('resize', updateProjectsHeight);
    if (document.fonts) document.fonts.ready.then(updateProjectsHeight);
});
