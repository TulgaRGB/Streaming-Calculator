interface StreamingService {
  name: string,
  rate: number,
  logo: string
}

export const streamingServices: StreamingService[] =
    [
      {
        name: 'Spotify',
        rate: 0.00348,
        logo: './assets/images/spotify.svg'
      },
      {
        name: 'Apple Music',
        rate: 0.00675,
        logo: './assets/images/apple-music.svg'
      },
      {
        name: 'Tidal',
        rate: 0.00876,
        logo: './assets/images/tidal.png'
      },
      {
        name: 'Deezer',
        rate: 0.00562,
        logo: './assets/images/deezer.svg'
      },
      {
        name: 'Amazon Music',
        rate: 0.00426,
        logo: './assets/images/amazon-music.svg'
      }
    ]
;

interface Paragraph {
  heading: string,
  body: string
}

export const paragraphs: Paragraph[] = [
  {
    heading: "What are streaming royalties?",
    body: "Streaming royalties are the main source of income for artists. In fact, they are fees paid to artists and songwriters for every stream on platforms like Spotify, YouTube and Apple Music."
  },
  {
    heading: "What types of streaming services are there?",
    body: "There are two types of steaming service: On-demand and Non-interactive. \n On-demand services include platforms such as Spotify, Apple Music and Youtube. They are placed in this category for their music being ‘on-demand’. Listeners can hear any song whenever they see fit. Non-interactive streaming platforms include sites such as Pandora and internet radio websites. These platforms function much like a radio, playing songs to listeners at random, without the ability to select specific tracks. "
  },
  {
    heading: "How much does spotify pay per stream?",
    body: "Spotify pays between $0.003 and $0.0084 per stream. This figure may depend on the listener's location, song popularity and other factors. Music Royalty Calculator uses $0.00348 as the rate per stream on Spotify, therefore, the actual earning may be higher."
  }
]
