import { ChangeEvent } from "react";

interface searcherProps {
  search: string
  updateSearch(e:ChangeEvent<HTMLInputElement>): void
}

export default function Searcher({search,updateSearch}: searcherProps): JSX.Element {
  return (
    <div className="w-full h-14 relative">
      <div className="w-full h-1/2 bg-secondary" />
      <div className="w-full h-1/2 bg-transparent" />
      <div className="w-64 md:w-96 h-10 shadow-lg mt-3 rounded-sm absolute top-0 bottom-0 left-0 right-0 mx-auto">
        <svg className="w-5 h-5 absolute mt-2.5 ml-2 text-neutral-400" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path fill="currentColor" fillRule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"/>
        </svg>
        <input
          type="text"
          className="focus:outline-none w-full h-full pl-10"
          value={search}
          onChange={updateSearch}
        />
      </div>
    </div>
  );
}
