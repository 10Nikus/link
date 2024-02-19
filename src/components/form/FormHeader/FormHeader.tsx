import classes from "./FormHeader.module.css";

export default function FormHeader({
  bigText,
  smallText,
}: {
  bigText: string;
  smallText: string;
}) {
  return (
    <div className={classes.header}>
      <h1 className="headingMedium">{bigText}</h1>
      <p className="bodyMedium">{smallText}</p>
    </div>
  );
}
