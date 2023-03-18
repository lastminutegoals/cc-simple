import { renderConsent, getModalOptions, toggleModal, hidePrompt, validateStorage, writeStorage } from './helpers/index.js';
export function ccSimple(params) {
    if (validateStorage(params.revision)) {
        return;
    }
    renderConsent(params.consentList, params.policyURL);
    const prompt = document.querySelector('.cc-simple .cc-prompt');
    const modal = document.querySelector('.cc-simple .cc-modal');
    prompt.addEventListener('animationend', () => {
        prompt.classList.remove('animate-prompt-up');
    }, { once: true });
    document.querySelector('[data-cc="modal-up"]').addEventListener('click', () => {
        toggleModal('up');
    });
    document.querySelector('[data-cc="modal-down"]').addEventListener('click', () => {
        toggleModal('down');
    });
    document.querySelector('[data-cc="save"]').addEventListener('click', () => {
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
        node.addEventListener('click', (event) => {
            const parent = event.target.closest('li');
            parent.dataset.expanded = parent.dataset.expanded === 'true' ? 'false' : 'true';
        });
    });
}
;
