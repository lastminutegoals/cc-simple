import type { InitParams, StorageData } from '../types.js';

function getStorageFromLocalStorage() {
    if (!localStorage.ccData) {
        return null;
    }

    const storage = JSON.parse(localStorage.ccData) as StorageData;

    if (
        typeof storage.revision !== 'number' ||
        typeof storage.expire !== 'number' ||
        typeof storage.consentList !== 'object'
    ) {
        return null;
    }

    return storage;
}

export function validateStorage(revision: InitParams['revision']) {
    try {
        const storage = getStorageFromLocalStorage();

        if (!storage || storage.expire < Date.now() || storage.revision !== revision) {
            return false;
        }

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export function writeStorage(data: Pick<StorageData, 'revision' | 'expire' | 'consentList'>) {
    data.expire = Date.now() + data.expire;
    localStorage.setItem('ccData', JSON.stringify(data));
}

export function resetStorageListener() {
    const reset = document.querySelector('a[data-cc="reset"]');
    if (reset) {
        reset.addEventListener('click', () => {
            localStorage.removeItem('ccData');
            window.location.reload();
        });
    }
}