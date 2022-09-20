import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  cursor: pointer;
  min-width: 200px;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;
`;
const Title = styled.h4`
  margin-bottom: 10px;
`;

const PostedDate = styled.p`
  font-size: 10px;
`;

const EditLabel = styled.span`
  background: yellow;
  color: black;
  font-size: 10px;
  border: 1px solid grey;
  padding: 5px;
`;

const NewLabel = styled.span`
  background: green;
  color: white;
  padding: 5px;
  font-size: 10px;
  border: 1px solid grey;
`;
const ArticleThumb = ({ article }) => {
  const history = useHistory();
  const isEdited = moment(article.created_at).isSame(article.updated_at)
    ? false
    : true;
  return (
    <Container onClick={() => history.push(`/articles/${article.id}`)}>
      <Title>{article.heading}</Title>
      <PostedDate>
        {isEdited ? article.updated_at : article.created_at}
      </PostedDate>
      {isEdited ? <EditLabel>EDITED</EditLabel> : <NewLabel>NEW</NewLabel>}
    </Container>
  );
};
export default ArticleThumb;
