import React from "react";
import { Button, Filter } from "../../component";
import { useEffect, useState } from "react";
import { PackageSearch } from "../../services/services";
import { useDispatch } from "react-redux";
import {favlist} from "../../store/store"
import { useNavigate } from "react-router-dom";
function AddFav() {
  const [query, setQuery] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [comment, setComment] = useState("");
  let route=useNavigate()
 const dispatch = useDispatch();
  function handleRadioChange(e){
    setSelectedValue(e.target.value);
  }
  function handleSubmit(){
   
    let favItem = {
      packageName: selectedValue,
      comment: comment
    };
    dispatch(favlist.actions.updateFavlist(favItem));
     route("/");
  }
  useEffect(() => {
    //  PackageSearch(query).then((r)=> setsearchData(r.results));
   if(query.length){
     fetch(`https://api.npms.io/v2/search?q=${query}`)
       .then((r) => r.json())
       .then((data) => setsearchData(data.results));
   }
  }, [query]);
   console.log(searchData)
  let style = {
    backgroundColor: "rgb(164, 14, 14)",
    color: "white",
    fontSize: "1rem",
    padding: "8px",
    width: "5rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "10px",
  };
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <br />
      <h5>Search for the Npm Package</h5>

      <input
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          height: "2rem",
          paddingLeft: "15px",
          borderRadius: "5px",
        }}
        type="text"
        placeholder="Search"
      />
      <div>
        <br />
        <h5>Result</h5>

        <div
          style={{ overflowY: "scroll", border: "1px solid", height: "20vh" }}
        >
          {" "}
          {searchData.map((e) => (
            <Filter
              value={e.package.name}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>
      </div>
      <div>
        <br />
        <h5>Why is this your Fav</h5>
        <input
        onChange={(e)=>setComment(e.target.value)}

          required
          type="textarea"
          style={{ height: "14vh", width: "100%", borderRadius: "10px" }}
        />
      </div>
      <br />
      <Button onClick={handleSubmit} style={style} value={"Submit"} />
    </div>
  );
}

export default AddFav;
