export type Affiliate = {
    id: number;
    fName: string;
    lName: string;
    isStudent: boolean;
};

export type AffiliateResponse = {
    students: Affiliate[];
};

export type JsonBinResponse = {
    record: AffiliateResponse;
};