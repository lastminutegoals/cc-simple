function getStorageFromLocalStorage() {
    if (!localStorage.ccData) {
        return null;
    }
    const storage = JSON.parse(localStorage.ccData);
    if (typeof storage.revision !== 'number' ||
        typeof storage.expire !== 'number' ||
        typeof storage.consentList !== 'object') {
        return null;
    }
    return storage;
}
export function validateStorage(revision) {
    try {
        const storage = getStorageFromLocalStorage();
        if (!storage || storage.expire < Date.now() || storage.revision !== revision) {
            return false;
        }
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
}
export function writeStorage(data) {
    data.expire = Date.now() + data.expire;
    localStorage.setItem('ccData', JSON.stringify(data));
}
