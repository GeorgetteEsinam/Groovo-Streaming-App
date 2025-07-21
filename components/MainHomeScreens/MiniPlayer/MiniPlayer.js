import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { Play, Pause, SkipForward, X } from "lucide-react-native"
import { usePlayer } from "../Mockdata/PlayerContext"

export default function MiniPlayer() {
  const { currentSong, isPlaying, playSong, pauseSong, clearSong } = usePlayer()

  if (!currentSong) {
    return null // Don't render if no song is playing
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: currentSong.albumArt }}
        style={styles.albumArt}
        onError={(e) => console.log("MiniPlayer Album Art Load Error:", e.nativeEvent.error, currentSong.albumArt)}
      />
      <View style={styles.songInfo}>
        <Text style={styles.songTitle} numberOfLines={1}>
          {currentSong.title}
        </Text>
        <Text style={styles.songArtist} numberOfLines={1}>
          {currentSong.artist}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => (isPlaying ? pauseSong() : playSong(currentSong))}>
          {isPlaying ? <Pause size={24} color="#FFFFFF" /> : <Play size={24} color="#FFFFFF" />}
        </TouchableOpacity>
        {/* SkipForward functionality would need to be implemented in PlayerContext */}
        <TouchableOpacity onPress={() => console.log("Next song (not implemented with expo-av yet)")}>
          <SkipForward size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={clearSong}>
          <X size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#282828", // Dark grey background
    paddingVertical: 10,
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
    marginRight: 10,
  },
  songTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  songArtist: {
    color: "#B3B3B3",
    fontSize: 14,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
})
