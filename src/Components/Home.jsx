import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authReducer } from "../Redux/auth/reducer";
import {
  getApiData,
  handleByPriceAsc,
  handleByPriceDsc,
  handleByRatingAsc,
  handleByRatingDsc,
} from "../Redux/pet_boarding/action";

export const Home = () => {
  const dispatch = useDispatch();
  const { petData } = useSelector((store) => store.petData);
  const { user_status } = useSelector((store) => store.auth);
  const navigate = useNavigate();



  useEffect(() => {
    console.log(user_status)
    dispatch(getApiData());
  }, []);

  //filter by city
  const handlefilterbycity = (e) => {
    var { value } = e.target;
    if (value == "----") {
      dispatch(getApiData());
    } else {
      dispatch(getApiData(value, "city"));
    }
  };

  //filter by verified
  const handlefilterbyVerified = (e) => {
    var { value } = e.target;
    if (value == "---") {
      dispatch(getApiData());
    } else {
      dispatch(getApiData(value, "verified"));
    }
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
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(handleByRatingAsc())}
          >
            ASC
          </Button>{" "}
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(handleByRatingDsc())}
          >
            DSC
          </Button>
        </div>

        <div>
          {" "}
          Sort By Cost:{" "}
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              dispatch(handleByPriceAsc());
            }}
          >
            ASC
          </Button>{" "}
          <Button
            variant="contained"
            size="small"
            onClick={() => {
              dispatch(handleByPriceDsc());
            }}
          >
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
              {user_status ? <> {petData.map((e) => {
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
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => {
                            navigate(`/pets/${e._id}`);
                          }}
                        >
                          Click
                        </Button>
                      </TableCell>
                    </>
                  </TableRow>
                );
              })}
              </> : <CircularProgress/>}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};
