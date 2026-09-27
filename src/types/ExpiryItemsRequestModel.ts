import type { ExpiryReportFilterModel } from ".";

export default interface ExpiryItemsRequest extends ExpiryReportFilterModel {
    page: number;
    pageSize: number;
}