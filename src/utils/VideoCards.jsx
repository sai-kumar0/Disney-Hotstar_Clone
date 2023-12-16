import React from "react";
import disney from "./../assets/img/disney.png";
import pixar from "./../assets/img/pixar.png";
import marvel from "./../assets/img/marvel.png";
import starwar from "./../assets/img/starwar.png";
import nationalG from "./../assets/img/nationalG.png";

import disneyV from "./../assets/vid/disney.mp4";
import pixarV from "./../assets/vid/pixar.mp4";
import marvelV from "./../assets/vid/marvel.mp4";
import starwarV from "./../assets/vid/star-wars.mp4";
import nationalGeographicV from "./../assets/vid/national-geographic.mp4";

function VideoCards() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];
  return (
    <div className="movieCard">
      {productionHouseList.map((item, index) => (
        <div className="videoCard" key={index}>
          <video src={item.video} autoPlay loop playsInline muted />
          <img src={item.image} key={item.id} />
        </div>
      ))}
    </div>
  );
}

export default VideoCards;
