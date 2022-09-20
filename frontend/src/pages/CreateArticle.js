import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { api$createArticle } from "../modules/api";
const CreateArticle = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    api$createArticle(data)
      .then(() => {
        alert("create successfully");
        history.push("/articles");
      })
      .catch(() => alert("something went wrong, please try again..."));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        heading:
        <input {...register("heading")} />
      </label>
      <br />
      <br />

      <label>
        content:
        <textarea {...register("content")} />
      </label>
      <br />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default CreateArticle;
