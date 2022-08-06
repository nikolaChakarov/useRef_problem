import { useImperativeHandle, useState } from "react";

// описвам hook-a и нещата, които не са ми ясни.
// този кук би трябвало да се грижи за стейта промените му, за всеки DynamicInput компонент.
const useFormInput = (props) => {
    const { value: initValue, onChange: changeValueInForm } = props;

    const [value, setValue] = useState(initValue);

    const onChange = (e) => {
        const newValue = e.target.value;

        setValue(newValue);
    };

    return {
        value,
        onChange,
    };
};

export default useFormInput;
