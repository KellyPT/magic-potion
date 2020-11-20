import React from 'react';
import { Field, reduxForm } from 'redux-form';

class OrderForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <p>{error}</p>
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

  renderQuantitySelectOption = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select className="ui fluid dropdown" {...input}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  renderStateSelectOption = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <select className="ui fluid dropdown" {...input}>
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
    this.props.submit(formValues);
  };

  render() {
    console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error success"
      >
        <h3 className="ui dividing header violet">Order Information</h3>
        <div className="ui grid">
          <div className="seven wide column">
            Image of Magic Potion goes here
          </div>
          <div className="three wide column">
            <Field
              name="quantity"
              component={this.renderQuantitySelectOption}
              label="Quantity"
            />
          </div>
          <div className="three wide column">
            <label>Total Cost</label>
          </div>
        </div>

        <h3 className="ui dividing header violet">Contact Information</h3>
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
          name="street1"
          component={this.renderTextInput}
          label="Address Line 1"
        />
        <Field
          name="street2"
          component={this.renderTextInput}
          label="Address Line 2"
        />

        <div className="fields">
          <div className="seven wide field">
            <Field name="city" component={this.renderTextInput} label="City" />
          </div>
          <div className="five wide field">
            <Field
              name="state"
              component={this.renderStateSelectOption}
              label="State"
            />
          </div>
          <div className="four wide field">
            <Field
              name="zip"
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
              name="phone"
              component={this.renderTextInput}
              label="Phone Number"
            />
          </div>
        </div>

        <h3 className="ui dividing header violet">Billing Information</h3>
        <div className="two fields">
          <div className="field">
            <Field
              name="ccNum"
              component={this.renderTextInput}
              label="Credit Card Number"
            />
          </div>
          <div className="field">
            <Field
              name="exp"
              component={this.renderTextInput}
              label="Expiry Date"
            />
          </div>
        </div>
        <div className="ui success message">
          <div className="header">Order Submitted</div>
          <p>You're all set for your magic potion!</p>
        </div>
        <div className="ui error message">
          <div className="header">Order Not Submitted</div>
          <p>You can't order more than 3 magic potions per month.</p>
        </div>
        <button className="ui button violet">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const fields = [
    'firstName',
    'lastName',
    'street1',
    'city',
    'state',
    'zip',
    'email',
    'phone',
    'ccNum',
    'exp'
  ];
  const errors = {};

  fields.forEach((field) => {
    if (!formValues[field]) {
      errors[field] = `Invalid input`;
    }
  });

  return errors;
};

export default reduxForm({
  form: 'orderForm',
  validate
})(OrderForm);
