import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export const ApiForm = (props) => {
  const { open, handleclose, set } = props;

  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
  });

  useEffect(() => {
    if (set) {
      setdata({
        ...set,
        firstname: set.firstname,
        lastname: set.lastname,
        email: set.email,
        contactnumber: set.contactnumber,
      });
    }
  }, [set]);

  const handlesave = () => {
    let method = set ? "PUT" : "POST";
    let url = set
      ? `https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee/${data.id}`
      : "https://6637086d288fedf6937f3dd8.mockapi.io/employee/employee";
    fetch(url, {
      method: set ? "PUT" : "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "Application/json",
      },
    })
      .then((y) => y.json())
      .then((y) => {
        setdata({ firstname: "", lastname: "", email: "", contactnumber: "" });
        handleclose();
      });
  };

  const handlechange = (e) => {
    setdata({ ...data, [e.taget.name]: e.target.value });
  };
  return (
    <Dialog
      open={open}
      onClose={handleclose}
      PaperProps={{
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleclose();
        },
      }}
    >
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="firstname"
          name="firstname"
          label="first name"
          type="text"
          fullWidth
          value={data?.firstname}
          variant="standard"
          onChange={handlechange}
        />
        <TextField
          autoFocus
          required
          margin="dense"
          id="lastname"
          name="lastname"
          label="last name"
          type="text"
          value={data?.lastname}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
         <TextField
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="email"
          type="text"
          value={data?.email}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
          <TextField
          autoFocus
          required
          margin="dense"
          id="contactnumber"
          name="contactnumber"
          label="contact number"
          type="number"
          value={data?.contactnumber}
          fullWidth
          variant="standard"
          onChange={handlechange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleclose}>Cancel</Button>
        <Button type="button" onClick={handlesave}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
