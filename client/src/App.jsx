
import { useRecoilValue } from "recoil"
import CarList from "./components/CarList"
import { selectedCarAtom } from "./state/selectedCarAtom"
import CarDetails from "./components/CarDetails";


function App() {
  const selectedCar = useRecoilValue(selectedCarAtom);

  return <div className='bg-amber-700'>
    <CarList/>
    {selectedCar?<CarDetails/>: "No car selected"}
  </div>
}

export default App
