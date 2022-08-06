import React, { useRef } from "react";

const Form = (props) => {
    // 2. тук, някак си, при промяна на инпут onChange, ще трябва да покажем бутона и този компонент да изпрати данните;
    // за момента няма да пиша за формата като цяло, може би, ако разбера къде греша при инпутите, ще се справя с формата сам.
    // логиката би трябвало да е същата.

    const formRef = useRef();

    const { children } = props;

    return (
        <div ref={formRef}>
            <h4>Form</h4>
            {children}
        </div>
    );
};

export default Form;
