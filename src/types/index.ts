export interface SignupFormProps {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface AssessmentDataType {
    key: React.Key;
    assessment: string;
    type: string;
    nos: number;
    score: number | null;
    rc: string;
    status: string;
    result: boolean | null;
}

export interface MenuItem {
    icon: JSX.Element;
    label: string;
    route: string;
}

export interface TabItem {
    title: string;
    icon: JSX.Element;
}
export interface TabHeaderProps {
    setActiveTab: (tab: string) => void;
}


export interface DataType {
    key: React.Key;
    month: string;
    status: string;
    completion: string;
    bu: string;
}

export interface TableTitleProps {
    name: string;
    icon: React.ReactNode;
}