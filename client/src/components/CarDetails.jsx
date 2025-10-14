import useSelectCar from "../hooks/useSelectCar";
import { useEffect } from "react";
import useCarStore from "../store/useCarStore";

export default function CarDetails() {
    const { selectedCar } = useCarStore();
    const { selectedCarModel } = useCarStore();
    const { carDetails, loading, error, fetchCarDetails } = useSelectCar();

    useEffect(() => {
        if (selectedCarModel) fetchCarDetails(selectedCar, selectedCarModel);
    }, [fetchCarDetails, selectedCar, selectedCarModel]);
    if (!selectedCarModel) return null;
    if (loading) return <p>Loading car details...</p>;
    if (error) return <p>Error loading car details...</p>;
    console.log("from car details,", carDetails)
    return (
        <div>{carDetails ? <>{carDetails[0].glbPath}</> : "no car detail"}</div>
    );
}
