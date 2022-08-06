import Form from "./components/Form";
import DynamicInut from "./components/DynamicInut";

const App = () => {
    // 1. тук имаме custom Form component с два custom Input
    return (
        <Form>
            <DynamicInut id="name" type="text" placeholder="Name" />
            <DynamicInut id="age" type="number" placeholder="Age" />
        </Form>
    );
};

export default App;
