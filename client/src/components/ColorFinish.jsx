import { useEffect, useState } from "react";
import { useCarFinishStore } from "../store/useCarStore";
export default function ColorFinish() {
    const {setSelectedColorFinish } = useCarFinishStore();

    const [finish, setFinish] = useState("metallic");
    useEffect(() => {
        const finishes = {
            matte: { metalness: 0, roughness: 1, envMapIntensity: 0 },
            glossy: { metalness: 0.3, roughness: 0.2, envMapIntensity: 0.5 },
            metallic: { metalness: 1, roughness: 0.3, envMapIntensity: 1 },
        };
        if (finish.length > 0) {
            setSelectedColorFinish({name:finish,...finishes[finish]});
        }
    }, [finish, setSelectedColorFinish]);

    return (
        <>
            <select
                className="w-50 p-1 rounded border bg-white"
                id="color-finish-dropdown"
                value={finish}
                onChange={(e) => {
                    console.log(e.target.value);
                    setFinish(e.target.value);
                }}
            >
                <option value="">Choose a finish...</option>
                <option value={"matte"}>Matte</option>
                <option value={"glossy"}>Glossy</option>
                <option value={"metallic"}>Metallic</option>
            </select>
        </>
    );
}
