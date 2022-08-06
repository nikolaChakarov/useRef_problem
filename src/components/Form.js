import React, { useRef } from "react";

const Form = (props) => {
    // 2. тук, някак си, при промяна на инпут onChange, ще трябва да покажем бутона и този компонент да изпрати данните;

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
