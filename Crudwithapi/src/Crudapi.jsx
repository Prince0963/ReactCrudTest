import React, { useState } from "react";
import { ApiForm } from "./ApiForm";
import { DisplayApi } from "./DisplayApi";
import { Button } from "@mui/material";

export const Crudapi = () => {
  const [set, setdata] = useState(null);
  const [open, setopen] = useState(false);

  const handleclose = () => {
    setdata(null);
    setopen(false);
  };

  const handleopen = (data) => {
    setopen(true);
    setdata(data);
  };

  const handleadd = () => {
    setopen(true);
  };
  return (
    <div>
      <Button
        variant="contained"
        size="small"
        style={{ marginLeft: 16 }}
        onClick={handleadd}
      >
        Add Employee
      </Button>
      <ApiForm handleclose={handleclose} open={open} set={set} />
      <DisplayApi handleopen={handleclose} open={open} />
    </div>
  );
};
