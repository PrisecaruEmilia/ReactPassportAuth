import React, { Component } from 'react';

export class Profile extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid bootstrap-snippet header-container">
          <div class="bg-white">
            <div class="py-5">
              <div class="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt
                  class="d-block ui-w-100 rounded-circle"
                />
                <div class="media-body ml-5">
                  <h4 class="font-weight-bold mb-4">John Doe</h4>
                  <ul class="list-group">
                    <li class="list-group-item">Name: John Doe</li>
                    <li class="list-group-item">Email: john@example.com</li>
                    <li class="list-group-item">Account created at: Date</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr class="m-0" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
