export default interface KpiCardPropsModel {
    title: string;
    value: number;
    type: "total" | "expired" | "warning" | "safe";
}