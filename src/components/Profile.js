import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export class Profile extends Component {
  render() {
    let name;
    let email;
    let created_at;

    if (this.props.user) {
      name = this.props.user.name;
      email = this.props.user.email;
      created_at = this.props.user.created_at
        ? this.props.user.created_at.substring(0, 10)
        : '';
    }

    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <div className="container-fluid bootstrap-snippet header-container">
          <div className="bg-white">
            <div className="py-5">
              <div className="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  alt="Avatar 1"
                  className="d-block ui-w-100 rounded-circle"
                />
                <div className="media-body ml-5">
                  <h4 className="font-weight-bold mb-4">{name}</h4>
                  <ul className="list-group">
                    <li className="list-group-item">Name: {name}</li>
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">
                      Account created at: {created_at}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="m-0" />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
