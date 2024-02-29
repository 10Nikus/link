"use client";

import { editProfile } from "@/lib/action";
import classes from "./page.module.css";
import { useFormState } from "react-dom";

export default function Details() {
  const [state, formAction] = useFormState(editProfile, undefined);

  return (
    <form className={classes.mainDiv} action={formAction}>
      <div className={classes.headerDiv}>
        <h1 className="headingMedium">Profile Details</h1>
        <p className="bodyMedium">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <div className={classes.formDiv}>
        <div className={classes.imageDiv}>
          <p className="bodySmall">Profile picture</p>
          <div className={classes.uploadDiv}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                fill="#633CFF"
                d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
              />
            </svg>
            <h1 className="headingSmall">+Upload Image</h1>
          </div>
          <p className="bodySmall">
            Image must be below 1024x1024px.
            <br /> Use PNG or JPG format.
          </p>
        </div>
        <div className={classes.inputDiv}>
          <div>
            <p>First Name*</p>
            <input
              name="firstName"
              type="text"
              placeholder="e.g.John"
              required
            />
          </div>
          <div>
            <p>Last Name*</p>
            <input
              name="lastName"
              type="text"
              placeholder="e.g.Appleseed"
              required
            />
          </div>
          <div>
            <p>Email</p>
            <input
              name="email"
              type="text"
              placeholder="e.g.email@example.com"
            />
          </div>
        </div>
      </div>
      <div className={classes.btnDiv}>
        <button className={classes.saveBtn}>Save</button>
      </div>
    </form>
  );
}
