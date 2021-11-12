import React from "react";

const Order = (props) => {
  const { formValues, updateForm, submitForm, formErrors } = props;

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;

    updateForm(name, valueToUse);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submitForm();
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <div className="form-errors">
        <input
         formErrors={formErrors.name}
         />
         </div>
      <label>
        {" "}
        Customer Name:&nbsp;
        <input
          type="text"
          name="name"
          id="name-input"
          value={formValues.name}
          onChange={onChange}
        />
      </label>
      <label>
        {" "}
        Size:&nbsp;
        <select
          id="size-dropdown"
          name="size"
          value={formValues.size}
          onChange={onChange}
        >
          <option value=""> Select a Pizza Size </option>
          <option value="small"> Small </option>
          <option value="medium"> Medium </option>
          <option value="Large"> Large </option>
        </select>
      </label>

      <div className="toppings">
        <label>
          <h3>Top it Off</h3>
        </label>
        <label>
          {" "}
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            onChange={onChange}
            checked={formValues.pepperoni}
          />
        </label>
        <label>
          {" "}
          Olives
          <input
            type="checkbox"
            name="olives"
            onChange={onChange}
            checked={formValues.olives}
          />
        </label>{" "}
        Bacon
        <label>
          <input
            type="checkbox"
            name="bacon"
            onChange={onChange}
            checked={formValues.bacon}
          />
        </label>
        <label>
          {" "}
          Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            onChange={onChange}
            checked={formValues.mushrooms}
          />
        </label>
      </div>

      <label>
        {" "}
        Special Instructions:&nbsp;
        <input id="special-text" type="text" />
      </label>
      <label>
        <input id="order-button" type="submit" />
      </label>
    </form>
  );
};

export default Order;
