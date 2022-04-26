import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "./API";

export const Entity = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(`${API}/pets/${id}`).then((res) => {
      setData(res.data);
    });
  };
  console.log(data);

  return (
    <>
      <h2></h2>

      <div id="petData">
        <div>
          <img src={data.image} style={{ width: "700px" }} />
        </div>
        <div id="indData">
          <h2>Pet Details</h2>
          <hr />
          <h3>Name: {data.name}</h3>
          <h3>Capacity: {data.capacity}</h3>
          <h3>Cost Per Day: {data.costperday} Rs/-</h3>
          <h3>Address: {data.address}</h3>
          <h3>City: {data.city}</h3>
          <h3>Rating: {data.rating}</h3>
          <h3>verified: {data.verified}</h3>
        </div>
      </div>
    </>
  );
};
