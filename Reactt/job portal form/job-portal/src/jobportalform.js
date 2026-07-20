import React, { useState } from "react";

function JobPortalForm() {

  const [formData, setFormData] = useState({
    employeeId: "",
    department: "",
    employeeName: "",
    salary: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.salary <= 0) {
      alert("Salary must be greater than 0");
      return;
    }

    if (formData.salary > 70000) {
      alert("Salary cannot exceed 70000");
      return;
    }

    console.log(formData);
    alert("Form Submitted Successfully");
  };

  return (
    <div className="container">

      <h1>Job Portal Form</h1>

      <form onSubmit={handleSubmit}>

        <label>Employee ID</label><br />

        <input
          type="text"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
        />

        <br /><br />

        <label>Department</label><br />

        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
        >
          <option value="">Select Department</option>
          <option value="App Development">App Development</option>
          <option value="Web Development">Web Development</option>
          <option value="Gen AI">Gen AI</option>
        </select>

        <br /><br />

        <label>Employee Name</label><br />

        <input
          type="text"
          name="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
        />

        <br /><br />

        <label>Salary</label><br />

        <input
          type="number"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>
  );
}

export default JobPortalForm;