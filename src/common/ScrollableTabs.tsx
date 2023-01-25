import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ScrollableTabs(): JSX.Element {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: any, newValue: any): void => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper", borderRadius: 15 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Year" style={{ fontSize: 12 }} />
        <Tab label="After-Year" style={{ fontSize: 12 }} />
        <Tab label="Quarter" style={{ fontSize: 12 }} />
        <Tab label="Month" style={{ fontSize: 12 }} />
      </Tabs>
    </Box>
  );
}
