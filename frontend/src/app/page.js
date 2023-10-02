"use client";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function BasicDemo() {
  const [user, setUser] = useState(null);
  const [priority, setPriority] = useState(null);
  const [title, setTitle] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (user) {
      setSelectedUser(user);
    }
  }, [user]);

  const cities = [
    { name: "Ashikuzzaman", id: "NY" },
    { name: "Kamrozzaman", id: "RM" },
    { name: "Riasat", id: "LDN" },
    { name: "Afikur", id: "IST" },
  ];

  const priorities = [
    { name: "P-1", id: "1" },
    { name: "P-2", id: "2" },
    { name: "P-3", id: "3" },
  ];

  return (
    <div className="card flex flex-column justify-content-center align-items-center gap-2">
      <h1>Create a Task</h1>
      <InputText
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full md:w-20rem"
      />
      <Dropdown
        value={user}
        onChange={(e) => setUser(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select User"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
        display="chip"
      />
      <Dropdown
        value={priority}
        onChange={(e) => setPriority(e.value)}
        options={priorities}
        optionLabel="name"
        placeholder="Select Priority"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
        display="chip"
      />
      <Button label="Save" onClick={() => console.log("Clicked")} />
      <h2>Filter task by user </h2>
      <Dropdown
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.value)}
        options={cities}
        optionLabel="name"
        placeholder="Select User"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
        display="chip"
      />
      {/* {selectedUser && <div>Show task list of {selectedUser.name}</div>} */}
      {selectedUser && priority && (
        <div className="flex flex-row gap-2">
          <Card title={title}>
            <div>Assigned to: {selectedUser.name}</div>
            <div>Priority: {priority.name}</div>
          </Card>
          <Card title={title}>
            <div>Assigned to: {selectedUser.name}</div>
            <div>Priority: {priority.name}</div>
          </Card>
          <Card title={title}>
            <div>Assigned to: {selectedUser.name}</div>
            <div>Priority: {priority.name}</div>
          </Card>
        </div>
      )}
    </div>
  );
}
