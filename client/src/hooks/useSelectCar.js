import axios from "axios";
import { useCallback, useState } from "react";
import { API_BASE_URL } from "../config/app";

export default function useSelectCar(){
    const [carDetails, setCarDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCarDetails = useCallback(async(brand,model) =>{
        setLoading(true);
        setError(null);
        setCarDetails("");
        try {
            const res = await axios.get(`${API_BASE_URL}/cars`,{
                params:{brand, model}
            })
            setCarDetails(res.data.data);
        } catch (error) {
            setError(error)
        } finally{
            setLoading(false)
        }
    },[]);

    return {carDetails,loading, error, fetchCarDetails}
}