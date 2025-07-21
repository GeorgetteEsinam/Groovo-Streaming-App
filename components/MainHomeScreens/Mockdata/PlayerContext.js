"use client"

import { createContext, useState, useContext, useEffect, useRef } from "react"
import { Audio } from "expo-av" // Import Audio from expo-av

const PlayerContext = createContext()

export const PlayerProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const soundObjectRef = useRef(null) // Use a ref to hold the Audio.Sound object

  // Function to handle playback status updates
  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying)
      if (status.didJustFinish) {
        // Song finished playing
        clearSong() // Clear the song when it finishes
      }
    }
  }

  const playSong = async (song) => {
    if (!song || !song.url) {
      console.warn("Attempted to play song without URL:", song)
      return
    }

    try {
      // If a sound object already exists, unload it first
      if (soundObjectRef.current) {
        await soundObjectRef.current.unloadAsync()
        soundObjectRef.current.setOnPlaybackStatusUpdate(null) // Clear previous listener
      }

      // Create a new sound object
      const { sound } = await Audio.Sound.createAsync(
        { uri: song.url },
        { shouldPlay: true }, // Start playing immediately
      )
      soundObjectRef.current = sound
      setCurrentSong(song)
      setIsPlaying(true)

      // Set up listener for playback status updates
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)

      console.log("Playing song:", song.title)
    } catch (error) {
      console.error("Error playing song with expo-av:", error)
    }
  }

  const pauseSong = async () => {
    try {
      if (soundObjectRef.current && isPlaying) {
        await soundObjectRef.current.pauseAsync()
        setIsPlaying(false)
        console.log("Song paused.")
      }
    } catch (error) {
      console.error("Error pausing song with expo-av:", error)
    }
  }

  const clearSong = async () => {
    try {
      if (soundObjectRef.current) {
        await soundObjectRef.current.stopAsync()
        await soundObjectRef.current.unloadAsync()
        soundObjectRef.current.setOnPlaybackStatusUpdate(null) // Clear listener
        soundObjectRef.current = null
      }
      setCurrentSong(null)
      setIsPlaying(false)
      console.log("Song cleared.")
    } catch (error) {
      console.error("Error clearing song with expo-av:", error)
    }
  }

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (soundObjectRef.current) {
        soundObjectRef.current.unloadAsync()
        soundObjectRef.current.setOnPlaybackStatusUpdate(null)
      }
    }
  }, [])

  return (
    <PlayerContext.Provider value={{ currentSong, isPlaying, playSong, pauseSong, clearSong }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => useContext(PlayerContext)
