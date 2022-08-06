import { useImperativeHandle, useState, useEffect } from "react";

// описвам hook-a и нещата, които не са ми ясни.
// махната е доста логика от самия хук, както и от самите компоненти, за да опростя максимално примера
// този кук би трябвало да се грижи за стейта промените му, за всеки DynamicInput компонент.
const useFormInput = (props) => {
    const {
        value: initValue,
        onChange: changeValueInForm,
        inputRef,
        id,
    } = props;

    const [value, setValue] = useState(initValue);

    useImperativeHandle(inputRef, () => ({
        // този метод, changeValue(), не се ползва никъде, или поне аз не виждам как и изобщо какъв е смисъла от useImperativeHandle() тук.
        changeValue: (newValue) => onChange({ target: { value: newValue } }),
        value,
    }));

    const onChange = (e) => {
        const newValue = e.target.value;

        setValue(newValue);
        // ако махна коментара, получавам грешка: changeValueInForm is not a function;
        // не разбирам защо се подават два аргумента, също и защо един път викаме setValue()  и после changeValueInForm();
        // changeValueInForm(id, newValue);
    };

    useEffect(() => {
        setValue(value);
    }, [value]);

    return {
        value,
        onChange,
    };
};

export default useFormInput;
