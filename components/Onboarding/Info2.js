"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView, StatusBar, Platform } from "react-native"
import { ChevronLeft } from "lucide-react-native"

export default function OnboardingScreen2({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1) // Assuming this is the second onboarding screen

  const handleBack = () => {
    console.log("Navigating back to previous onboarding screen...")
    if (navigation && navigation.goBack) {
      navigation.goBack()
    }
  }

  const handleGetStarted = () => {
    console.log("Navigating to main app or login screen...")
    if (navigation && navigation.navigate) {
      navigation.navigate("Login") // Assuming a 'Login' screen exists
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Back Button */}
        <TouchableOpacity onPress={handleBack} style={styles.backButton} accessibilityLabel="Go back">
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>

        {/* Main Content */}
        <View style={styles.content}>
          {/* Dark shadow-like circle around the image */}
          <View style={styles.imageBackgroundCircle}>
            <Image
              source={require("../../assets/Illustration3.png")}
              style={styles.magnifyingGlassImage}
            />
          </View>

          <Text style={styles.title}>Find the best</Text>
          <Text style={styles.description}>
            Find your favorite songs or even try listening to those recommended.
          </Text>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            <View style={[styles.paginationDot, currentPage === 0 && styles.paginationDotActive]} />
            <View style={[styles.paginationDot, currentPage === 1 && styles.paginationDotActive]} />
          </View>
        </View>

        {/* Get Started Button */}
        <TouchableOpacity onPress={handleGetStarted} style={styles.getStartedButton} accessibilityLabel="Get Started">
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF", // White background
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding:20
  },
  safeArea: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0", // Light grey background for the button
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40, 
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  imageBackgroundCircle: {
    width: 300, 
    height: 300, 
    borderRadius: 150, 
    backgroundColor: "#333333",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 20, 
  },
  magnifyingGlassImage: {
    width: 290, 
    height: 290, 
    resizeMode: "contain",
  },
  title: {
    color: "#000000", 
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  description: {
    color: "#666666", // Darker grey for better contrast on white
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  paginationDot: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#CCCCCC", // Inactive dot color
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: "#8A2BE2", 
    width: 30, 
  },
  getStartedButton: {
    backgroundColor: "#8A2BE2",
    width: "90%",
    paddingVertical: 18,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 0,
  },
  getStartedButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
})
