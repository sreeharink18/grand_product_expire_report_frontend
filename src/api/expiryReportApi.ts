import type {ExpiryCountKpiModel,ExpiryItemModel,ExpiryReportFilterModel,FilterOptionModel,
        KpiCardPropsModel,PaginationPropsModel,LocationResponseModel
} from '../types'

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