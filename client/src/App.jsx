import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Toolbar from "./components/Toolbar";
import useCarStore from "./store/useCarStore";
import Logo from "./components/Logo";

function App() {
    const { selectedCar } = useCarStore();

    return (
        <div className="min-h-screen bg-gray-200">
            <div className=" p-2 flex items-center justify-start h-25">
                <Logo/>
                <div className="p-3 ml-25 h-15 flex items-center w-5xl rounded-2xl shadow bg-white">
                    <Toolbar />
                </div>
            </div>
            {selectedCar ? <CarDetails /> : "No car selected"}
        </div>
    );
}

export default App;
