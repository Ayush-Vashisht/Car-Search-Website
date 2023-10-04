export default function Car({car}) {
  // console.log(car)
  return (
    <div>
      <div className="w-full bg-gray-200 rounded-2xl p-4">
        <img
          src={car.url}
          alt=""
          className="w-full rounded-2xl object-cover"
        />
        <div className="flex justify-between py-2">
          <h2 className="font-bold text-left">{car.name}</h2>
          <span className="text-sm text-right font-semibold border border-blue-300 space-x-6 rounded-2xl px-2">
            {car.year}
          </span>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="pt-1  flex shrink-0 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="w-4 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <div className="shrink-0 text-sm">{`${car.person} people`}</div>
          </div>
          <div className="pt-1 flex shrink-0 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="w-5 h-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              />
            </svg>
            <div className="shrink-0 text-sm">{car.mode}</div>
          </div>
          <div className="pt-1 flex shrink-0 gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="w-4 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>
            <div className="shrink-0 text-sm">{`${car.speed}km/L`}</div>
          </div>
          <div className="pt-1 flex shrink-0 gap-1 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="blue"
              className="w-4 h-5  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="shrink text-sm">{car.type}</div>
          </div>
        </div>
        <div className="border-b border-gray-400 pt-3"></div>
        <div className="flex justify-between pt-2">
          <div className="font-semibold">{`$ ${car.price}/month`}</div>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="blue"
              className="w-7 h-7 bg-blue-300 rounded-2xl p-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <button
              type="submit"
              className="bg-blue-500 text-sm rounded-2xl px-2 py-1"
            >
              Rent now
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
