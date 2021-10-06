import React from "react";
import { Typography, Button, TextField } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import styled from "styled-components";

const StyledCreateTripPageForm = styled.form`
  display: grid;
  gap: 20px;
`;

export default function CreateTripPage() {
  return (
    <div>
      <Typography variant="h2" align={"center"} gutterBottom>
        Create a Trip
      </Typography>
      <StyledCreateTripPageForm>
        <TextField
          helperText={`Please insert the trip's name`}
          label={"Name"}
          name={"name"}
        />
        <TextField
          helperText={"Please insert your destination"}
          label={"Planet"}
          name={"planet"}
        />
        <KeyboardDatePicker
          disableToolbar
          variant={"inline"}
          format={"MM/dd/yyyy"}
          margin={"normal"}
          label={"Date"}
        />
        <TextField
          helperText={`Please insert a trip's description`}
          label={"Description"}
          name={"description"}
        />
        <TextField
          helperText={`Please insert the trip's duration`}
          label={"Duration in Days"}
          type={"number"}
          name={"durationInDays"}
        />
        <Button variant={"contained"} color={"primary"} type={"submit"}>
          Create
        </Button>
      </StyledCreateTripPageForm>
    </div>
  );
}
