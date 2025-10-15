import useSelectCar from "../hooks/useSelectCar";
import { useEffect } from "react";
import { useCarStore, useCarGLBStore, useCarFinishStore } from "../store/useCarStore";
import  { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import CarVisual from "./CarVisual";


export default function CarDetails() {
    const { selectedColorFinish } = useCarFinishStore();
    const { selectedCarGLB, setSelectedCarGLB } = useCarGLBStore();
    const { selectedCar } = useCarStore();
    const { selectedCarModel } = useCarStore();
    const { carDetails, fetchCarDetails } = useSelectCar();

    useEffect(() => {
        if (selectedCarModel) fetchCarDetails(selectedCar, selectedCarModel);
    }, [fetchCarDetails, selectedCar, selectedCarModel]);

    useEffect(() => {
        if (carDetails && carDetails.length > 0)
            setSelectedCarGLB(carDetails[0].glbPath);
    }, [carDetails, setSelectedCarGLB]);

    if (!selectedCarModel) return null;

    console.log("from car details,", carDetails);
    return (
        <>
            <Canvas camera={{ position: [2, 2, 5], fov: 60 }}>
                <ambientLight intensity={1} />
                <directionalLight
                    position={[5, 10, 5]}
                    intensity={2}
                    castShadow
                />
                <spotLight
                    position={[10, 20, 10]}
                    angle={0.3}
                    intensity={2}
                    castShadow
                />
                <Suspense fallback={null}>
                    <CarVisual glbPath={selectedCarGLB} />
                    {console.log(selectedColorFinish)}
                    {selectedColorFinish.name=="matte"?null:<Environment preset="city" />}
                </Suspense>
                <OrbitControls
                    enablePan
                    enableZoom
                    enableRotate
                    minDistance={6}
                    maxDistance={10}
                />
            </Canvas>
        </>
    );
}
