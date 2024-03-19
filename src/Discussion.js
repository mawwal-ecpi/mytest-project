import React, { Component } from "react";
import discussionImage from './Images/discussion.png';
 
class Discussion extends Component {
  render() {
    return (
      <div>
        <img src={discussionImage} atl="discussion" width="450" height="300" />
        <ol>
          <li>Activities</li>
          <li>Artists</li>
          <li>Childcare</li>
          <li>Classes</li>
          <li>Events</li>
        </ol>
      </div>
    );
  }
}
 
export default Discussion;