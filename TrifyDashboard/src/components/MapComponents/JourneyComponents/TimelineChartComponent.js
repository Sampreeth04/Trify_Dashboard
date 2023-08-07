import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StepLabel } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";

import { useState } from "react";

export default function TimelineChartComponent({ setJourney, journeyCount }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const CustomMapIcon = () => <MapIcon style={{ color: "orange" }} />;

  console.log(journeyCount.size);

  const totalSteps = () => {
    // return steps.length;
    return journeyCount.size + 1;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() ? 0 : activeStep + 1;
    setActiveStep(newActiveStep);
    setJourney(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setJourney((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    // console.log(step);
    setActiveStep(step);
    if (isLastStep()) {
      setJourney(-1);
    } else {
      setJourney(step);
    }
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Stepper
        nonLinear
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepIcon-root": {
            color: "orange", // Customize the stepper icon color
          },
        }}
      >
        {/* {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              Journey {index + 1}
            </StepButton>
          </Step>
        ))} */}
        {[...Array(journeyCount.size)].map((x, i) => {
          return (
            <Step>
              <StepButton onClick={handleStep(i)}>Journey {i + 1}</StepButton>
            </Step>
          );
        })}
        <Step>
          <StepButton onClick={handleStep(journeyCount.size)}>
            <StepLabel StepIconComponent={CustomMapIcon}>All</StepLabel>
          </StepButton>
        </Step>
      </Stepper>

      {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          // color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}
