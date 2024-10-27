import { ReactNode } from "react";

export type DataStepItem = {
    id?: string;
    title?: string;
    description?: string;
    icon?: ReactNode;
}

export type StepItemProps = {
    index: number;
    title: string;
    description: string;
    icon: ReactNode;
    data: DataStepItem[];
}

