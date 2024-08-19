import All_data1 from './1.jpg';


import movie1 from './videos/SPIDER-MAN.mp4';
import video1 from './videos/Demon Slayer S4 720p.mkv';
import solo from './videos/sololevel.mkv';
import kaiju from './videos/Kaiju No 8 S1 - 01.mkv';
import movie2 from './videos/johnwick.mp4';
import movie3 from './videos/La La Land.mp4';
import movie4 from './videos/World War Z.mp4';
import boyss1ep1 from './videos/EP 01 - The Name of the Game.mkv';
import boyss2ep1 from './videos/EP_01_The_Big_Ride.mkv';

const All_data = [
    // Existing data for cards
    {
        image: All_data1,
        name: "Demon Slayer",
        type: "Anime",
        duration: "23m",
        genres: ["Action", "Mystery", "Fantasy", "Historical"],
        languages: ["Japanese", "English"],
        rated: "TV-MA",
        imdbRating: "8.7",
        description: "It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, is turned into a demon.",
        seasons: [
            {
                season: 4,
                episodes: [
                    { name: "Episode 8", video: video1 },
                    // Add more episodes
                ]
            }
            // Add more seasons
        ]
    },
    {
        image: All_data2,
        name: "The Boys",
        type: "Series",
        duration: "40m-1h",
        genres: ["Action", "Comedy", "Crime"],
        languages: ["English"],
        rated: "TV-MA",
        imdbRating: "8.7",
        description: "The Boys is set in a universe where super-powered individuals are recognized as heroes by the general public and work for a powerful corporation known as Vought International which markets and monetizes them.",
        seasons: [
            {
                season: 1,
                episodes: [
                    { name: "Episode 1", video: boyss1ep1 },
                    { name: "Episode 2", video: movie1 },
                    // Add more episodes
                ]
            },
            {
                season: 2,
                episodes: [
                    { name: "Episode 1", video: boyss2ep1 },
                    // Add more episodes
                ]
            }
        ]
    },
    {
        image: All_data3,
        name: "Spider-Man: Across the Spider-Verse",
        type: "Movie",
        duration: "1h45m",
        genres: ["Action", "Adventure", "Fantasy", "Supernatural"],
        languages: ["English", "Spanish"],
        rated: "PG",
        imdbRating: "8.9",
        description: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
        video: movie1,
    },
    {
        image: All_data4,
        name: "Kaiju No.8",
        type: "Anime",
        duration: "23m",
        genres: ["Action", "Adventure", "Mystery", "Supernatural"],
        languages: ["Japanese", "English"],
        rated: "TV-14",
        imdbRating: "7.9",
        description: "Kaiju No.8 will be born.",
        seasons: [
{
    season: 1,
    episodes: [
        { name: "Episode 1", video: kaiju },
        // Add more episodes
    ]
},
]
},
{
image: All_data5,
name: "Solo Leveling",
type: "Anime",
duration: "23m",
genres: ["Action", "Mystery", "Fantasy"],
languages: ["Korean", "English"],
rated: "TV-14",
imdbRating: "8.1",
description: "Follows a weak hunter as he embarks on a journey to become the strongest.",
seasons: [
{
    season: 1,
    episodes: [
        { name: "Episode 1", video: solo },
        // Add more episodes
    ]
}
// Add more seasons
]
},
{
image: All_data6,
name: "John Wick 4",
type: "Movie",
duration: "1h45m",
genres: ["Action", "Adventure", "Mystery"],
languages: ["English", "French"],
rated: "R",
imdbRating: "7.8",
description: "John Wick takes on the High Table, seeking revenge against those who wronged him.",
video: movie2,
},
{
image: All_data7,
name: "La La Land",
type: "Movie",
duration: "1h45m",
genres: ["Romance", "Comedy", "Drama"],
languages: ["English", "French"],
rated: "PG-13",
imdbRating: "8.0",
description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
video: movie3,
},
{
image: All_data8,
name: "World War Z",
type: "Movie",
duration: "1h45m",
genres: ["Action", "Adventure", "Mystery"],
languages: ["English", "Spanish"],
rated: "PG-13",
imdbRating: "7.0",
description: "A former United Nations employee races against time to stop a zombie pandemic that is toppling armies and governments.",
video: movie4,
},
// New data for img1 to img10
{
image: img1,
name: "Fight Club",
type: "Movie",
duration: "2h19m",
genres: ["Drama", "Thriller"],
languages: ["English"],
rated: "R",
imdbRating: "8.8",
description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
video: null, // If no video is available, set it to null
},
{
image: img2,
name: "Pulp Fiction",
type: "Movie",
duration: "2h34m",
genres: ["Crime", "Drama"],
languages: ["English"],
rated: "R",
imdbRating: "8.9",
description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
video: null, // If no video is available, set it to null
},
{
image: img3,
name: "The Shawshank Redemption",
type: "Movie",
duration: "2h22m",
genres: ["Drama"],
languages: ["English"],
rated: "R",
imdbRating: "9.3",
description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
video: null, // If no video is available, set it to null
},
{
image: img4,
name: "Interstellar",
type: "Movie",
duration: "2h49m",
genres: ["Adventure", "Drama", "Sci-Fi"],
languages: ["English"],
rated: "PG-13",
imdbRating: "8.6",
description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
video: null, // If no video is available, set it to null
},
{
    image: img5,
    name: "Jurassic Park",
    type: "Movie",
    duration: "2h7m",
    genres: ["Adventure", "Sci-Fi", "Thriller"],
    languages: ["English"],
    rated: "PG-13",
    imdbRating: "8.1",
    description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    video: null, // If no video is available, set it to null
},
{
    image: img6,
    name: "Godzilla vs. Kong",
    type: "Movie",
    duration: "1h53m",
    genres: ["Action", "Sci-Fi", "Thriller"],
    languages: ["English"],
    rated: "PG-13",
    imdbRating: "6.3",
    description: "The epic next chapter in the cinematic monster fight",
    video: null,
},
{
    image: img7,
    name: "Breaking Bad",
    type: "Series",
    duration: "47m-58m",
    genres: ["Crime", "Drama", "Thriller"],
    languages: ["English"],
    rated: "TV-MA",
    imdbRating: "9.5",
    description: "A high school chemistry teacher turned methamphetamine producer navigates the dangers of the drug trade while trying to secure his family's future.",
    seasons: [
        {
            season: 1,
            episodes: [
                { name: "Episode 1", video: null },
                // Add more episodes as needed
            ]
        }
        // Add more seasons as needed
    ]
},
{
    image: img8,
    name: "The Last of Us",
    type: "Series",
    duration: "40m-1h",
    genres: ["Action", "Adventure", "Drama"],
    languages: ["English"],
    rated: "TV-MA",
    imdbRating: "9.2",
    description: "Set in a post-apocalyptic world, a hardened survivor and a teenage girl embark on a perilous journey across America.",
    seasons: [
        {
            season: 1,
            episodes: [
                { name: "Episode 1", video: null },
                // Add more episodes as needed
            ]
        }
        // Add more seasons as needed
    ]
},
{
    image: img9,
    name: "Stranger Things",
    type: "Series",
    duration: "42m-1h17m",
    genres: ["Drama", "Fantasy", "Horror"],
    languages: ["English"],
    rated: "TV-14",
    imdbRating: "8.7",
    description: "A group of kids uncovers a secret government experiment while searching for their missing friend, leading to the discovery of a mysterious girl with supernatural powers.",
    seasons: [
        {
            season: 1,
            episodes: [
                { name: "Episode 1", video: null },
                // Add more episodes as needed
            ]
        },
        {
            season: 2,
            episodes: [
                { name: "Episode 1", video: null },
                // Add more episodes as needed
            ]
        }
        // Add more seasons as needed
    ]
},
{
    image: img10,
    name: "Cowboy Bebop",
    type: "Anime",
    duration: "24m",
    genres: ["Animation", "Action", "Adventure", "Drama", "Sci-Fi"],
    languages: ["Japanese", "English"],
    rated: "TV-14",
    imdbRating: "8.9",
    description: "Set in the year 2071, a group of bounty hunters chase down criminals across the solar system, while grappling with their own pasts.",
    seasons: [
        {
            season: 1,
            episodes: [
                { name: "Episode 1", video: null },
                // Add more episodes as needed
            ]
        }
        // Add more seasons as needed
    ]
}
]

export default All_data;