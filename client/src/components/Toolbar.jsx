import CarList from "./CarList";
import CarModelList from "./CarModelList";
import ColorFinish from "./ColorFinish";
import ColorPicker from "./ColorPicker";

export default function Toolbar() {
    return (
        <>
            <ColorPicker/>
            <CarList />
            <CarModelList />
            <ColorFinish/>
        </>
    );
}
