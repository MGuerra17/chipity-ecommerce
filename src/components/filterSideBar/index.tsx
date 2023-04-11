import { FilterControl } from "@/types/filterSideBarControls";
import FilterCheckBox from "./FilterCheckBox";

export default function FilterSideBar({
  show,
  setShow,
}: FilterControl): JSX.Element {

  return (
    <>
      <div
        className={`fixed w-screen h-screen bg-black/50 z-40 top-0 left-0 focus:outline-none focus-within:outline-none cursor-default ${
          !show && "hidden"
        }`}
        role="button"
        tabIndex={-0}
        onClick={setShow}
        onKeyDown={setShow}
      ></div>
      <div
        className={`fixed h-screen transition-transform duration-500 w-64 bg-white z-50 top-0 right-0 pt-12 px-6 ${
          !show && "translate-x-full"
        }`}
      >
        <button className="absolute top-0 left-0 m-2" onClick={setShow}>
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                id="Vector"
                d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </button>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Filtrar</h3>
          <button className="px-3 py-1 text-neutral-400 border border-neutral-400 rounded-sm hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700">
            Limpiar
          </button>
        </div>
        <div className="flex flex-col pt-5">
          <h4 className="text-lg font-bold text-neutral-500 mb-3">
            Categorias
          </h4>
          <FilterCheckBox title="Anillos" />
          <FilterCheckBox title="Argollas" />
          <FilterCheckBox title="Collares" />
          <FilterCheckBox title="Joyeros" />
          <FilterCheckBox title="Combos" />
        </div>
      </div>
    </>
  );
}
