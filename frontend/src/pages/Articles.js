import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ArticleThumb from "../components/ArticleThumb";
import { api$getListArticles } from "../modules/api";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Articles = () => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api$getListArticles()
      .then(({ data }) => setArticles(data))
      .finally(() => setLoading(false));
  }, []);
  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <Wrapper>
      <button
        onClick={() => history.push("/articles/new")}
        style={{
          marginBottom: "5px",
        }}
      >
        New
      </button>
      {articles.map((article) => (
        <ArticleThumb article={article} key={article.id} />
      ))}
    </Wrapper>
  );
};
export default Articles;
