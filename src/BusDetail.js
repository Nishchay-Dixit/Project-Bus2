import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./BusDetail.css";

const BusDetail = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [bus, setBus] = useState([]);

  useEffect(() => {
    fetch("https://631b2feadc236c0b1eef847d.mockapi.io/bus/" + params.id, {
      method: "GET"
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBus(res);
      });
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row mt-5 mb-4">
          <div className="col-sm-4 mt-5 mb-4">
            <img src={bus.BusImage} />
          </div>
          <div className="colunm-h col-sm-8 mt-5 mb-4">
            <h4 className="text-h">Bus Details</h4>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col">
                  <h5 className="mb-3">Bus Name:</h5>
                  <h5 className="mb-3">Bus RTO Number:</h5>
                  <h5 className="mb-3">Bus Driver Name:</h5>
                  <h5 className="mb-3">Bus Average:</h5>
                  <h5 className="mb-3">Bus No. Of KM:</h5>
                </div>
                <div className="col">
                  <h5 className="mb-3">{bus.BusName}</h5>
                  <h5 className="mb-3">{bus.BusRTONumber}</h5>
                  <h5 className="mb-3">{bus.BusDriverName}</h5>
                  <h5 className="mb-3">{bus.BusAverage}</h5>
                  <h5 className="mb-3">{bus.BusNoOfKM}</h5>
                </div>
              </div>

              <div className="row">
                <div className="btn-group ml-3 mt-3">
                  <Link className="mr-4" to="../BusList">
                    <Button variant="outlined">Back</Button>
                  </Link>
                  <Button
                    variant="outlined"
                    className="mr-4"
                    onClick={() => {
                      fetch(
                        "https://631b2feadc236c0b1eef847d.mockapi.io/bus/" +
                          params.id,
                        {
                          method: "DELETE"
                        }
                      ).then((res) => {
                        navigate("../BusList");
                      });
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      navigate("../bus/edit/" + params.id);
                    }}
                  >
                    edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusDetail;
