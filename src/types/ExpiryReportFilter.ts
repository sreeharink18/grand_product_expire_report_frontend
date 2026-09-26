export default interface ExpiryReportFilter {
    location: string;
    month: string;
    creationDateFrom: string | null;
    creationDateTo: string | null;
    category: string;
    removedStatus: string;
}