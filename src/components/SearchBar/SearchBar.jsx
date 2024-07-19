import { Field, Form, Formik } from "formik";
import { FaSearch } from "react-icons/fa";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    if (values.topic.trim() === "") {
      toast.error("Необхідно ввести текст для пошуку зображень");
      return;
    }
    onSubmit(values.topic);
    actions.resetForm();
  };

  return (
    <header className={css.header}>
      <Formik initialValues={{ topic: "" }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            className={css.input}
            type="text"
            name="topic"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.btn}>
            <FaSearch size={14} />
          </button>
        </Form>
      </Formik>
    </header>
  );
}
