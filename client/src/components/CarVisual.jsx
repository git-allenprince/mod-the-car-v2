import { useEffect, useRef } from "react";
import { useCarColorStore, useCarFinishStore, useCarGLBStore } from "../store/useCarStore";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function CarVisual({ glbPath }) {
    let bodyMesh = useRef();
    const { selectedColorFinish } = useCarFinishStore();
    const { selectedCarGLB } = useCarGLBStore();
    const { selectedCarColor } = useCarColorStore();
    const { scene } = useGLTF(glbPath);

    useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh && child.name.toLowerCase() == "body") {
                bodyMesh.current = child;
                console.log(bodyMesh.current);
            }
        });
    }, [scene]);

    useEffect(() => {
        let bcm = bodyMesh.current.material;
        if (!(bcm instanceof THREE.MeshStandardMaterial)) {
            bcm = new THREE.MeshStandardMaterial();
        }
        bcm.metalness = selectedColorFinish.metalness;
        bcm.roughness = selectedColorFinish.roughness;
        bcm.envMapIntensity = selectedColorFinish.envMapIntensity;
        bcm.color.set(selectedCarColor);
        bcm.needsUpdate = true;
    }, [selectedCarColor, selectedColorFinish, selectedCarGLB]);
    return <primitive object={scene} scale={1} />;
}
