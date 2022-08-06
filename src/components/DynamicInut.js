import React, { useRef, forwardRef, useMemo } from "react";
import useFormInput from "../hooks/useFormInput";
import Input from "./Input";

// 3. описвам компонента така, както е направен. и нещата, които не са ми ясни.
const DynamicInut = (props) => {
    const internalInputRef = useRef();

    const { value, onChange } = useFormInput(props);
    // console.log(value);

    return (
        <Input
            ref={internalInputRef}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

// защо се използва useMemo - ясно, да не се пререндерира част от компонента, която не е променена.
// защо обаче слагаме propery inputRef, това не е ясно. на мен.
// ясно е, че се ползва от useFormInput хука, не разбирам как;
export default forwardRef((refProps, ref) =>
    useMemo(() => <DynamicInut {...refProps} inputRef={ref} />)
);
