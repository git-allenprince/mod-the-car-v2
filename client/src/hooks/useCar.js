import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/app.js";

export default function useCars() {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const res = await axios.get(`${API_BASE_URL}/cars`);
                setCars(res.data.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, []);
    return { cars, loading, error };
}
