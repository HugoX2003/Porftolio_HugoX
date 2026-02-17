export function setupModals(
    openBtnSelector: string,
    closeBtnSelector: string,
    modalSelector: string
) {
    // Open buttons
    const openBtns = document.querySelectorAll(openBtnSelector);
    openBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = (btn as HTMLElement).dataset.target || (btn as HTMLElement).dataset.id;
            // Handle both data-target (Projects) and data-id (Experience) patterns
            // Projects uses "modal-Title" in data-target
            // Experience uses "id" in data-id, and modal is "modal-id"

            let modalId = targetId;
            if (!targetId?.startsWith('modal-')) {
                modalId = `modal-${targetId}`;
            }

            const modal = document.getElementById(modalId!) as HTMLDialogElement;
            if (modal) {
                modal.showModal();
                document.body.style.overflow = "hidden";
            }
        });
    });

    // Close buttons
    const closeBtns = document.querySelectorAll(closeBtnSelector);
    closeBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // Projects uses data-close="Title"
            // Experience uses data-close="id"
            const closeTarget = (btn as HTMLElement).dataset.close;
            let modalId = closeTarget;
            if (!closeTarget?.startsWith('modal-')) {
                modalId = `modal-${closeTarget}`;
            }
            // If the ID construction logic differs significantly, we might need to be more specific or 
            // standardize the HTML data attributes. 
            // In Projects: ID is `modal-${title.replace}`. data-target is that ID. data-close is title.
            // In Experience: ID is `modal-${id}`. data-id is id. data-close is id.

            // Let's rely on finding the closest dialog if strict ID matching is tricky, 
            // OR standardized the IDs in the HTML.
            // Actually, `btn.closest('dialog')` is the safest way to find the modal to close!
            const modal = btn.closest('dialog') as HTMLDialogElement;

            if (modal) {
                modal.close();
                document.body.style.overflow = "";
            }
        });
    });

    // Click outside to close
    const dialogs = document.querySelectorAll(modalSelector);
    dialogs.forEach((dialog) => {
        dialog.addEventListener("click", (event) => {
            const e = event as MouseEvent;
            const rect = (dialog as HTMLElement).getBoundingClientRect();
            const isInDialog = (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= rect.top &&
                e.clientY <= rect.bottom
            );

            if (e.target === dialog) {
                (dialog as HTMLDialogElement).close();
                document.body.style.overflow = "";
            }
        });
    });
}
