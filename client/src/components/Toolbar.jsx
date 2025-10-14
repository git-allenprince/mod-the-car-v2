import CarList from "./CarList";
import CarModelList from "./CarModelList";

export default function Toolbar(){
    return(
        <>
            <div>
                <CarList/>
                <CarModelList/>
            </div>
        </>
    )
}