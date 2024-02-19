import classes from './SubmitButton.module.css';

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return <button type="submit" className={classes.formButton}>
  {children}
</button>
}
