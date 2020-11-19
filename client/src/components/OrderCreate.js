import React from 'react';
import { Field, reduxForm } from 'redux-form';

class OrderCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderTextInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderQuantitySelectOption = ({ label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select className="ui fluid dropdown">
          <option value="" />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  renderStateSelectOption = ({ label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select className="ui fluid dropdown">
          <option value="" />
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <h3 className="ui dividing header">Order Information</h3>
        <div className="ui grid">
          <div className="six wide column">Image Of Product goes here</div>
          <div className="two wide column">
            <Field
              name="quantity"
              component={this.renderQuantitySelectOption}
              label="Quantity"
            />
          </div>
          <div className="two wide column">Total Cost</div>
        </div>

        <h3 className="ui dividing header">Contact Information</h3>
        <div className="two fields">
          <div className="field">
            <Field
              name="firstName"
              component={this.renderTextInput}
              label="First Name"
            />
          </div>
          <div className="field">
            <Field
              name="lastName"
              component={this.renderTextInput}
              label="Last Name"
            />
          </div>
        </div>
        <Field
          name="addressLine1"
          component={this.renderTextInput}
          label="Address Line 1"
        />
        <Field
          name="addressLine2"
          component={this.renderTextInput}
          label="Address Line 2"
        />

        <div className="fields">
          <div class="seven wide field">
            <Field name="city" component={this.renderTextInput} label="City" />
          </div>
          <div class="five wide field">
            <Field
              name="state"
              component={this.renderStateSelectOption}
              label="State"
            />
          </div>
          <div class="four wide field">
            <Field
              name="zipcode"
              component={this.renderTextInput}
              label="Zip Code"
            />
          </div>
        </div>

        <div className="two fields">
          <div className="field">
            <Field
              name="email"
              component={this.renderTextInput}
              label="Email"
            />
          </div>
          <div className="field">
            <Field
              name="phoneNumber"
              component={this.renderTextInput}
              label="Phone Number"
            />
          </div>
        </div>

        <h3 className="ui dividing header">Billing Information</h3>
        <div className="two fields">
          <div className="field">
            <Field
              name="creditCardNumber"
              component={this.renderTextInput}
              label="Credit Card Number"
            />
          </div>
          <div className="field">
            <Field
              name="creditCardExpiryDate"
              component={this.renderTextInput}
              label="Expiry Date"
            />
          </div>
        </div>

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.firstName) {
    errors.firstName = 'You must enter your first name';
  }

  if (!formValues.lastName) {
    errors.lastName = 'You must enter your last name';
  }

  return errors;
};

export default reduxForm({
  form: 'orderCreate',
  validate
})(OrderCreate);
