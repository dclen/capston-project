import "./Create.css";
import React, { useState } from "react";
import { Button, Form, Card } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

function Create() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [additionalDrivers, setAdditionalDrivers] = useState(0);
  const [usedForCommercial, setUsedForCommercial] = useState("");
  const [usedOutsideState, setUsedOutsideState] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [firstRegistered, setFirstRegistered] = useState(new Date());

  let history = useHistory();

  const callMockAPI = () => {
    console.log(prefix + " " + firstName + " " + lastName);

    const formData = {
      prefix,
      firstName,
      lastName,
      telephoneNumber,
      addressLine1,
      addressLine2,
      city,
      postcode,
      vehicleType,
      engineSize,
      additionalDrivers,
      usedForCommercial,
      usedOutsideState,
      currentValue,
      firstRegistered,
    };

    const endpointURL =
      "https://6151d1834a5f22001701d461.mockapi.io/api/v1/people";
    axios
      .post(endpointURL, formData)
      .then((response) => history.push("/read"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <Form>
        <Form.Group>
          <Form.Field width={3}>
            <label>Prefix</label>
            <select
              placeholder="Prefix"
              onChange={(e) => setPrefix(e.target.value)}
            >
              <option value="" disabled selected hidden>
                ...
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
          </Form.Field>
          <Form.Field width={7}>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Field>
          <Form.Field width={7}>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label>Telephone Number</label>
          <input
            required
            placeholder="Telephone Number"
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 1</label>
          <input
            placeholder="Address Line 1"
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 2</label>
          <input
            placeholder="Address Line 2"
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Postcode</label>
          <input
            placeholder="Postcode"
            onChange={(e) => setPostcode(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Vehicle Type</label>
          <select
            placeholder="Vehicle Type"
            onChange={(e) => setVehicleType(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Please Choose...
            </option>
            <option value="Cabriolet">Cabriolet</option>
            <option value="Coupe">Coupe</option>
            <option value="Estate">Estate</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Other">Other</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>Engine Size</label>
          <select
            placeholder="Engine Size"
            onChange={(e) => setEngineSize(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Please Choose...
            </option>
            <option value="1000cc">1000cc</option>
            <option value="1600cc">1600cc</option>
            <option value="2000cc">2000cc</option>
            <option value="2500cc">2500cc</option>
            <option value="3000cc">3000cc</option>
            <option value="Other">Other</option>
          </select>
        </Form.Field>
        <Form.Field>
          <label>
            How many <b>additional drivers</b> will use the vehicle?
          </label>
          <select
            placeholder="Engine Size"
            onChange={(e) => setEngineSize(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Please Choose...
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </Form.Field>{" "}
        <Form.Field>
          <Form.Group inline>
            <label>
              Will the vehicle be <b>used for commercial purposes</b>?
            </label>
            <Form.Radio
              label="Yes"
              value="yes"
              checked={usedForCommercial === "yes"}
              onChange={() => setUsedForCommercial("yes")}
            />
            <Form.Radio
              label="No"
              value="no"
              checked={usedForCommercial === "no"}
              onChange={() => setUsedForCommercial("no")}
            />
          </Form.Group>
        </Form.Field>
        <Button type="submit" onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
