export const trendingArtists = [
  {
    id: "artist1",
    name: "Childish Gambino",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Childish_Gambino_2018.png/800px-Childish_Gambino_2018.png",
  },
  {
    id: "artist2",
    name: "Marvin Gaye",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Marvin_Gaye_1973.jpg/800px-Marvin_Gaye_1973.jpg",
  },
  {
    id: "artist3",
    name: "Kanye West",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg/800px-Kanye_West_at_the_2009_Tribeca_Film_Festival.jpg",
  },
  {
    id: "artist4",
    name: "Justin Bieber",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_2015.jpg/800px-Justin_Bieber_2015.jpg",
  },
  {
    id: "artist5",
    name: "Ariana Grande",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ariana_Grande_at_the_2020_Grammys.png/800px-Ariana_Grande_at_the_2020_Grammys.png",
  },
  {
    id: "artist6",
    name: "Taylor Swift",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Taylor_Swift_The_Eras_Tour_2023.jpg/800px-Taylor_Swift_The_Eras_Tour_2023.jpg",
  },
]

export const genres = [
  {
    id: "genre1",
    name: "Pop",
    image: "https://images.unsplash.com/photo-1514525253164-ff4624707011?auto=format&fit=crop&w=800&q=80", // Concert crowd, pop music vibe
    color: "#FF4500",
  },
  {
    id: "genre2",
    name: "Hip-Hop",
    image: "https://images.unsplash.com/photo-1511379938-0358785d47e6?auto=format&fit=crop&w=800&q=80", // DJ mixing, urban feel
    color: "#8A2BE2",
  },
  {
    id: "genre3",
    name: "Dance",
    image: "https://images.unsplash.com/photo-1506157788613-a427d877f2bc?auto=format&fit=crop&w=800&q=80", // Dance floor, lights
    color: "#00CED1",
  },
  {
    id: "genre4",
    name: "Country",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c4?auto=format&fit=crop&w=800&q=80", // Guitar, rustic setting
    color: "#DAA520",
  },
  {
    id: "genre5",
    name: "Indie",
    image: "https://images.unsplash.com/photo-1516280445507-da77bc065777?auto=format&fit=crop&w=800&q=80", // Vintage record player, cozy
    color: "#FF69B4",
  },
  {
    id: "genre6",
    name: "Jazz",
    image: "https://images.unsplash.com/photo-1511379938-0358785d47e6?auto=format&fit=crop&w=800&q=80", // Saxophone, smoky club
    color: "#4682B4",
  },
  {
    id: "genre7",
    name: "Rock",
    image: "https://images.unsplash.com/photo-1510915361894-926f321801ce?auto=format&fit=crop&w=800&q=80", // Electric guitar, stage lights
    color: "#B22222",
  },
  {
    id: "genre8",
    name: "Electronic",
    image: "https://images.unsplash.com/photo-1518051870910-ceaa9780e935?auto=format&fit=crop&w=800&q=80", // Synthesizer, futuristic
    color: "#20B2AA",
  },
  {
    id: "genre9",
    name: "R&B",
    image: "https://images.unsplash.com/photo-1517230878791-4d28214057c4?auto=format&fit=crop&w=800&q=80", // Smooth vocals, soulful
    color: "#FFD700",
  },
  {
    id: "genre10",
    name: "Classical",
    image: "https://images.unsplash.com/photo-1511379938-0358785d47e6?auto=format&fit=crop&w=800&q=80", // Orchestra, grand hall
    color: "#6A5ACD",
  },
]

export const songsByGenre = {
  Pop: [
    {
      id: "s1",
      title: "God Is a Woman",
      artist: "Ariana Grande",
      albumArt: "https://picsum.photos/id/200/100/100",
      duration: "3:17",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Sample MP3
    },
    {
      id: "s2",
      title: "Somebody's Nobody",
      artist: "Alexander 23",
      albumArt: "https://picsum.photos/id/201/100/100",
      duration: "2:55",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Sample MP3
    },
    {
      id: "s3",
      title: "Fly Me To The Sun",
      artist: "Romantic Echoes",
      albumArt: "https://picsum.photos/id/202/100/100",
      duration: "4:01",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Sample MP3
    },
    {
      id: "s4",
      title: "Blinding Lights",
      artist: "The Weeknd",
      albumArt: "https://picsum.photos/id/203/100/100",
      duration: "3:20",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Sample MP3
    },
    {
      id: "s5",
      title: "Levitating",
      artist: "Dua Lipa",
      albumArt: "https://picsum.photos/id/204/100/100",
      duration: "3:23",
      where: "YouTube Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Sample MP3
    },
  ],
  "Hip-Hop": [
    {
      id: "h1",
      title: "Sicko Mode",
      artist: "Travis Scott",
      albumArt: "https://picsum.photos/id/205/100/100",
      duration: "5:12",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      id: "h2",
      title: "HUMBLE.",
      artist: "Kendrick Lamar",
      albumArt: "https://picsum.photos/id/206/100/100",
      duration: "2:57",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      id: "h3",
      title: "God's Plan",
      artist: "Drake",
      albumArt: "https://picsum.photos/id/207/100/100",
      duration: "3:18",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
  ],
  Dance: [
    {
      id: "d1",
      title: "Titanium",
      artist: "David Guetta ft. Sia",
      albumArt: "https://picsum.photos/id/208/100/100",
      duration: "4:05",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      id: "d2",
      title: "Wake Me Up",
      artist: "Avicii",
      albumArt: "https://picsum.photos/id/209/100/100",
      duration: "4:07",
      where: "YouTube Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
  ],
  Country: [
    {
      id: "c1",
      title: "Old Town Road",
      artist: "Lil Nas X ft. Billy Ray Cyrus",
      albumArt: "https://picsum.photos/id/210/100/100",
      duration: "1:53",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      id: "c2",
      title: "Body Like A Back Road",
      artist: "Sam Hunt",
      albumArt: "https://picsum.photos/id/211/100/100",
      duration: "2:43",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
  ],
  Indie: [
    {
      id: "i1",
      title: "Sweater Weather",
      artist: "The Neighbourhood",
      albumArt: "https://picsum.photos/id/212/100/100",
      duration: "4:00",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      id: "i2",
      title: "Riptide",
      artist: "Vance Joy",
      albumArt: "https://picsum.photos/id/213/100/100",
      duration: "3:24",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
  ],
  Jazz: [
    {
      id: "j1",
      title: "Take Five",
      artist: "Dave Brubeck Quartet",
      albumArt: "https://picsum.photos/id/214/100/100",
      duration: "5:24",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    },
    {
      id: "j2",
      title: "What a Wonderful World",
      artist: "Louis Armstrong",
      albumArt: "https://picsum.photos/id/215/100/100",
      duration: "2:17",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    },
  ],
  Rock: [
    {
      id: "r1",
      title: "Bohemian Rhapsody",
      artist: "Queen",
      albumArt: "https://picsum.photos/id/216/100/100",
      duration: "5:55",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3",
    },
    {
      id: "r2",
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      albumArt: "https://picsum.photos/id/217/100/100",
      duration: "8:02",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3",
    },
  ],
  Electronic: [
    {
      id: "e1",
      title: "Strobe",
      artist: "deadmau5",
      albumArt: "https://picsum.photos/id/218/100/100",
      duration: "10:37",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3",
    },
    {
      id: "e2",
      title: "Levels",
      artist: "Avicii",
      albumArt: "https://picsum.photos/id/219/100/100",
      duration: "3:18",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3",
    },
  ],
  "R&B": [
    {
      id: "rb1",
      title: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      albumArt: "https://picsum.photos/id/220/100/100",
      duration: "3:56",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3",
    },
    {
      id: "rb2",
      title: "No Scrubs",
      artist: "TLC",
      albumArt: "https://picsum.photos/id/221/100/100",
      duration: "3:34",
      where: "Local Files",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3",
    },
  ],
  Classical: [
    {
      id: "cl1",
      title: "Moonlight Sonata",
      artist: "Beethoven",
      albumArt: "https://picsum.photos/id/222/100/100",
      duration: "5:30",
      where: "Spotify",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3",
    },
    {
      id: "cl2",
      title: "Four Seasons: Spring",
      artist: "Vivaldi",
      albumArt: "https://picsum.photos/id/223/100/100",
      duration: "3:10",
      where: "Apple Music",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3",
    },
  ],
}