import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { userSchema } from "../asset/utils";
import { state } from "../asset/data";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  age: "",
  sex: "",
  mobileNo: "",
  dob: "",
  idType: "aadhaarCard",
  aadhaarNo: "",
  panNo: "",
  guardianLabel: "",
  guardianName: "",
  email: "",
  emergencyNo: "",
  address: "",
  state: "",
  city: "",
  country: "",
  occupation: "",
  religion: "",
  maritalStatus: "",
  bloodGroup: "",
  nationality: "",
};

const AddUser = ({ setReRenderUsers }) => {
  const [result, setResult] = useState({});
  const navigate = useNavigate();
  const addUserAPI = async (values) => {
    const response = await fetch("http://localhost:5000/add-user", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setReRenderUsers(true);
    const result = await response.json();
    setResult(result);
    alert(result.status);
  };

  useEffect(() => {
    if (result?.status === "success") {
      navigate("/");
    }
  }, [result]);

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: userSchema,
      onSubmit: (values, action) => {
        addUserAPI(values);
      },
    });

  return (
    <div className="add-user-container center">
      <form onSubmit={handleSubmit} className="center">
        <h2>Personal Details</h2>
        <div className="section center">
          {/* Name */}
          <div className="input-field">
            <label htmlFor="name">
              Name<span>*</span>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {errors.name && touched.name ? (
              <p className="invalid-msg">{errors.name}</p>
            ) : null}
          </div>

          {/* DOB / Age */}
          <div className="input-field">
            <label htmlFor="dobAge">
              Date of Birth or Age<span>*</span>
            </label>
            <input
              type="text"
              placeholder="DD/MM/YYYY or Age in Years"
              name="age"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.age && touched.age ? (
              <p className="invalid-msg">{errors.age}</p>
            ) : null}
          </div>

          {/* Sex  */}
          <div className="input-field">
            <label htmlFor="sex">
              Sex<span>*</span>
            </label>
            <select
              name="sex"
              id="sex"
              value={values.sex}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.sex && touched.sex ? (
              <p className="invalid-msg">{errors.sex}</p>
            ) : null}
          </div>

          {/* Mobile  */}
          <div className="input-field">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              placeholder="Enter Mobile no."
              name="mobileNo"
              value={values.mobileNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.mobileNo && touched.mobileNo ? (
              <p className="invalid-msg">{errors.mobileNo}</p>
            ) : null}
          </div>

          {/* Govt Issued ID  */}
          <div className="input-field-conditional">
            <div className="input-field">
              <label htmlFor="id">Govt Issued ID </label>
              <select
                name="idType"
                id="idType"
                value={values.idType}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select</option>
                <option value="aadhaarCard">Aadhaar Card</option>
                <option value="panCard">Pan Card</option>
              </select>
            </div>

            <div className="input-field">
              {values.idType === "aadhaarCard" ? (
                <label htmlFor="aadhaarNo">Aadhaar Card </label>
              ) : (
                <label htmlFor="panNo">PAN Card </label>
              )}
              {values.idType === "aadhaarCard" ? (
                <input
                  type="text"
                  name="aadhaarNo"
                  id="aadhaarNo"
                  placeholder="Enter aadhaarNo"
                  value={values.aadhaarNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              ) : (
                <input
                  type="text"
                  name="panNo"
                  id="panNo"
                  placeholder="Enter PAN number"
                  value={values.panNo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              )}
            </div>
          </div>
          {errors.aadhaarNo && touched.aadhaarNo ? (
            <p className="invalid-msg">{errors.aadhaarNo}</p>
          ) : null}

          {errors.panNo && touched.panNo ? (
            <p className="invalid-msg">{errors.panNo}</p>
          ) : null}
        </div>

        <h2>Contact Details</h2>
        <div className="section center">
          {/* Govt Issued ID  */}
          <div className="input-field-conditional">
            <div className="input-field">
              <label htmlFor="guardianLabel">Guardian Details </label>
              <select
                name="guardianLabel"
                id="guardianLabel"
                value={values.guardianLabel}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option>Select</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
                <option value="sister">Sister</option>
                <option value="uncle">Uncle</option>
                <option value="grandFather">Grand Father</option>
                <option value="grandMother">Grand Mother</option>
              </select>
            </div>

            <div className="input-field">
              <label htmlFor="guardianName">Guardian Name </label>
              <input
                type="text"
                name="guardianName"
                id="guardianName"
                placeholder="Enter Guardian Name"
                value={values.guardianName}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              {errors.guardianName && touched.guardianName ? (
                <p className="invalid-msg">{errors.guardianName}</p>
              ) : null}
            </div>
          </div>

          {/* Email  */}
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="invalid-msg"></p>
          </div>

          {/* Emergency Contact Number  */}
          <div className="input-field">
            <label htmlFor="emergencyNo">Emergency Contact Number</label>
            <input
              type="text"
              placeholder="Enter Emergency Number"
              name="emergencyNo"
              value={values.emergencyNo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.emergencyNo && touched.emergencyNo ? (
              <p className="invalid-msg">{errors.emergencyNo}</p>
            ) : null}
          </div>
        </div>

        <h2>Address Details</h2>
        <div className="section center">
          {/* Address  */}
          <div className="input-field">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="invalid-msg"></p>
          </div>

          {/* State  */}
          <div className="input-field">
            <label htmlFor="state">State</label>
            <select name="state" id="state">
              <option>Select</option>
              {state.map((state, index) => {
                return (
                  <option key={index} value={index}>
                    {state}
                  </option>
                );
              })}
            </select>
            {errors.state && touched.state ? (
              <p className="invalid-msg">{errors.state}</p>
            ) : null}
          </div>

          {/* City  */}
          <div className="input-field">
            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              value={values.city}
              onChange={handleChange}
            />
            {errors.city && touched.city ? (
              <p className="invalid-msg">{errors.city}</p>
            ) : null}
          </div>

          {/* Country  */}
          <div className="input-field">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              placeholder="Enter Country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.country && touched.country ? (
              <p className="invalid-msg">{errors.country}</p>
            ) : null}
          </div>
        </div>

        <h2>Other Details</h2>
        <div className="section center">
          {/* Occupation  */}
          <div className="input-field">
            <label htmlFor="occupation">Address</label>
            <input
              type="text"
              placeholder="Enter Occupation"
              name="occupation"
              value={values.occupation}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.occupation && touched.occupation ? (
              <p className="invalid-msg">{errors.occupation}</p>
            ) : null}
          </div>

          {/* Religion  */}
          <div className="input-field">
            <label htmlFor="religion">Religion</label>
            <select
              name="religion"
              id="religion"
              value={values.religion}
              onChange={handleChange}
            >
              {" "}
              <option>Select</option>
              <option value="islam">Islam</option>
              <option value="christianity">Christianity</option>
              <option value="hinduism">Hinduism</option>
              <option value="sikhism">Sikhism</option>
              <option value="budhism">Budhism</option>
            </select>
            {errors.religion && touched.religion ? (
              <p className="invalid-msg">{errors.religion}</p>
            ) : null}
          </div>

          {/* Marital Status  */}
          <div className="input-field">
            <label htmlFor="maritalStatus">Marital Status</label>
            <select
              name="maritalStatus"
              id="maritalStatus"
              value={values.maritalStatus}
              onChange={handleChange}
            >
              {" "}
              <option>Select</option>
              <option value="single">Single</option>
              <option value="Married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
            {errors.maritalStatus && touched.maritalStatus ? (
              <p className="invalid-msg">{errors.maritalStatus}</p>
            ) : null}
          </div>

          {/* Blood Group  */}
          <div className="input-field">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              value={values.bloodGroup}
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="b+">B+ve</option>
              <option value="a+">A+ve</option>
              <option value="b-">B-ve</option>
            </select>
            <p className="invalid-msg"></p>
          </div>

          {/* Nationality  */}
          <div className="input-field">
            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              placeholder="Enter nationality"
              name="nationality"
              value={values.nationality}
              onChange={handleChange}
            />
            <p className="invalid-msg"></p>
          </div>
        </div>

        <div className="btn">
          <button type="submit" className="submit">
            Submit
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
