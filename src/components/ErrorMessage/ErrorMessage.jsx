import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div className={css.container}>
      <div className={css.errorBox}>
        <p className={css.text}>
          Oops, something went wrong. Please reload this page.
        </p>
      </div>
    </div>
  );
}
