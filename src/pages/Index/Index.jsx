import React from 'react'
import { Button, List } from '../../component'
import "./Index.css";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favlist } from "../../store/store";

function Index() {

  const dispatch = useDispatch();
  const table = useSelector((state) => {
    return state.AddFav;
  });
  const route=useNavigate()
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
  function handledeLETE(index){
   dispatch(favlist.actions.ondelete(index));
  }
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h3>Welcome to Favourite NPM Package</h3>
        <br />

        <div className="container">
          <br />
          <br />
          <p>You dont have any fav package yet.Please Add</p>
          <br />
          <br />
          <Button
            onClick={() => {
             
              route("/addfav");
            }}
            style={style}
            value={"Add"}
          />
        </div>
      </div>

     
        <div>
          <table style={{ border: "1px solid" }}>
            <tr style={{ border: "1px solid" }}>
              <th style={{ border: "1px solid" }}>Package Name</th>
              <th style={{ border: "1px solid" }}>Action</th>
            </tr>
            {table.map((e, index) => (
              <List onClick={() => handledeLETE(index)} value={e.packageName} />
            ))}
          </table>
        </div>
   
    </div>
  );
}

export default Index