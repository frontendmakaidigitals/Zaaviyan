"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
const Page = () => {
  return (
    <div className="bg-gradient-to-b from-[#EDF0F5] to-[#ECF0F7] w-full h-full">
      <div className="container max-w-4xl pt-40 pb-20">
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

        <div className="mt-10 bg-white/40 backdrop-filter backdrop-blur-xl px-10 py-16 rounded-md">
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
  return (
    <>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-7">
          <div>
            <label className="block">First Name</label>
            <Input placeholder="Enter first name" className="w-full mt-1" />
          </div>
          <div>
            <label className="block">Last Name</label>
            <Input placeholder="Enter last name" className="w-full mt-1" />
          </div>
          <div>
            <label className="block">Phone Number</label>
            <Input
              type="number"
              placeholder="Enter phone number"
              className="w-full mt-1"
            />
          </div>
          <div>
            <label className="block">Email Address</label>
            <Input placeholder="Enter email address" className="w-full mt-1" />
          </div>
          <div>
            <label className="block">City</label>
            <Input placeholder="Enter city" className="w-full mt-1" />
          </div>

          <div>
            <label className="block">Country</label>
            <div className="mt-1">
              <Select>
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
            </div>
          </div>
          <div>
            <label className="block">Role</label>
            <Input
              placeholder="Enter role applying for"
              className="w-full mt-1"
            />
          </div>
          <div className="grid w-full items-center">
            <label htmlFor="picture" className="font-medium text-gray-700">
              Resume / CV{" "}
            </label>
            <Input
              id="picture"
              type="file"
              className="file:bg-blue-50  py-1 px-1 file:text-gray-700 hover:file:bg-gray-100 file:border file:border-gray-700 file:rounded-md "
            />
          </div>
        </div>
        <div className="flex items-center mt-7 space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
          I accept the terms and conditions.
          </label>
        </div>
        <button className="bg-transparent border text-sm font-medium hover:text-white hover:bg-black transition-colors duration-300 border-black  text-slate-950  px-5 py-2 mt-12 rounded-md">
          Get Started
        </button>
      </form>
    </>
  );
};
