"use client"

import { useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Switch, StatusBar, ScrollView } from "react-native"
import { ChevronLeft, ChevronRight, Home, Search, Library } from "lucide-react-native"

const SettingsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("library")
  const [autoPlay, setAutoPlay] = useState(false)
  const [showLyrics, setShowLyrics] = useState(true)

  const handleBackPress = () => {
    navigation.goBack()
  }

  const handleLanguagePress = () => {
    navigation.navigate("LanguageSelection")
  }

  const handleStreamingQualityPress = () => {
    navigation.navigate("StreamingQuality")
  }

  const handleDownloadQualityPress = () => {
    navigation.navigate("DownloadQuality")
  }

  const handleLogoutPress = () => {
    navigation.navigate("LogoutConfirmation")
  }

  const settingsItems = [
    {
      title: "Music Language(s)",
      subtitle: "English, Hindi",
      onPress: handleLanguagePress,
      showArrow: true,
    },
    {
      title: "Streaming Quality",
      subtitle: "HD",
      onPress: handleStreamingQualityPress,
      showArrow: true,
    },
    {
      title: "Download Quality",
      subtitle: "HD",
      onPress: handleDownloadQualityPress,
      showArrow: true,
    },
    {
      title: "Equalizer",
      subtitle: "Adjust audio settings",
      onPress: () => console.log("Equalizer pressed"),
      showArrow: true,
    },
  ]

  const toggleItems = [
    {
      title: "Auto-Play",
      value: autoPlay,
      onValueChange: setAutoPlay,
    },
    {
      title: "Show Lyrics on Player",
      value: showLyrics,
      onValueChange: setShowLyrics,
    },
  ]

  const otherItems = [
    {
      title: "Connect to a Device",
      subtitle: "Stream to speakers, TVs, and other devices",
      onPress: () => console.log("Connect device pressed"),
      showArrow: true,
    },
    {
      title: "Help & Support",
      onPress: () => console.log("Help pressed"),
      showArrow: true,
    },
    {
      title: "Logout",
      onPress: handleLogoutPress,
      showArrow: true,
      isDestructive: true,
    },
  ]

  const renderSettingItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.settingItem} onPress={item.onPress} activeOpacity={0.7}>
      <View style={styles.settingLeft}>
        <Text style={[styles.settingTitle, item.isDestructive && styles.destructiveText]}>{item.title}</Text>
        {item.subtitle && <Text style={styles.settingSubtitle}>{item.subtitle}</Text>}
      </View>
      {item.showArrow && <ChevronRight size={20} color="#666666" />}
    </TouchableOpacity>
  )

  const renderToggleItem = (item, index) => (
    <View key={index} style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <Text style={styles.settingTitle}>{item.title}</Text>
      </View>
      <Switch
        value={item.value}
        onValueChange={item.onValueChange}
        trackColor={{ false: "#333333", true: "#A855F7" }}
        thumbColor={item.value ? "#FFFFFF" : "#CCCCCC"}
      />
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <ChevronLeft size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Settings Items */}
        <View style={styles.section}>{settingsItems.map(renderSettingItem)}</View>

        {/* Toggle Items */}
        <View style={styles.section}>{toggleItems.map(renderToggleItem)}</View>

        {/* Others Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Others</Text>
          {otherItems.map(renderSettingItem)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginRight: 28,
  },
  placeholder: {
    width: 28,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A1A",
  },
  settingLeft: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "500",
    marginBottom: 4,
  },
  settingSubtitle: {
    fontSize: 14,
    color: "#999999",
  },
  destructiveText: {
    color: "#EF4444",
  },
})

export default SettingsScreen
