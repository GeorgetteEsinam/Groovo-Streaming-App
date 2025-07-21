import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from "react-native"
import { Search, ChevronLeft } from "lucide-react-native"
import { trendingArtists, genres } from "../Mockdata/Mockdata"

const { width } = Dimensions.get("window")

export default function SearchScreen({ navigation }) {
  const renderArtist = ({ item }) => (
    <View style={styles.artistCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.artistImage}
        onError={(e) => console.log("Artist Image Load Error:", e.nativeEvent.error, item.image)}
      />
      <Text style={styles.artistName}>{item.name}</Text>
    </View>
  )

  const renderGenre = ({ item }) => (
    <TouchableOpacity
      style={[styles.genreCard, { backgroundColor: item.color || "#333" }]}
      onPress={() => navigation.navigate("Songs", { genreName: item.name, genreImage: item.image })}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.genreImage}
        onError={(e) => console.log("Genre Image Load Error:", e.nativeEvent.error, item.image)}
      />
      <Text style={styles.genreName}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.searchBarContainer}>
          <Search size={20} color="#B3B3B3" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search songs, artist, album or..."
            placeholderTextColor="#B3B3B3"
          />
        </View>
      </View>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Trending Artists</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {trendingArtists.map((artist) => (
            <View key={artist.id} style={styles.artistCard}>
              <Image
                source={{ uri: artist.image }}
                style={styles.artistImage}
                onError={(e) => console.log("Trending Artist Image Load Error:", e.nativeEvent.error, artist.image)}
              />
              <Text style={styles.artistName}>{artist.name}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Browse All</Text>
        <FlatList
          data={genres}
          renderItem={renderGenre}
          keyExtractor={(item) => item.id}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={styles.genreRow}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft: 15,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "#FFFFFF",
    fontSize: 16,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  },
  horizontalScroll: {
    marginBottom: 10,
  },
  artistCard: {
    alignItems: "center",
    marginRight: 15,
    width: 80,
  },
  artistImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 8,
  },
  artistName: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
  },
  genreRow: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  genreCard: {
    width: (width - 45) / 2,
    height: 100,
    borderRadius: 8,
    overflow: "hidden",
    justifyContent: "flex-end",
    padding: 10,
  },
  genreImage: {
    ...StyleSheet.absoluteFillObject,
    // Removed opacity: 0.6 to make the image fully visible
  },
  genreName: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    zIndex: 1,
  },
})