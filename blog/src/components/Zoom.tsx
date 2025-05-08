import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { MdOutlineZoomInMap } from "react-icons/md";
import {
  useControls,
} from "react-zoom-pan-pinch";

export const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="absolute px-8 z-20 flex flex-col gap-2">
      <button
        onClick={() => zoomOut()}
        className="p-2 rounded-xl bg-slate-100 text-blue-600"
      >
        <CiCircleMinus className="text-3xl hover:cursor-pointer" />
      </button>
      <button
        onClick={() => resetTransform()}
        className="p-2 rounded-xl bg-slate-100 text-blue-600"
      >
        <MdOutlineZoomInMap className="text-3xl hover:cursor-pointer" />
      </button>
      <button
        onClick={() => zoomIn()}
        className="p-2 rounded-xl bg-slate-100 text-blue-600"
      >
        <CiCirclePlus className="text-3xl hover:cursor-pointer" />
      </button>
    </div>
  );
};
