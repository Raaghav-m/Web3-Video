import React, { useEffect, useState } from "react";

const Recommend = ({ arrayOfIpfsHash }) => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log("hello", arrayOfIpfsHash);
    arrayOfIpfsHash.map(async (el) => {
      const metadataUrl = "https://ipfs.io/ipfs/" + el;
      const x = (await fetch(metadataUrl)).json();
      console.log(x);
    });
  }, []);
  return <div className="uploaded-videos">hello</div>;
};

export default Recommend;
