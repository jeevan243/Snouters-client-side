import axios from "axios";
import { useState } from "react";

var petData = {
  name: "",
  city: "",
  address: "",
  capacity: "",
  costperday: "",
  verified: "",
  rating: "",
  image: "",
};

export const CreateEntity = () => {
  const [data, setData] = useState(petData);

  //handle change
  const handleChange = (e) => {
    const { value, id } = e.target;
    // console.log(value);

    setData({ ...data, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/petboarding", data).then((res) => {
      alert("Details saved Successfully");
    });
    setData(petData);
  };
  return (
    <>
      <div>
        <h2>Create Entity</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            onChange={handleChange}
            value={data.name}
          />
          <input
            type="text"
            placeholder="City"
            id="city"
            onChange={handleChange}
            value={data.city}
          />
          <input
            type="text"
            placeholder="Address"
            id="address"
            onChange={handleChange}
            value={data.address}
          />
          <input
            type="text"
            placeholder="Capacity"
            id="capacity"
            onChange={handleChange}
            value={data.capacity}
          />
          <input
            type="number"
            placeholder="Cost per day"
            id="costperday"
            onChange={handleChange}
            value={data.costperday}
          />
          <select id="verified" onChange={handleChange} value={data.verified}>
            <option>Verified</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          <select id="rating" onChange={handleChange} value={data.rating}>
            <option>Rating</option>
            <option style={{ textAlign: "center" }}>1</option>
            <option style={{ textAlign: "center" }}>2</option>
            <option style={{ textAlign: "center" }}>3</option>
            <option style={{ textAlign: "center" }}>4</option>
            <option style={{ textAlign: "center" }}>5</option>
          </select>
          <input
            type="text"
            placeholder="Image"
            id="image"
            onChange={handleChange}
            value={data.image}
          />
          <input type="Submit" id="submit" />
        </form>
      </div>
    </>
  );
};
