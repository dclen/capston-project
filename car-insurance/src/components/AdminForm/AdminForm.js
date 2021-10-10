import React, { useState } from "react";
import "./AdminForm.css";
import { Button, Form, Input } from "semantic-ui-react";
import SingleDriver from "../SingleDriver/SingleDriver";
import axios from "axios";


function AdminForm() {
  const [driverId, setDriverId] = useState("");

  function onDelete(id) {
    const endpointURL = `https://6151d1834a5f22001701d461.mockapi.io/api/v1/people/${id}`;
    axios
      .delete(endpointURL).then(alert(`Driver ${id} Deleted`)).then(setDriverId(""))
      .catch((err) => {
        console.log(err);
      });
      
  }

  return (
    <div className="admin">
      <SingleDriver />
      <Form size="big">
        <Form.Group>
          <Form.Field inline>
            <label>Delete Driver</label>
            <input
              placeholder="Driver ID"
              onChange={(e) => setDriverId(e.target.value)}
              value={driverId}
            />
          </Form.Field>
          <Button color="red" type="submit" onClick={() => onDelete(driverId)}>
            Delete Driver
          </Button>
        </Form.Group>
      </Form>
      <Form size="big">
        <Form.Group>
          <Form.Field inline>
            <label>Update Phone</label>
            <input placeholder="Driver ID" />
            <input placeholder="Phone no." />
          </Form.Field>
          <Button color="green" type="submit">
            Update
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default AdminForm;
