export function getModalOptions(acceptAll?: boolean) {
    const nodeList = document.querySelectorAll<HTMLLIElement>('.cc-modal ul li');
    const options: Record<string, 'allowed' | 'denied'> = {};

    nodeList.forEach(node => {
        if (node.dataset.ccValue && acceptAll) {
            options[node.dataset.ccValue] = 'allowed';
        }
        else if (node.dataset.ccValue) {
            options[node.dataset.ccValue] = node.querySelector('input')?.checked ? 'allowed' : 'denied';
        }
    });

    return options;
}

export function promptHide() {
    document.querySelector('.cc-prompt')!.classList.add('animate-prompt-down');
}

export function toggleModal(direction?: 'up' | 'down', destroy?: boolean) {
    const modal = document.querySelector('.cc-simple .cc-modal') as HTMLDivElement;
    const modalInner = document.querySelector('.cc-simple .cc-modal-inner') as HTMLDivElement;

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
                document.querySelector('.cc-simple')!.remove();
            }
        }, { once: true });

        modalInner.addEventListener('animationend', () => {
            modalInner.classList.remove('animate-modal-inner-down');
        }, { once: true });
    }
}