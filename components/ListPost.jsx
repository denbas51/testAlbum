import { useEffect } from "react"
import {
  View,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native"
import Loading from "./Loading"
import Post from "./Post"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { fetchImages } from "../store/slices/imageSlice"

function ListPost({ navigation }) {
  const { status, error } = useSelector((state) => state.images)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchImages())
  }, [dispatch])
  const todos = useSelector((state) => state.images.images)

  if (status === "loading") {
    return <Loading />
  }
  if (error) {
    Alert.alert("Ошибка", "Неудалось получить данные")
  }
  return (
    <View>
      <FlatList
        refreshControl={<RefreshControl />}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("FullImage", {
                id: item.id,
                title: item.description,
                url: item.urls.full,
              })
            }
          >
            <Post
              key={item.id}
              title={item.description}
              url={item.urls.small}
              user={item.user.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default ListPost
