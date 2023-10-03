"use client";
import React, { useEffect, useState } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { getTask, getUsers, saveTask } from "./api-service/apiService";

export default function BasicDemo() {
  const [user, setUser] = useState(null);
  const [priority, setPriority] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [tasks, setTasks] = useState(null);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data.data);
    return response.data;
  };

  const getTasksByUser = async () => {
    const response = await getTask(selectedUser.id);
    setTasks(response.data.data);
    return response.data;
  };

  const handleSaveTask = () => {
    const payload = {
      title: title,
      description: description,
      userId: user.id,
      priority: priority,
    };

    saveTask(payload);

    setTitle("");
    setPriority(null);
    setUser(null);
    setSelectedUser(null);
    setDescription("");
  };

  useEffect(() => {
    if (user) {
      setSelectedUser(user);
    }
  }, [user]);

  useEffect(() => {
    if (!users) {
      getAllUsers();
    }
  });

  useEffect(() => {
    if (selectedUser) {
      getTasksByUser();
    }
  }, [selectedUser]);

  const isButtonDisabled = () => {
    return !(title && description && user && priority);
  };

  const priorities = [
    { name: "P-1", id: "1", value: "1" },
    { name: "P-2", id: "2", value: "2" },
    { name: "P-3", id: "3", value: "3" },
  ];

  const renderTaskCard = () => {
    if (!selectedUser) return null;
    return (
      <div className="flex flex-row gap-2 flex-wrap">
        {(tasks || []).map((task) => {
          return (
            <Card title={task.title} key={task.id} className="w-12rem">
              <div>Assigned to: {selectedUser.name}</div>
              <div>Priority: P-{task.priority}</div>
              <p>{task.description}</p>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div className="card flex flex-column justify-content-center align-items-center gap-2">
      <h1>Create a Task</h1>
      <InputText
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full md:w-20rem"
      />
      <InputText
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full md:w-20rem h-6rem"
      />
      {users && (
        <Dropdown
          value={user}
          onChange={(e) => setUser(e.value)}
          options={users}
          optionLabel="name"
          placeholder="Select User"
          className="w-full md:w-20rem"
          display="chip"
        />
      )}
      <Dropdown
        value={priority}
        onChange={(e) => setPriority(e.value)}
        options={priorities}
        optionLabel="name"
        placeholder="Select Priority"
        className="w-full md:w-20rem"
        display="chip"
      />
      <Button
        label="Save"
        onClick={handleSaveTask}
        disabled={isButtonDisabled()}
      />
      <h2>Filter task by user </h2>
      <Dropdown
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.value)}
        options={users}
        optionLabel="name"
        placeholder="Select User"
        className="w-full md:w-20rem"
        display="chip"
      />
      {/* {selectedUser && <div>Show task list of {selectedUser.name}</div>} */}
      {renderTaskCard()}
    </div>
  );
}
