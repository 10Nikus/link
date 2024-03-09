"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import classes from "./FormAddModal.module.css";
import { addLink } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 4,
};

export default function FormAddModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, formAction] = useFormState(addLink, undefined);

  useEffect(() => {
    state?.success && window.location.reload();
  }, [state]);

  return (
    <div>
      <button className={classes.addNewBtn} onClick={handleOpen}>
        Open modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form className={classes.addDiv} action={formAction}>
            <div>
              <label htmlFor="type" className="bodySmall">
                Type
              </label>
              <select name="type">
                <option value="github">Github</option>
                <option value="frontend Mentor">Frontend Mentor</option>
                <option value="twitter">Twitter</option>
                <option value="linkedin">Linkedin</option>
                <option value="youtube">Youtube</option>
                <option value="facebook">Facebook</option>
                <option value="twitch">Twitch</option>
                <option value="devto">Dev.to</option>
                <option value="codewars">Codewars</option>
                <option value="codepen">Codepen</option>
                <option value="freeCodeCamp">freeCodeCamp</option>
                <option value="gitlab">Gitlab</option>
                <option value="hashnode">Hashnode</option>
                <option value="stackoverflow">Stackoverflow</option>
              </select>
            </div>

            <div>
              <label htmlFor="link" className="bodySmall">
                Link
              </label>
              <input name="link" type="text" />
            </div>
            <button className={classes.addNewBtn} type="submit">
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
