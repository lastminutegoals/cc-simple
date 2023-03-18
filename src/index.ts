import { renderConsent, getModalOptions, toggleModal, hidePrompt, validateStorage, writeStorage } from './helpers/index.js';
import type { InitParams } from './types.js';

export function ccSimple(params: InitParams) {
    if (validateStorage(params.revision)) {
        return;
    }

    renderConsent(params.consentList, params.policyURL);

    const prompt = document.querySelector('.cc-simple .cc-prompt') as HTMLDivElement;
    const modal = document.querySelector('.cc-simple .cc-modal') as HTMLDivElement;

    prompt.addEventListener('animationend', () => {
        prompt.classList.remove('animate-prompt-up');
    }, { once: true });

    document.querySelector('[data-cc="modal-up"]')!.addEventListener('click', () => {
        toggleModal('up');
    });

    document.querySelector('[data-cc="modal-down"]')!.addEventListener('click', () => {
        toggleModal('down');
    });

    document.querySelector('[data-cc="save"]')!.addEventListener('click', () => {
        writeStorage({
            revision: params.revision,
            expire: params.expire,
            consentList: getModalOptions(),
        });

        toggleModal('down', true);
        hidePrompt();
    });

    document.querySelectorAll('[data-cc="accept"]').forEach(node => {
        node.addEventListener('click', () => {
            writeStorage({
                revision: params.revision,
                expire: params.expire,
                consentList: getModalOptions(),
            });

            if (modal.dataset.visible === 'true') {
                toggleModal('down', true);
                hidePrompt();
            }
            else {
                hidePrompt();
            }
        });
    });

    document.querySelectorAll('[data-cc="li-expand"]').forEach(node => {
        node.addEventListener('click', (event: Event) => {
            const parent = (event.target as HTMLElement).closest('li') as HTMLLIElement;
            parent.dataset.expanded = parent.dataset.expanded === 'true' ? 'false' : 'true';
        });
    });
};