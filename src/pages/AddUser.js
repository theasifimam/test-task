import { useFormik } from "formik";
import React from "react";
import { validationSchema } from "../utils";

const AddUser = () => {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        dobAge: "",
        sex: "",
        mobileNo: "",
        idType: "",
        id: "",
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
      },
      validationSchema,
      onSubmit: (values, action) => {
        console.log(values);
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
              name="dobAge"
              value={values.dobAge}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.dobAge && touched.dobAge ? (
              <p className="invalid-msg">{errors.dobAge}</p>
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
            <p className="invalid-msg"></p>
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

            <input
              type="text"
              name="id"
              id="id"
              placeholder="Enter Govt ID"
              value={values.id}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="invalid-msg"></p>
          </div>
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

            <input
              type="text"
              name="guardianName"
              id="guardianName"
              placeholder="Enter Guardian Name"
              value={values.guardianName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <p className="invalid-msg"></p>
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
            <p className="invalid-msg"></p>
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
              <option value="bihar">Bihar</option>
              <option value="up">UP</option>
              <option value="punjab">Punjab</option>
            </select>
            <p className="invalid-msg"></p>
          </div>

          {/* City  */}
          <div className="input-field">
            <label htmlFor="city">City</label>
            <select name="city" id="city">
              <option value="darbhanga">Darbhanga</option>
              <option value="muzaffarpur">Muzaffarpur</option>
              <option value="Patna">Patna</option>
            </select>
            <p className="invalid-msg"></p>
          </div>

          {/* Mobile  */}
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
            <p className="invalid-msg"></p>
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
            <p className="invalid-msg"></p>
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
              <option value="islam">Islam</option>
              <option value="christianity">Christianity</option>
              <option value="hinduism">Hinduism</option>
              <option value="sikhism">Sikhism</option>
              <option value="budhism">Budhism</option>
            </select>
            <p className="invalid-msg"></p>
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
              <option value="single">Single</option>
              <option value="Married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
            <p className="invalid-msg"></p>
          </div>

          {/* Religion  */}
          <div className="input-field">
            <label htmlFor="bloodGroup">Religion</label>
            <select
              name="bloodGroup"
              id="bloodGroup"
              value={values.bloodGroup}
              onChange={handleChange}
            >
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
