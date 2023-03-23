import type { InitParams, StorageData } from '../types.js';
export declare function validateStorage(revision: InitParams['revision']): boolean;
export declare function writeStorage(data: Pick<StorageData, 'revision' | 'expire' | 'consentList'>): void;
export declare function resetStorageListener(): void;
