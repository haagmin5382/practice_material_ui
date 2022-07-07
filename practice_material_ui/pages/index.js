import MaterialButton from "../components/MaterialButton";
import Title from "../components/Title";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
          <Tab label="Home" />
          <Tab label="Send" />
          <Tab label="Profile" />
        </Tabs>
      </AppBar>
      <Title />
      <MaterialButton />
    </>
  );
}
