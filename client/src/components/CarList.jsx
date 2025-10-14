import useCars from "../hooks/useCar";
import useCarStore from "../store/useCarStore";

export default function CarList() {
    const { cars, loading, error } = useCars();
    const { selectedCar, setSelectedCar } = useCarStore();
    if (loading) return <p>Loading cars...</p>;
    if (error) return <p>Error loading cars...</p>;

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
