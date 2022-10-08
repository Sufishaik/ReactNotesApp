import React, { useEffect, useState } from "react";
import ModalDiv from "./ModalDiv";
import Nav from "./Nav";
import SingleNode from "./SingleNode";
import {Frown} from "react-feather"

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(JSON.parse(localStorage.getItem("myNotes")) || []);
  }, []);

  const [showModal, setshowModal] = useState(false);

  const refresher = () =>{
    setdata(JSON.parse(localStorage.getItem("myNotes")) || []);
  }

  return (
    <div>
      <Nav setshowModal={setshowModal} data={data} setdata={setdata} refresher={refresher}/>
      {showModal&& (
        <ModalDiv showModal={showModal} setshowModal={setshowModal} refresher={refresher} />
      )}

     <div className="row justify-content-between mx-0 p-5">
          {!data.length ? 
           <h1 className="text-center display-1 fw-light text-secondary my-5">
            <Frown size={100}/> No Notes. Create new One
           </h1>
           : 
           data.map((item, i) =>{
           return  <SingleNode key={item.id} item={item} refresher={refresher}/>
           })
          }
          
     </div>
    </div>
  );
}

export default Home;
