import "./styles.css";
import { useState, useEffect } from "react";
import CardDetails from "./CardDetails";
import axios from "axios";
const Card = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  console.log(data);
  const [toggle, setToggle] = useState(false);

  const viewDetail = (id) => {
    setToggle(true);
    setData2([data[id]]);
    setData3(data[id]);
  };
  const hideDetail = (id) => {
    setToggle(false);
    setData(data);
    setData2(data);
    setData3("");
  };
  useEffect(() => {
    async function getAllData() {
      try {
        const allData = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(allData.data);
        setData(allData.data);
        setData2(allData.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getAllData();
  }, []);
  return (
    <>
      {data2.map((data, index) => {
        return (
          <>
            <div className="container">
              <div className="card">
                <div className="title">
                  <p>{data.name}</p>
                </div>
                <div className="title2">
                  <h3>CONTACT</h3>
                  <span>{data.phone}</span>
                </div>
                <div className="title2">
                  <h3>CITY</h3>
                  <span>{data.address.city}</span>
                </div>
                <div className="title2">
                  <h3>STATE</h3>
                  <span>Maharashtra</span>
                </div>

                {toggle === false ? (
                  <button onClick={() => viewDetail(index)}>
                    View Details
                  </button>
                ) : (
                  <button onClick={() => hideDetail(index)}>
                    Hide Details
                  </button>
                )}
              </div>
              {toggle && <CardDetails data={data3} />}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Card;
