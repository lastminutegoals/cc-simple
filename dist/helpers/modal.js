export function hidePrompt() {
    document.querySelector('.cc-prompt').classList.add('animate-prompt-down');
}
export function getModalOptions(acceptAll) {
    const nodeList = document.querySelectorAll('.cc-modal ul li');
    const options = {};
    nodeList.forEach(node => {
        if (node.dataset.ccValue && acceptAll) {
            options[node.dataset.ccValue] = 'granted';
        }
        else if (node.dataset.ccValue) {
            options[node.dataset.ccValue] = node.querySelector('input')?.checked ? 'granted' : 'denied';
        }
    });
    return options;
}
export function toggleModal(direction, destroy) {
    const modal = document.querySelector('.cc-simple .cc-modal');
    const modalInner = document.querySelector('.cc-simple .cc-modal-inner');
    if (direction === 'up') {
        modal.dataset.visible = 'true';
        modal.classList.add('animate-modal-up');
        modalInner.classList.add('animate-modal-inner-up');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('animate-modal-up');
        }, { once: true });
        modalInner.addEventListener('animationend', () => {
            modalInner.classList.remove('animate-modal-inner-up');
        }, { once: true });
    }
    else if (direction === 'down') {
        modal.classList.remove('animate-modal-up');
        modalInner.classList.remove('animate-modal-inner-up');
        modal.classList.add('animate-modal-down');
        modalInner.classList.add('animate-modal-inner-down');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('animate-modal-down');
            modal.dataset.visible = 'false';
            if (destroy) {
                document.querySelector('.cc-simple').remove();
            }
        }, { once: true });
        modalInner.addEventListener('animationend', () => {
            modalInner.classList.remove('animate-modal-inner-down');
        }, { once: true });
    }
}
