export const checkEmptyValues = (values: Array<any> | {[key: string]: any}) => {
    if (Array.isArray(values)){
        return values.every((item: any) => !!item)
    }

    return Object.keys(values).every((item: string) => !!values[item])
};

export const findTitle = (values: Array<{title: string, value: string}>, value: string) => {
    const result = values.find(item => item.value === value);
    return !!result ? result.title : '';
};