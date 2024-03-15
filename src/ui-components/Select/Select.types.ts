export type SelectOption = {
    label: string;
    value?: string;
}

export type SelectProps<T> = {
    options: SelectOption[];
    value: string;
    className?: string;
    dataTestId?: string;
    onChange: (value: T) => void;
};