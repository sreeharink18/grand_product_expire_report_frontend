export default interface ExpiryItemModel {
  removedStatus: string | null;
    locCode: string | null;
    location: string | null;
    docNo: string | null;
    barcode: string | null;
    goldCode: string | null;
    goldSu: string | null;
    suDescription: string | null;
    phyStock: number | null;
    shelfNo: string | null;
    creBy: string | null;
    creTime: string | null;
    grnDate: string | null;
    expDate: string | null;
    expDays: number;
    soldQty: number;
    riskQty: number;
    status: string | null;
}