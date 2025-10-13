import { useRecoilValue } from "recoil";
import { selectedCarAtom } from "../state/selectedCarAtom";
import useSelectCar from "../hooks/useSelectCar";
import { useEffect } from "react";

export default function CarDetails() {
    const selectedCar = useRecoilValue(selectedCarAtom);
    const { carDetails, loading, error, fetchCarDetails } = useSelectCar();

    useEffect(() => {
        if (selectedCar) fetchCarDetails(selectedCar);
    }, [fetchCarDetails, selectedCar]);
    console.log("car details", carDetails);
    if (!selectedCar) return null;
    if (loading) return <p>Loading car details...</p>;
    if (error) return <p>Error loading car details...</p>;
    return <div>{carDetails ? <>{carDetails.glbPath}</> : "no car detail"}</div>;
}
