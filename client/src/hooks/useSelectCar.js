import axios from "axios";
import { useCallback, useState } from "react";
import { API_BASE_URL } from "../config/app";

export default function useSelectCar(){
    const [carDetails, setCarDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCarDetails = useCallback(async(car) =>{
        setLoading(true);
        setError(null);
        setCarDetails(null);
        try {
            const res = await axios.get(`${API_BASE_URL}/cars`,{
                params:{brand: car.brand, model: car.model}
            })
            setCarDetails(res.data.data[0]);
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    },[]);

    return {carDetails,loading, error, fetchCarDetails}
}