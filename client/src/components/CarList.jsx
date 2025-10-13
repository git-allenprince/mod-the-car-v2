import { useSetRecoilState } from "recoil";
import useCars from "../hooks/useCar";
import { selectedCarAtom } from "../state/selectedCarAtom";


export default function CarList(){
    const {cars, loading, error} = useCars();
    const setSelectedCar = useSetRecoilState(selectedCarAtom)
    if(loading) return <p>Loading cars...</p>
    if(error) return <p>Error loading cars...</p> 

    return (
        <div>
            {cars.map(car=>(
                <div key={car._id} onClick={()=>{setSelectedCar(car)}}>
                    <h3>{car.brand}</h3>
                </div>
            ))}
        </div>
    )
}