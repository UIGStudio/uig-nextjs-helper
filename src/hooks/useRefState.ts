import {useRef, useState} from 'react';

export default function useRefState<T>(
    initValue: T,
): [T, {current: T}, (val: T) => void] {
    const valueRef = useRef<T>(initValue);
    const [value, setValue] = useState<T>(initValue);

    return [
        value,
        valueRef,
        (val: T) => {
            valueRef.current = val;
            setValue(val);
        },
    ];
}
