export type InitParams = {
    revision: number;
    expire: number;
    policyURL: string;
    consentList: {
        title: string;
        value: string;
        description: string;
        required: boolean;
    }[];
};

export type StorageData = {
    revision: number;
    expire: number;
    consentList: Record<string, 'granted' | 'denied'>;
};