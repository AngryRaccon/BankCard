import React from "react";
import InputMask from "react-input-mask";
import ReactIScroll from "react-iscroll";
import iScroll from "iscroll";
import "./form.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      cardNumber: "",
      date: ""
    };
  }

  setName = e => {
    this.setState({ name: e.target.value });
  };

  setCardNumber = e => {
    this.setState({ cardNumber: e.target.value });
  };

  setDateExp = e => {
    this.setState({ date: e.target.value });
  };

  setSecurityCode = e => {
    let input = e.target.value;
    if (input.length < 3) {
      this.setState({ code: input.value });
    } else {
      e.target.value = input.substring(0, 3);
    }
  };

  render() {
    return (
      <>
        <h1>Payment Information</h1>
        <form className={`card_form`}>
          <label>
            Name: <input type="text" name="name" onChange={this.setName} />
          </label>
          <label>
            Card Number:{" "}
            <InputMask
              {...this.props}
              mask="9999 9999 9999 9999"
              maskChar="X"
              alwaysShowMask={true}
              className="card_number"
              onChange={this.setCardNumber}
            />
          </label>
          <label>
            Expiration (mm/yy):{" "}
            <InputMask
              mask="99/99"
              /*  maskPlaceholder="mm/yy" */
              className="card_expiration"
              onChange={this.setDateExp}
            />
          </label>
          <label>
            Security Code:{" "}
            <input
              type="number"
              name="security_code"
              className="security_code"
              onChange={this.setSecurityCode}
            />
          </label>
          <input className="btn_submit" type="submit" value="Submit" />
        </form>
        <div className="card_container">
          <div className="flipper">
            <div className="card front">
              <div className="card_item card_content">card number</div>
              <div className="card_item user_card">{this.state.cardNumber}</div>
              <div className="card_item card_content">
                <div>cardholder name</div>
                <div>expiration</div>
              </div>

              <div className="card_item">
                <div className="scroll_wrapper">
                  <ReactIScroll
                    className={"scroll"}
                    iScroll={iScroll}
                    options={{
                      mouseWheel: true,
                      scrollbars: true,
                      scrollX: true
                    }}
                  >
                    <div className="user_name">{this.state.name}</div>
                  </ReactIScroll>
                </div>
                <div className="user_expiration">{this.state.date}</div>
              </div>
            </div>
            <div className="card back"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Form;
