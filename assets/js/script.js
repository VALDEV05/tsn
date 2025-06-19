//dati post


const posts = [
  {
    id: 1,
    author: "Giulia Rossi",
    avatar: "https://i.pravatar.cc/150?img=5",
    timestamp: "2025-06-19T09:12:00",
    content: "HTML è la base di tutto. ❤️ #webdev",
    image: null,
    likes: 14,
    comments: []
  },
  {
    id: 2,
    author: "Luca Bianchi",
    avatar: "https://i.pravatar.cc/150?img=3",
    timestamp: "2025-06-19T10:30:00",
    content: "Primo progetto completato! 🚀",
    image: "https://source.unsplash.com/featured/?laptop",
    likes: 32,
    comments: [
      { user: "Giulia", text: "Bravissimo!" }
    ]
  },
  {
    id: 3,
    author: "Elena Neri",
    avatar: "https://i.pravatar.cc/150?img=7",
    timestamp: "2025-06-18T18:00:00",
    content: "CSS Grid vs Flexbox... voi cosa usate?",
    image: null,
    likes: 21,
    comments: [
      { user: "Marco", text: "Grid tutta la vita!" }
    ]
  },
  {
    id: 4,
    author: "Stefano Verde",
    avatar: "https://i.pravatar.cc/150?img=10",
    timestamp: "2025-06-18T16:45:00",
    content: "Studiando JavaScript... 🧠🔥",
    image: "https://source.unsplash.com/featured/?javascript",
    likes: 40,
    comments: []
  },
  {
    id: 5,
    author: "Alice Gallo",
    avatar: "https://i.pravatar.cc/150?img=14",
    timestamp: "2025-06-17T21:30:00",
    content: "Responsive design = mobile first! 📱",
    image: null,
    likes: 17,
    comments: []
  },
  {
    id: 6,
    author: "Marco Grigio",
    avatar: "https://i.pravatar.cc/150?img=17",
    timestamp: "2025-06-17T19:00:00",
    content: "Animazioni CSS keyframes ➡️ wow! ✨",
    image: "https://source.unsplash.com/featured/?animation",
    likes: 29,
    comments: [
      { user: "Alice", text: "Bellissime!" }
    ]
  },
  {
    id: 7,
    author: "Irene Viola",
    avatar: "https://i.pravatar.cc/150?img=11",
    timestamp: "2025-06-17T08:30:00",
    content: "Ho installato Visual Studio Code 😍 #productivity",
    image: null,
    likes: 12,
    comments: []
  },
  {
    id: 8,
    author: "Franco Blu",
    avatar: "https://i.pravatar.cc/150?img=18",
    timestamp: "2025-06-16T23:59:00",
    content: "Piccolo bug... grande lezione! 💡",
    image: null,
    likes: 6,
    comments: [
      { user: "Stefano", text: "Classico ahah!" }
    ]
  },
  {
    id: 9,
    author: "Sofia Marrone",
    avatar: "https://i.pravatar.cc/150?img=21",
    timestamp: "2025-06-16T15:45:00",
    content: "Form ben strutturati = UX felice! ✔️",
    image: null,
    likes: 10,
    comments: []
  },
  {
    id: 10,
    author: "Matteo Arancio",
    avatar: "https://i.pravatar.cc/150?img=23",
    timestamp: "2025-06-15T20:10:00",
    content: "Ho imparato a usare Git oggi! 🎉",
    image: "https://source.unsplash.com/featured/?code,terminal",
    likes: 24,
    comments: [
      { user: "Luca", text: "Top!" },
      { user: "Irene", text: "Benvenuto nel club!" }
    ]
  },
  {
    id: 11,
    author: "Valentina Oro",
    avatar: "https://i.pravatar.cc/150?img=26",
    timestamp: "2025-06-15T13:00:00",
    content: "Un buon layout parte da una buona struttura HTML 🧱",
    image: null,
    likes: 11,
    comments: []
  },
  {
    id: 12,
    author: "Giorgio Viola",
    avatar: "https://i.pravatar.cc/150?img=29",
    timestamp: "2025-06-14T17:30:00",
    content: "Primo esercizio con `position: absolute` 😵",
    image: null,
    likes: 15,
    comments: []
  },
  {
    id: 13,
    author: "Chiara Giallo",
    avatar: "https://i.pravatar.cc/150?img=31",
    timestamp: "2025-06-14T09:45:00",
    content: "Finalmente ho capito i media queries 📏📱🖥️",
    image: null,
    likes: 28,
    comments: [
      { user: "Giulia", text: "Bravissima!" }
    ]
  },
  {
    id: 14,
    author: "Andrea Argento",
    avatar: "https://i.pravatar.cc/150?img=33",
    timestamp: "2025-06-13T22:00:00",
    content: "Non sottovalutate mai il semantic HTML. ❤️",
    image: "https://source.unsplash.com/featured/?html,semantic",
    likes: 19,
    comments: []
  },
  {
    id: 15,
    author: "Martina Rosa",
    avatar: "https://i.pravatar.cc/150?img=36",
    timestamp: "2025-06-13T07:00:00",
    content: "Ogni giorno un po' di codice, e il sito cresce! 💪",
    image: null,
    likes: 37,
    comments: [
      { user: "Luca", text: "Mentalità vincente 🔥" }
    ]
  }
];