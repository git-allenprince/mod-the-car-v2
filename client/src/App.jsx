import CarList from "./components/CarList";
import CarDetails from "./components/CarDetails";
import Toolbar from "./components/Toolbar";
import {useCarStore} from "./store/useCarStore";
import Logo from "./components/Logo";

function App() {
    const { selectedCarModel } = useCarStore();

    return (
        <div className="min-h-screen bg-gray-100">
            <div className=" p-2 flex items-center justify-start h-25">
                <Logo />
                <div className="p-3 ml-25 h-15 flex items-center w-5xl rounded-2xl shadow bg-white gap-5">
                    <Toolbar />
                </div>
            </div>
            <div className="grid grid-cols-8 min-h-screen">
                <div className="col-span-2"></div>
                <div className="col-span-4 flex items-center justify-center">
                    {/* <div className="translate-y-[-4rem]"> */}
                        {selectedCarModel ? <CarDetails /> : "No car selected"}
                    {/* </div> */}
                </div>
                <div className="col-span-2"></div>
            </div>

            <footer className="mt-8"></footer>
        </div>
    );
}

export default App;
