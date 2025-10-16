import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Toolbar from "./components/Toolbar";
import { useCarStore } from "./store/useCarStore";
import Logo from "./components/Logo";

function App() {
    const { selectedCarModel } = useCarStore();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className=" p-2 flex items-center justify-start">
                <Logo />
                <div className="p-3 mx-4 md:mx-20 flex flex-wrap items-center rounded-2xl shadow bg-white gap-5">
                    <Toolbar />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 min-h-screen">
                <div className="col-span-1 md:col-span-6 flex items-center justify-center">
                    {selectedCarModel ? <CarDetails /> : "No car selected"}
                </div>
                <div className="col-span-1 md:col-span-2"></div>
            </div>

            <footer className="mt-8"></footer>
        </div>
    );
}

export default App;
