import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import Unauthorized from "../utils/Unauthorized";

import ProfileContent from "./ProfileContent";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("jwtToken");
    this.state = {
      token
    };
  }

  onClickPost = post_id => {
    this.props.history.push(`/view/${post_id}`);
  };


  render() {
    return (
      <div class="container my-5" style={{ paddingTop: "65px"}}>
        <div class="row justify-content-md-center">
          <div class="col-sm-10 col-md-8 mx-auto">
            <ProfileContent 
              onClickPost={this.onClickPost} 
              userid={this.props.match.params.userid}
            />
          </div>
        </div>
      </div>
    );
  }
}
