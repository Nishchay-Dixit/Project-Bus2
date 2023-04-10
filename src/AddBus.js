import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "./addbus.css";

const AddBus = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [bus, setBus] = useState([]);

  useEffect(() => {
    if (params.id > 0) {
      fetch("https://631b2feadc236c0b1eef847d.mockapi.io/bus/" + params.id, {
        method: "GET"
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setBus(res);
        });
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <h4>Edit/Add Bus Details</h4>
        </div>
        <hr />
        <form noValidate autoComplete="off">
          <div className="row">
            <div className="col mt-2 mb-3">
              <h5 className="mt-4">Bus Name</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusName}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusName: e.target.value });
                }}
              />
              <h5 className="mt-4">Bus RTO Number</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusRTONumber}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusRTONumber: e.target.value });
                }}
              />
              <h5 className="mt-4">Bus Driver Name</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusDriverName}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusDriverName: e.target.value });
                }}
              />
              <h5 className="mt-4">Bus Average</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusAverage}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusAverage: e.target.value });
                }}
              />
              <h5 className="mt-4">Bus number of K.M.</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusNoOfKM}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusNoOfKM: e.target.value });
                }}
              />
              <h5 className="mt-4">Bus Image</h5>
              <TextField
                fullWidth
                className="mr-2 ml-2 mt-3"
                variant="outlined"
                value={bus.BusImage}
                type="text"
                onChange={(e) => {
                  setBus({ ...bus, BusImage: e.target.value });
                }}
              />
            </div>
          </div>
          <div className="btn-row row mb-3">
            <Button
              variant="outlined"
              onClick={() => {
                if (params.id > 0) {
                  fetch(
                    "https://631b2feadc236c0b1eef847d.mockapi.io/bus/" +
                      params.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(bus),
                      headers: { "Content-Type": "application/json" }
                    }
                  ).then(() => {
                    navigate("/buslist");
                  });
                } else {
                  fetch("https://631b2feadc236c0b1eef847d.mockapi.io/bus/", {
                    method: "POST",
                    body: JSON.stringify(bus),
                    headers: {
                      "Content-Type": "application/json"
                    }
                  }).then(() => {
                    navigate("/buslist");
                  });
                }
              }}
            >
              {params.id > 0 && "Edit "}
              {!(params.id > 0) && "Add "}
              Bus
            </Button>
          </div>
        </form>
      </div>
      <table>
        <tr>
          <td colSpan="3"></td>
        </tr>
      </table>
    </>
  );
};

export default AddBus;
