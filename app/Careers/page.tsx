"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "../lib/utils";
import SmallLoadingSpinner from "../App_Chunks/Components/Loading";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
const Page = () => {
  return (
    <div className="bg-gradient-to-b from-[#EDF0F5] to-[#ECF0F7] w-full h-full">
      <div className="container max-w-4xl pt-32 lg:pt-40 pb-20">
        <h1 className="text-center text-4xl font-bold font-Primary">
          Careers at Zaaviyan
        </h1>
        <p className="text-center mt-5">
          Join the team at Zaaviyan, where innovation, expertise, and passion
          drive everything we do. We are always on the lookout for talented
          individuals who share our commitment to excellence and want to be part
          of transforming spaces across Dubai and beyond.
        </p>
        <p className="text-center mt-8">
          If you want to join our team, fill out the form below
        </p>

        <div className="mt-10 bg-white/40 backdrop-filter backdrop-blur-xl px-3 lg:px-10 py-16 rounded-md">
          <p className="mb-5 text-2xl font-medium">About You</p>
          <CareerForm />
        </div>
      </div>
    </div>
  );
};

export default Page;

const CareerForm = () => {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  const jobRoles = [
    "Project Manager – Interior Fit-Out",
    "Site Engineer – Civil/Interior",
    "Construction Supervisor",
    "Quantity Surveyor",
    "Health & Safety Officer",
    "Procurement Officer",
    "Interior Designer",
    "3D Visualizer",
    "Architect",
    "Estimation Engineer",
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    Role: "",
    city: "",
    country: "",
    cv: null as File | null,
  });
  const [checkbox, setCheckBox] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    checked: false,
    Role: "",
    city: "",
    country: "",
    cv: "",
  });
  const [status, setStatus] = useState("");

  const validate = () => {
    const tempErrors = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      checked: false,
      Role: "",
      city: "",
      country: "",
      cv: "",
    };
    if (!formData.firstName.trim())
      tempErrors.firstName = "First Name is required";
    if (!formData.lastName.trim())
      tempErrors.lastName = "Last Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.city.trim()) tempErrors.city = "City is required";
    if (!formData.country.trim()) tempErrors.country = "Country is required";
    if (!formData.Role.trim()) tempErrors.Role = "Role is required";
    if (!formData.cv) tempErrors.cv = "CV/Resume is required";
    if (!checkbox) tempErrors.checked = true;
    setErrors(tempErrors);
    const hasErrors = Object.values(tempErrors).some(
      (error) => error !== "" && error !== false
    );
    return !hasErrors;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    if (!validate()) {
      return;
    }
    setStatus("Sending...");
    console.log("Submitting Form Data:", formData); // Debugging before sending

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "cv" && value instanceof File) {
        formDataToSend.append(key, value, value.name); // Append file correctly
      } else if (typeof value === "string") {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend, 
        
      });

      if (response.ok) {
        setStatus("ok");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          Role: "",
          city: "",
          country: "",
          cv: null as File | null,
        }); // Reset form
        setCheckBox(false);
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-7">
        <div>
          <label className="block">First Name</label>
          <Input
            name={"firstName"}
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full mt-1"
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label className="block">Last Name</label>
          <Input
            name={"lastName"}
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full mt-1"
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm">{errors.lastName}</p>
          )}
        </div>
        <div>
          <label className="block">Phone Number</label>
          <Input
            name={"phone"}
            value={formData.phone}
            onChange={handleChange}
            type="number"
            placeholder="Enter phone number"
            className="w-full mt-1"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block">Email Address</label>
          <Input
            name={"email"}
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full mt-1"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block">City</label>
          <Input
            name={"city"}
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter city"
            className="w-full mt-1"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
        </div>

        <div>
          <label className="block">Country</label>
          <div className="mt-1">
            <Select
              onValueChange={(value) => {
                setErrors((prev) => ({
                  ...prev,
                  country: "",
                }));
                setFormData({ ...formData, country: value });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country, idx) => (
                  <SelectItem key={idx} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.country && (
              <p className="text-red-600 text-sm">{errors.country}</p>
            )}
          </div>
        </div>
        <div>
          <label className="block">Role</label>
          <div className="mt-1">
            <Select
              onValueChange={(value) => {
                setFormData({ ...formData, Role: value });
                setErrors((prev) => ({
                  ...prev,
                  Role: "",
                }));
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your Role" />
              </SelectTrigger>
              <SelectContent>
                {jobRoles.map((role, idx) => (
                  <SelectItem key={idx} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.Role && (
              <p className="text-red-600 text-sm">{errors.Role}</p>
            )}
          </div>
        </div>
        <div className="grid w-full items-center">
          <label htmlFor="picture" className="font-medium text-gray-700">
            Resume / CV{" "}
          </label>
          <Input
            onChange={(file) => {
              if (file.target.files)
                setFormData({ ...formData, cv: file.target.files[0] || null });
            }}
            name={"cv"}
            accept=".pdf, .doc, .docx"
            placeholder="Upload your CV"
            id="picture"
            type="file"
            className="file:bg-blue-50  py-1 px-1 file:text-gray-700 hover:file:bg-gray-100 file:border file:border-gray-700 file:rounded-md "
          />
          {errors.cv && <p className="text-red-600 text-sm">{errors.cv}</p>}
        </div>
      </div>
      <div className="flex items-center mt-7 space-x-2">
        <Checkbox
          checked={checkbox}
          onCheckedChange={() => {
            setErrors((prev) => ({
              ...prev, // Keep existing errors
              checked: false, // Update 'checked' error
            }));
            setCheckBox(!checkbox);
          }}
          id="terms"
        />
        <label
          htmlFor="terms"
          className={`${
            errors.checked ? "text-red-500" : ""
          } text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`}
        >
          I accept the terms and conditions.
        </label>
      </div>
      <button
        type="submit"
        className={cn(
          `border border-slate-400 mt-10 px-4 py-2 rounded-md flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`,
          status === "ok" && "bg-[#25D366] text-green-950"
        )}
        disabled={status === "Sending..." || status === "ok"}
        onClick={handleSubmit}
      >
        {status === "Sending..." ? (
          <>
            <SmallLoadingSpinner /> Sending...
          </>
        ) : status === "ok" ? (
          "Submitted Sucessfully"
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};
