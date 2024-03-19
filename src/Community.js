import React, { Component } from "react";
import communityImage from './Images/community.png';
 
class Community extends Component {
  render() {
    return (
      <div>
        <img src={communityImage} atl="community" width="450" height="300" />
        <ol>
            <li>Antiques</li>
            <li>Appliances</li>
            <li>Arts+crafts</li>
            <li>Atv/utv/sno</li>
            <li>Auto parts</li>
        </ol>
      </div>
    );
  }
}
 
export default Community;