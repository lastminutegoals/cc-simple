export type InitParams = {
    revision: number;
    expire: number;
    promptHTML: string;
    headerHTML: string;
    footerHTML: string;
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
