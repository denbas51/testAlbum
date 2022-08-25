import { Text, View, Image } from "react-native"
import styled from "styled-components/native"

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`

const PostDescription = styled.View`
  flex-direction: column;
  justify-content: center;
`

const PostImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  margin-right: 12px;
`

const PostTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
`
const PostAuthor = styled.Text`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`

function Post({ title, url, user }) {
  return (
    <PostView>
      <PostImage source={{ uri: url }} />
      <PostDescription>
        <PostTitle>{title}</PostTitle>
        <PostAuthor>{user}</PostAuthor>
      </PostDescription>
    </PostView>
  )
}

export default Post
