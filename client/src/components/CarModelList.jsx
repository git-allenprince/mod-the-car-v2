import { useEffect } from "react";
import {useCarStore} from "../store/useCarStore";
import useSelectCar from "../hooks/useSelectCar";
import LoadingRing from "./Loading";

export default function CarModelList() {
    const { selectedCarModel, setSelectedCarModel } = useCarStore();
    const { selectedCar } = useCarStore();
    const { carDetails, fetchCarDetails } = useSelectCar();

    useEffect(() => {
        if (selectedCar) fetchCarDetails(selectedCar);
    }, [fetchCarDetails, selectedCar]);

    return (
        <>
            <select
                id="car-model-list"
                className="w-50 p-1 rounded border bg-white"
                value={selectedCarModel}
                onChange={(e) => {
                    console.log(e.target.value);
                    setSelectedCarModel(e.target.value);
                }}
            >
                <option value="">Choose a model...</option>
                {carDetails
                    ? carDetails.map((car) => (
                          <option key={car._id} value={car.model}>
                              {car.model}
                          </option>
                      ))
                    : null}
            </select>
        </>
    );
}
