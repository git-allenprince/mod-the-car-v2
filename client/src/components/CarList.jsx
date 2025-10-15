import useCars from "../hooks/useCar";
import {useCarStore} from "../store/useCarStore";
import LoadingRing from "./Loading";

export default function CarList() {
    const { cars } = useCars();
    const { selectedCar, setSelectedCar } = useCarStore();

    return (
        <>
            <select
                className="w-50 p-1 rounded border bg-white"
                id="cars-list-dropdown"
                value={selectedCar}
                onChange={(e) => {
                    console.log(e.target.value)
                    setSelectedCar(e.target.value);
                }}
            >
                <option value="">Choose a car...</option>
                {cars.map((car) => (
                    <option key={car._id} value={car.brand}>
                        {car.brand}
                    </option>
                ))}
            </select>
        </>
    );
}
