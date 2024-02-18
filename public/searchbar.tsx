import Link from "next/link";
const SearchBar = () =>{
    return(
        <>
        <div className="flex items-center bg-white px-4 py-2 fixed top-16 h-16 w-full z-5 border-2 border-gray-300">
            <div className="my-1 flex flex-col justify-center">
              <input
                type="text"
                id="searchbar"
                name="searchbar"
                className="ml-16 p-2 px-6 w-full h-8 border-2 rounded-md bg-white border-gray-300 text-xs"
                placeholder="&#xf002;     Cari disini..."
              />
            </div>
            <Link
              href="#"
              type="button"
              className="bg-blue-500 text-white px-5 h-8 pt-1 hover:bg-blue-600 rounded-md w-1/14 ml-20 text-sm text-center"
            >
              Cari
            </Link>
          </div>
        </>
    );
};
export default SearchBar