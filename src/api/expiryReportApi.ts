import type {ExpiryCountKpiModel,ExpiryItemModel,ExpiryReportFilterModel,FilterOptionModel,
        KpiCardPropsModel,PaginationPropsModel,LocationResponseModel,CategoryResponseModel,
        ExpiryItemsRequestModel,
        RemoveExpiryItemRequestModel
} from '../types'
import type PagedResult from '../types/PagedResultModel';

const API_BASE_URL = "http://localhost:5082/api/ExpiryReport";

export const getLocations = async (): Promise<[LocationResponseModel]> => {

    const response = await fetch(
        `${API_BASE_URL}/GetLocations`
    );

    if (!response.ok) {
        throw new Error("Failed to load locations");
    }

    return response.json();
};
export const getCategories = async (location: string): Promise<[CategoryResponseModel]> => {

    const response = await fetch(
        `${API_BASE_URL}/categories?location=${encodeURIComponent(location)}`
    );

    if (!response.ok) {
        throw new Error("Failed to load categories");
    }

    return response.json();
};
export const getKpi = async (
    filters: ExpiryReportFilterModel
): Promise<ExpiryCountKpiModel> => {

    const response = await fetch(
        `${API_BASE_URL}/kpi`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filters),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to load KPI data");
    }

    return response.json();
};


export const getItems = async (
    request: ExpiryItemsRequestModel
): Promise<PagedResult<ExpiryItemModel>> => {

    const response = await fetch(
        `${API_BASE_URL}/items`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to load expiry items");
    }

    return response.json();
};


export const removeItem = async (
    request: RemoveExpiryItemRequestModel
): Promise<void> => {

    const response = await fetch(
        `${API_BASE_URL}/remove`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
        }
    );

    if (!response.ok) {
        throw new Error("Failed to remove item");
    }
};