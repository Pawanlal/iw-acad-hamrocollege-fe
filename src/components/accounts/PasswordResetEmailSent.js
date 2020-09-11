import React, { Component } from "react";

export default class PasswordResetEmailSent extends Component {
  render() {
    return (
      <div>
        <p>
          We've emailed you instructions for setting your password, if an
          account exists with the email you entered. You should receive them
          shortly.
        </p>
        <p>
          If you don't receive an email, please make sure you've entered the
          address you registered with, and check your spam folder.
        </p>
      </div>
    );
  }
}
