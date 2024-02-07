import logo from "./logo.svg";
import "./App.css";
import { Box, Button } from "@mui/material";
import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const steps = [
  { label: "Option-1", index: 0 },
  {
    label: "Option-2",
    index: 1,
  },
  {
    label: "Option-3",
    index: 2,
  },
  {
    label: "Option-4",
    index: 3,
  },
];
function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        margin: "auto",
        flexDirection: "column",
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          border: "0.8px solid lightgrey",
          borderRadius: "0.6rem",
          padding: "0.5rem",
        }}
      >
        <Stepper
          sx={{ padding: "1rem" }}
          activeStep={activeStep}
          connector={
            <ArrowForwardIosIcon
              sx={{ width: "1.125rem", height: "1.125rem" }}
            />
          }
        >
          {steps?.map((data, index) => {
            const isStepComplete = index < activeStep;
            return (
              <Step key={data.label}>
                <StepLabel
                  icon={
                    isStepComplete ? (
                      <Box
                        sx={{
                          display: "flex",
                          width: "2.5rem",
                          height: "2.5rem",
                          // padding: '0.625rem 1.125rem',
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D24C31",
                          borderRadius: "6.25rem",
                        }}
                      >
                        {" "}
                        <DoneAllIcon
                          sx={{
                            width: "1.125rem",
                            height: "1.125rem",
                            color: "#fff",
                          }}
                        />
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          width: "2.5rem",
                          height: "2.5rem",
                          // padding: '0.625rem 1.125rem',
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#F2F2F2",
                          borderRadius: "6.25rem",
                        }}
                      >
                        <Typography variant="h4"> {index + 1}</Typography>
                      </Box>
                    )
                  }
                >
                  {data.label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {activeStep === steps.length ? null : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{}} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
