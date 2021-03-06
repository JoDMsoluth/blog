import React from "react";
import PageTemplate from "../components/common/PageTemplate";
import PostInfo from "../components/post/PostInfo";
import PostBody from "../components/post/PostBody";
import Post from "../containers/post/Post";

const PostPage = ({ match }) => {
  const { id } = match.params;
  return (
    <div>
      <PageTemplate>
        <Post id={id} />
      </PageTemplate>
    </div>
  );
};

export default PostPage;
