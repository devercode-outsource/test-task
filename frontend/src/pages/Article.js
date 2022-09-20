import { useEffect, useMemo, useState } from "react";
import {
  api$deleteArticle,
  api$getArticle,
  api$updateArticle,
} from "../modules/api";
import styled from "styled-components";
import moment from "moment";

const { useParams, useHistory } = require("react-router-dom");
const { useQuery } = require("../hooks/useQuery");

const Wrapper = styled.div`
  display: flex;
  max-width: 80%;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.h2``;
const Description = styled.p``;
const PostedDate = styled.p`
  font-size: 12px;
`;

const Action = styled.div`
  button {
    margin-right: 10px;
  }
`;

const Article = () => {
  const { id } = useParams();
  const query = useQuery();
  const isEdit = query.get("edit");
  const [isLoading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const isEdited = useMemo(() => {
    if (detail) {
      return moment(detail.created_at).isSame(detail.updated_at) ? false : true;
    }
    return false;
  }, [detail]);
  const history = useHistory();
  const onSave = () => {
    const heading = document.querySelector(".title").innerHTML;
    const content = document.querySelector(".content").innerHTML;
    api$updateArticle(id, {
      heading,
      content,
    })
      .then(() => {
        alert("updated");
        history.goBack();
      })
      .catch((err) => alert("something went wrong, please try again!"));
  };

  const onDelete = () => {
    api$deleteArticle(id)
      .then(() => {
        alert("deleted successfully");
        history.push("/articles");
      })
      .catch(() => {
        alert("something went wrong, please try again!");
      });
  };

  useEffect(() => {
    api$getArticle(id)
      .then(({ data }) => setDetail(data))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <Wrapper>
      <Title className="title" contentEditable={true}>
        {detail.heading}
      </Title>
      {isEdited && <span>(EDITED)</span>}
      <PostedDate>
        {!isEdited ? detail.created_at : detail.updated_at}
      </PostedDate>
      <Description className="content" contentEditable={true}>
        {detail.content}
      </Description>
      <Action>
        {!isEdit ? (
          <>
            <button onClick={onDelete}>Delete</button>
            <button onClick={() => history.push("?edit=true")}>Edit</button>
          </>
        ) : (
          <button onClick={onSave}>Save</button>
        )}
      </Action>
    </Wrapper>
  );
};
export default Article;
