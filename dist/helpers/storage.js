export function validateCCStorage(revision) {
    try {
        if (!localStorage.cc_data) {
            return false;
        }
        const storage = JSON.parse(localStorage.cc_data);
        if (!storage.revision || !storage.expire || !storage.consentList) {
            return false;
        }
        if (storage.expire < Date.now() || storage.revision !== revision) {
            return false;
        }
        return true;
    }
    catch (error) {
        return false;
    }
}
export function writeCCStorage(data) {
    data.expire = Date.now() + data.expire;
    localStorage.setItem('cc_data', JSON.stringify(data));
}
