const SearchBar = () => {
  return (
    <div className="my-2 sm:p-10 p-3 w-[100%]   flex justify-center">
      <div className="flex flex-col w-[100%]">
        <div className="rounded-xl border bg-gradient-to-r from-[#693268] via-[black] to-[#4c054b] p-6 shadow-lg">
          <form className="">
            <div className="relative mb-10 w-full flex  items-center justify-between rounded-md">
              <svg
                className="absolute left-2 block h-5 w-5 text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="name"
                name="search"
                className="h-12 w-full text-black cursor-text rounded-md border border-white bg-white py-4 pr-40 pl-12 shadow-sm outline-none focus:border-[#693268] focus:ring focus:ring-[#693268] focus:ring-opacity-50"
                placeholder="Search Courses ... "
              />
            </div>

            {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="flex flex-col">
                <label for="name" className="text-sm font-medium text-stone-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Raspberry juice"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label
                  for="manufacturer"
                  className="text-sm font-medium text-stone-600"
                >
                  Manufacturer
                </label>

                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Cadberry</option>
                  <option>Starbucks</option>
                  <option>Hilti</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label for="date" className="text-sm font-medium text-stone-600">
                  Date of Entry
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                />
              </div>

              <div className="flex flex-col">
                <label for="status" className="text-sm font-medium text-stone-600">
                  Status
                </label>

                <select
                  id="status"
                  className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Dispached Out</option>
                  <option>In Warehouse</option>
                  <option>Being Brought In</option>
                </select>
              </div>
            </div> */}

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button className="rounded-lg bg-white px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">
                Reset
              </button>
              <button className="rounded-lg bg-indigo-500 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
