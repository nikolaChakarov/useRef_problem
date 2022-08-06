import React, { useRef, forwardRef, useMemo } from "react";
import useFormInput from "../hooks/useFormInput";
import Input from "./Input";

// 3. описвам компонента така, както е направен. и нещата, които не са ми ясни.
const DynamicInut = (props) => {
    const internalInputRef = useRef();

    const { value, onChange } = useFormInput(props);

    return (
        <Input
            ref={internalInputRef}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

export default DynamicInut;
