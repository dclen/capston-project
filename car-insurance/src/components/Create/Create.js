import "./Create.css";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Form, Input } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

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
  const [currentValue, setCurrentValue] = useState(0);
  const [firstRegistered, setFirstRegistered] = useState(new Date());

  const [validForm, setValidForm] = useState(false);
  const [invalidPrefix, setInvalidPrefix] = useState(true);
  const [invalidFirstName, setInvalidFirstName] = useState(true);

  const prefixSelections = [
    { value: "Mr" },
    { value: "Mrs" },
    { value: "Miss" },
    { value: "Ms" },
    { value: "Dr" },
  ];

  const vehicleTypeSelections = [
    { value: "Cabriolet" },
    { value: "Coupe" },
    { value: "Estate" },
    { value: "Hatchback" },
    { value: "Other" },
  ];

  const engineSizeSelections = [
    { value: "1000cc" },
    { value: "1600cc" },
    { value: "2000cc" },
    { value: "2500cc" },
    { value: "3000cc" },
    { value: "Other" },
  ];

  const additionalDriversSelections = [
    { value: "0" },
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
  ];

  const handlePrefixChange = (event) => {
    setPrefix(event.target.value);
  };

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleEngineSizeChange = (event) => {
    setEngineSize(event.target.value);
  };

  const handleAdditionalDriversChange = (event) => {
    setAdditionalDrivers(event.target.value);
  };

  const handleSubmit = () => {
    //handleSubmit here
  };

  let history = useHistory();

  const callMockAPI = () => {
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
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <TextField
                  required
                  fullWidth
                  select
                  id="prefix"
                  value={prefix}
                  label="Prefix"
                  placeholder="Prefix"
                  onChange={handlePrefixChange}
                >
                  {prefixSelections.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="telephoneNumber"
                label="Telephone Number"
                name="telephoneNumber"
                placeholder="Telephone Number"
                onChange={(e) => setTelephoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="addressLine1"
                label="Address Line 1"
                name="addressLine1"
                placeholder="Address Line 1"
                onChange={(e) => setAddressLine1(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="addressLine2"
                label="Address Line 2"
                name="addressLine2"
                placeholder="Address Line 2"
                onChange={(e) => setAddressLine2(e.target.value)}
              />
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  name="city"
                  label="City"
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="Postcode"
                  name="postcode"
                  placeholder="Postcode"
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  select
                  value={vehicleType}
                  label="Vehicle Type"
                  name="vehicleType"
                  placeholder="Vehicle Type"
                  onChange={handleVehicleTypeChange}
                >
                  {vehicleTypeSelections.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  required
                  fullWidth
                  select
                  value={engineSize}
                  label="Engine Size"
                  name="engineSize"
                  placeholder="Engine Size"
                  onChange={handleEngineSizeChange}
                >
                  {engineSizeSelections.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <TextField
                required
                fullWidth
                select
                value={additionalDrivers}
                label="Additional Drivers"
                name="additionalDrivers"
                placeholder="Additional Drivers"
                onChange={handleAdditionalDriversChange}
              >
                {additionalDriversSelections.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
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
            <Form.Field>
              <Form.Group inline>
                <label>
                  Will the vehicle be <b>used outside the registered state</b>?
                </label>
                <Form.Radio
                  label="Yes"
                  value="yes"
                  checked={usedOutsideState === "yes"}
                  onChange={() => setUsedOutsideState("yes")}
                />
                <Form.Radio
                  label="No"
                  value="no"
                  checked={usedOutsideState === "no"}
                  onChange={() => setUsedOutsideState("no")}
                />
              </Form.Group>
            </Form.Field>
            <Form.Field width={5}>
              <label>
                What is the <b>current value</b> of the vehicle?
              </label>
              <Input
                label="£"
                type="number"
                min={0}
                max={50000}
                placeholder="Vehicle Value"
                onChange={(e) => setCurrentValue(e.target.value)}
              />
            </Form.Field>
            <Form.Field width={5}>
              <label>When was vehicle first registered?</label>
              <Input
                type="date"
                onChange={(e) => setFirstRegistered(e.target.value)}
              />
            </Form.Field>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                size="large"
                variant="contained"
                onClick={() => callMockAPI()}
              >
                Retrieve Quote
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Create;
