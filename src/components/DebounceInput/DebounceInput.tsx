import React from "react";
import {TextField, TextFieldProps} from "@mui/material";

type DebounceProps = {
    handleDebounce: (value: string) => void;
    debounceTimeout: number;
};

export function DebounceInput(props: TextFieldProps & DebounceProps) {
    const { handleDebounce, debounceTimeout, ...other } = props;

    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
        undefined,
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            handleDebounce(event.target.value);
        }, debounceTimeout);
    };

    return <TextField {...other} onChange={handleChange}  />;
}