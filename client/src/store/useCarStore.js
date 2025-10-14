import { create } from "zustand";

const useCarStore = create((set) => ({
  selectedCar: "",
  setSelectedCar: (car) => set({ selectedCar: car }),
  resetSelectedCar: () => set({ selectedCar: null }),

  selectedCarModel:"",
  setSelectedCarModel:(car)=>set({selectedCarModel:car})
}));

export default useCarStore

