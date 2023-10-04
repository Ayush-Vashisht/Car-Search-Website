import { useEffect, useState } from "react";
import CarPage from "./CarPage";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CarsPage() {
  let { pageNo } = useParams();
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [redirect, setRedirect] = useState(false);
  const [searchedCar, setSearchedCar] = useState(null);
  const [currCar, setCurrCar] = useState("");

  if (pageNo == "undefined") {
    pageNo = 1;
  }
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/").then(({ data }) => {
      setCars(data.car);
    });
  }, []);
  const selectPageHandler = (selectedPage) => {
    console.log(selectedPage);
    if (
      selectedPage >= 1 &&
      selectedPage <= cars.length / 6 &&
      selectedPage !== pageNo
    ) {
      setPage(selectedPage);
      setRedirect(true);
    }
  };

  console.log(redirect);
  if (redirect) {
    navigate("/page/" + page);
  }
  return (
    <>
      <div className="p-4 ">
        <div className="bg-gray-200 shadow-md shadow-gray-300 rounded-2xl mb-4">
          <header className="flex px-4 py-2 grow shrink-0 gap-4 items-center">
            <input
              type="text"
              placeholder="search..."
              value={currCar}
              onChange={(e) => {
                setCurrCar(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setSearchedCar(currCar);
              }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
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
        {searchedCar ? (
          cars
            .filter((car) => car.name == searchedCar)
            .map((filteredCar, key) => <CarPage key={key} car={filteredCar} />)
        ) : (
          <div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2  ">
              {cars.length > 0 &&
                cars
                  .slice(pageNo * 6 - 6, pageNo * 6)
                  .map((car, key) => <CarPage key={key} car={car} />)}
            </div>
            <div className=" flex bg-gray-200 justify-between rounded-2xl mt-2">
              <div className="py-1 px-3 text-gray-600">
                {pageNo * 6} of {cars.length}
              </div>
              <div className="cursor-pointer p-1">
                {cars.length > 0 && (
                  <div>
                    <span
                      onClick={() => selectPageHandler(pageNo - 1)}
                      className={pageNo > 1 ? "mx-1" : "opacity-0"}
                    >
                      ◀
                    </span>

                    {[...Array(cars.length / 6)].map((_, i) => {
                      return (
                        <span
                          key={i}
                          className={
                            pageNo === i + 1
                              ? "mx-1 border border-blue-500 bg-blue-500 text-gray-100 px-1"
                              : "mx-1"
                          }
                          onClick={() => selectPageHandler(i + 1)}
                        >
                          {i + 1}
                        </span>
                      );
                    })}

                    <span
                      onClick={() => selectPageHandler(pageNo + 1)}
                      className={
                        pageNo < cars.length / 6 ? "mx-1" : "opacity-0"
                      }
                    >
                      ▶
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
