import React from "react";
import { Card } from "../../../component";
import {
  Form,
  Box,
  FormField,
  RadioButtonGroup,
  Button,
  RadioButton
} from "grommet";

export const UserForm = props => {
  return (
    <Card>
      <Form onSubmit={props.onSubmit} value={props.user}>
        <Box gap="medium">
          <Box direction="row" gap="small">
            <Box fill>
              <FormField
                label="First name"
                name="first_name"
                width="medium"
                required={true}
              />
            </Box>
            <Box fill>
              <FormField label="Last name" name="last_name" />
            </Box>
          </Box>

          <FormField label="E-mail" name="email" />

          {/* <FormField label="Gender"> */}
          <RadioButtonGroup
            name="gender"
            options={["male", "female", "n/a"]}
            // value={value}
            // onChange={event => setValue(event.target.value)}
          />
          {/* </FormField> */}
          <Button type="submit" primary label="Submit" />
        </Box>
      </Form>
    </Card>
  );
};
