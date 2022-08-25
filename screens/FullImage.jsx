import { View } from "react-native"
import styled from "styled-components/native"

const PostImage = styled.Image`
  height: 100%;
  width: 100%;
`

function FullImage({ route }) {
  const { id, title, url } = route.params

  return (
    <View>
      <PostImage
        source={{
          uri: url,
        }}
      />
    </View>
  )
}

export default FullImage
