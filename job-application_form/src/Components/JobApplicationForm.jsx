import { useState } from "react";

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
    source: "LinkedIn"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://mockapi.io/projects/YOUR_MOCKAPI_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert("Application submitted successfully!");
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
          source: "LinkedIn"
        });
      }
    } catch (error) {
      alert("Error submitting application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white shadow-md rounded-lg">
      <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border" />
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-2 border" />
      <input type="number" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-2 border" />
      <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className="w-full p-2 border" />
      <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full p-2 border">
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <select name="position" value={formData.position} onChange={handleChange} required className="w-full p-2 border">
        <option>Software Engineer</option>
        <option>Designer</option>
        <option>Manager</option>
      </select>
      <input type="number" name="salary" placeholder="Expected Salary" value={formData.salary} onChange={handleChange} required className="w-full p-2 border" />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required className="w-full p-2 border" />
      <select name="employmentType" value={formData.employmentType} onChange={handleChange} required className="w-full p-2 border">
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Internship</option>
      </select>
      <select name="qualification" value={formData.qualification} onChange={handleChange} required className="w-full p-2 border">
        <option>High School</option>
        <option>Bachelor's</option>
        <option>Master's</option>
        <option>PhD</option>
      </select>
      <input type="text" name="university" placeholder="University/Institute Name" value={formData.university} onChange={handleChange} required className="w-full p-2 border" />
      <input type="number" name="experience" placeholder="Years of Experience" value={formData.experience} onChange={handleChange} required className="w-full p-2 border" />
      <input type="text" name="previousCompany" placeholder="Previous Company Name" value={formData.previousCompany} onChange={handleChange} required className="w-full p-2 border" />
      <input type="url" name="linkedin" placeholder="LinkedIn Profile" value={formData.linkedin} onChange={handleChange} required className="w-full p-2 border" />
      <select name="source" value={formData.source} onChange={handleChange} required className="w-full p-2 border">
        <option>LinkedIn</option>
        <option>Company Website</option>
        <option>Referral</option>
        <option>Other</option>
      </select>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white">Submit</button>
    </form>
  );
}
