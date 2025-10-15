import { useCarColorStore } from "../store/useCarStore";

export default function ColorPicker() {
    const { selectedCarColor, setSelectedCarColor } = useCarColorStore();
    return (
        <div className="flex gap-1">  Color:
            <input className=" w-8 rounded border bg-white"
                type="color"
                id="color-picker"
                value={selectedCarColor}
                onChange={(e) => setSelectedCarColor(e.target.value)}
            />
        </div>
    );
}
