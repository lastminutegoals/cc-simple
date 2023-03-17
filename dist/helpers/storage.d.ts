import type { InitParams, StorageData } from '../types.js';
export declare function validateCCStorage(revision: InitParams['revision']): boolean;
export declare function writeCCStorage(data: Pick<StorageData, 'revision' | 'expire' | 'consentList'>): void;
