import React from "react";
import { Card } from "../../../component";
import {
  Form,
  Box,
  FormField,
  RadioButtonGroup,
  Button,
  RadioButton,
  MaskedInput
} from "grommet";

export const UserForm = props => {
  return (
    <Form
      onSubmit={props.onSubmit}
      value={props.user}
      messages={{ required: "preenchimento obrigatório" }}
    >
      <Box gap="medium">
        <Box direction="row" gap="small">
          <Box fill>
            <FormField label="First name" name="first_name" required={true} />
          </Box>
          <Box fill>
            <FormField label="Last name" name="last_name" required />
          </Box>
        </Box>

        <FormField label="E-mail" name="email" required>
          <MaskedInput
            mask={[
              {
                regexp: /^[a-z]+@[a-z]+\.[a-z]$/,
                placeholder: "username@email.com"
              }
            ]}
            // value=""
            // onChange={event => {
            /* event.target.value */
            // }}
          />
        </FormField>

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
  );
};
