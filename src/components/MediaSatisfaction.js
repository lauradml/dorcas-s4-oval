import React from "react";
import "../styles/MediaSatisfaction.css";

class MediaSatisfaction extends React.Component {
  render() {
    return (
      <div className="satisfation__media-equip">
        <div className="satisfaction__media-equip--data media-equip__title">
          Team Media
        </div>
        <div className="satisfaction__media-equip--data media-equip__initial-data">
          Initial media
          <span className="media_numbers red">4</span>
        </div>
        <div className="satisfaction__media-equip--data media-equip__end-data">
          Final media
          <span className="media_numbers green">8</span>
        </div>
        <div className="satisfaction__media-equip--data media-equip__job-data">
          Job media
          <span className="media_numbers">7</span>
        </div>
      </div>
    );
  }
}

export default MediaSatisfaction;
