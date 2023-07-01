import { BiSearchAlt } from "react-icons/bi";

const Search = () => {
  return (
    <div className="bg-white d-flex items-center" style={{ height: "40px" }}>
      <input
        placeholder="Search Items"
        type="text"
        style={{ border: "none", height: "100%" }}
      ></input>
      <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <BiSearchAlt size={30} />
      </div>
    </div>
  );
};

export default Search;
