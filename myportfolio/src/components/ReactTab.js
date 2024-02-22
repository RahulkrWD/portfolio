import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import About from "./About";
import Skills from "./Skills";
import Services from "./Certificate";
import Projects from "./Projects";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ReactTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className={`fw-bold`}
              label="About"
              {...a11yProps(0)}
              sx={{ fontSize: 11 }}
            />
            <Tab
              className={`fw-bold `}
              label="Skills"
              {...a11yProps(1)}
              sx={{ fontSize: 11 }}
            />
            <Tab
              className={`fw-bold`}
              label="Certificate"
              {...a11yProps(2)}
              sx={{ fontSize: 11 }}
            />
            <Tab
              className={`fw-bold`}
              label="Projects"
              {...a11yProps(3)}
              sx={{ fontSize: 11 }}
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <About />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Skills />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Services />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Projects />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
