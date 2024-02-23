import classes from "./FormInput.module.css";

export default function FormInput({
  id,
  placeholder,
  children,
}: {
  id: string;
  placeholder: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id}>
      <h1 className="bodySmall">{children}</h1>
      <input
        className={classes.formInput}
        type={id === "password" || id === "password2" ? "password" : "text"}
        id={id}
        name={id}
        placeholder={placeholder}
      />
    </label>
  );
}
