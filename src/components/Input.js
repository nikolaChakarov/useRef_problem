import React, { forwardRef } from "react";

const Input = (props, ref) => {
    // 4. компонента, който в крайна сметка връща HTML инпут елемент;
    // value and onChange, се връщат от useFormInput hook, който викаме в DynamicInput компонента.
    const { id, type, placeholder, value, onChange } = props;

    return (
        <input
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default forwardRef(Input);
