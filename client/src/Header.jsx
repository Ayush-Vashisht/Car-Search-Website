export default function Header() {
  return (
    <>
      <div className="bg-gray-200 shadow-md shadow-gray-300 rounded-2xl">
        <header className="flex px-4 py-2 grow shrink-0 gap-4 items-center">
          <input type="text" placeholder="search..." />
          <div className="text-gray-700 flex items-center gap-1 text-s cursor-pointer">
            Relevance
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="text-gray-700 flex items-center gap-1 text-s cursor-pointer">
            All brands
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </header>
      </div>
    </>
  );
}
