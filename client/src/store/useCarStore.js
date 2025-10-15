import { create } from "zustand";

export const useCarStore = create((set) => ({
    selectedCar: "Porsche",
    setSelectedCar: (car) => set({ selectedCar: car }),
    resetSelectedCar: () => set({ selectedCar: null }),

    selectedCarModel: "911",
    setSelectedCarModel: (car) => set({ selectedCarModel: car }),
}));

export const useCarGLBStore = create((set) => ({
    selectedCarGLB: "/models/porsche/911/porsche911.glb",
    setSelectedCarGLB: (car) => set({ selectedCarGLB: car }),
}));

export const useCarColorStore = create((set) => ({
    selectedCarColor: "#EE4B2B",
    setSelectedCarColor: (color) => set({ selectedCarColor: color }),
}));

export const useCarFinishStore = create((set) => ({
    selectedColorFinish: {},
    setSelectedColorFinish: (finish) => set({ selectedColorFinish: finish }),
}));
