import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  //getData

  const getData = () => {
    axios.get("http://localhost:8080/petboarding").then((res) => {
      setData(res.data);
    });
  };
  //filter

  const handlefilterbycity = (e) => {
    var { value } = e.target;
    // console.log(value);
    if (value == "----") {
      getData();
    } else {
      const newData = data.filter((e) => {
        if (value == e.city) {
          return e;
        }
      });
      setData(newData);
    }
  };
  // console.log(data);

  const handlefilterbyVerified = (e) => {
    var { value } = e.target;
    // console.log(value);
    if (value == "---") {
      getData();
    } else {
      const newData = data.filter((e) => {
        if (value == e.verified) {
          return e;
        }
      });
      setData(newData);
    }
  };

  //Sorting

  const handleByPriceAsc = () => {
    data.sort((a, b) => a.costperday - b.costperday);
    setData([...data]);
  };

  const handleByPriceDsc = () => {
    data.sort((a, b) => b.costperday - a.costperday);
    setData([...data]);
  };

  const handleByRatingAsc = () => {
    data.sort((a, b) => a.rating - b.rating);
    setData([...data]);
  };

  const handleByRatingDsc = () => {
    data.sort((a, b) => b.rating - a.rating);
    setData([...data]);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "50px", marginLeft: "200px" }}>
        <div>
          Filter By City{" "}
          <select id="filterbycity" onChange={handlefilterbycity}>
            <option>----</option>
            <option>Hyderabad</option>
            <option>Banglore</option>
          </select>
        </div>
        <div>
          Filter By verified{" "}
          <select id="filterbyverified" onChange={handlefilterbyVerified}>
            <option>---</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        <div>
          {" "}
          Sort By Rating:{" "}
          <Button variant="contained" size="small" onClick={handleByRatingAsc}>
            ASC
          </Button>{" "}
          <Button variant="contained" size="small" onClick={handleByRatingDsc}>
            DSC
          </Button>
        </div>

        <div>
          {" "}
          Sort By Cost:{" "}
          <Button variant="contained" size="small" onClick={handleByPriceAsc}>
            ASC
          </Button>{" "}
          <Button variant="contained" size="small" onClick={handleByPriceDsc}>
            DSC
          </Button>
        </div>
      </div>
      <br />
      <div>
        <TableContainer style={{ width: "80%", margin: "auto" }}>
          <Table>
            <TableHead style={{ backgroundColor: "smoke" }}>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Capacity</TableCell>
                <TableCell align="center">Costperday</TableCell>
                <TableCell align="center">Verified</TableCell>
                <TableCell align="center">Rating</TableCell>
                <TableCell align="center">Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((e) => {
                return (
                  <TableRow>
                    <>
                      <TableCell align="center">{e.id}</TableCell>
                      <TableCell align="center">{e.name}</TableCell>
                      <TableCell align="center">{e.city}</TableCell>
                      <TableCell align="center">{e.address}</TableCell>
                      <TableCell align="center">{e.capacity}</TableCell>
                      <TableCell align="center">{e.costperday}</TableCell>
                      <TableCell align="center">{e.verified}</TableCell>
                      <TableCell align="center">{e.rating}</TableCell>
                      <TableCell align="center">
                        <Button size="small"
                          variant="outlined"
                          onClick={() => {
                            navigate(`/listing/${e.id}`);
                          }}
                        >
                          Click
                        </Button>
                      </TableCell>
                    </>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
