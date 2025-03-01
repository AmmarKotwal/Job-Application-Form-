import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "Male",
    position: "Software Engineer",
    salary: "",
    startDate: "",
    employmentType: "Full-time",
    qualification: "High School",
    university: "",
    experience: "",
    previousCompany: "",
    linkedin: "",
    source: "LinkedIn",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://67bd6cf4321b883e790c62e0.mockapi.io/crud/job",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000); // Hide message after 3 sec
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "Male",
          position: "Software Engineer",
          salary: "",
          startDate: "",
          employmentType: "Full-time",
          qualification: "High School",
          university: "",
          experience: "",
          previousCompany: "",
          linkedin: "",
          source: "LinkedIn",
        });
      }
    } catch (error) {
      alert("Error submitting application.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Job Application Form</h2>

        {submitted && (
          <div className="alert alert-success text-center">
            ✅ Application submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="fullName" className="form-control" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="email" name="email" className="form-control" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="number" name="phone" className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" name="dob" className="form-control" value={formData.dob} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <select name="gender" className="form-select" value={formData.gender} onChange={handleChange} required>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-3">
            <select name="position" className="form-select" value={formData.position} onChange={handleChange} required>
              <option>Software Engineer</option>
              <option>Designer</option>
              <option>Manager</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="number" name="salary" className="form-control" placeholder="Expected Salary" value={formData.salary} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Start Date</label>
            <input type="date" name="startDate" className="form-control" value={formData.startDate} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <select name="employmentType" className="form-select" value={formData.employmentType} onChange={handleChange} required>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Internship</option>
            </select>
          </div>
          <div className="mb-3">
            <select name="qualification" className="form-select" value={formData.qualification} onChange={handleChange} required>
              <option>High School</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>
          </div>
          <div className="mb-3">
            <input type="text" name="university" className="form-control" placeholder="University/Institute Name" value={formData.university} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="number" name="experience" className="form-control" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="text" name="previousCompany" className="form-control" placeholder="Previous Company Name" value={formData.previousCompany} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <input type="url" name="linkedin" className="form-control" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <select name="source" className="form-select" value={formData.source} onChange={handleChange} required>
              <option>LinkedIn</option>
              <option>Company Website</option>
              <option>Referral</option>
              <option>Other</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}
