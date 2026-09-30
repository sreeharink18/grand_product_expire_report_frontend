import type { MonthSelectOptionModel } from "../types";

export const getMonthOptions = (): MonthSelectOptionModel[] => {
    const options: MonthSelectOptionModel[] = [];

    const currentDate = new Date();

    for (let i = -1; i <= 7; i++) {
        const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + i,
            1
        );

        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const value =
            `${year}${month.toString().padStart(2, "0")}`;

        const label = date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric"
        });

        options.push({
            label,
            value
        });
    }

    return options;
};