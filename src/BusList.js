import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./card.css";

const BusList = () => {
  const [bus, setBus] = useState([]);
  useEffect(() => {
    fetch("https://631b2feadc236c0b1eef847d.mockapi.io/bus")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setBus(res);
      });
  }, []);

  const formatedBusList = bus.map((bus) => {
    return (
      <>
        <div class="a-box col">
          <div class="img-container">
            <div class="img-inner">
              <div class="inner-skew">
                <img src={bus.BusImage} alt="bus-image" />
              </div>
            </div>
          </div>
          <div class="text-container">
            <hr className="top_hr" />
            <h3>
              <h6>Bus Name</h6>
              {bus.BusName}
            </h3>
            <hr className="buttom_hr" />
            <div className="container">
              <Link className="link_more" to={"../bus/" + bus.id}>
                View more
              </Link>
            </div>
          </div>
        </div>
        {/* <Link to={"/" + bus.id}>
          <h4>{bus.BusName}</h4>
        </Link> */}
      </>
    );
  });

  // return <div className="row">{formatedBusList}</div>;
  return (
    <>
      <div className="container">
        <div className="row">{formatedBusList}</div>
      </div>
    </>
  );
};

export default BusList;
