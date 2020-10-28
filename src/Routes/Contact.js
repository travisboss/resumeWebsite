import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
      <div className="row">
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpwqyk"
        method="POST"
      >
            <fieldset>
              <div>
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input type="text" size="35" id="name" name="contactName" required/>
              </div>
              <div>
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="text" size="35" id="email" name="_replyto"  required/>
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <input type="text" size="35" id="subject" name="_subject"/>
              </div>
              <div>
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea cols="50" rows="15" id="message" name="contactMessage" required ></textarea>
              </div>
            </fieldset>
        {status === "SUCCESS" ? <p>Thanks!</p> : <button className="submit">Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
    </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}