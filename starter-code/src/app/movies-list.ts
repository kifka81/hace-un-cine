export class Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}
const movies: Array<any> = [
  {
    id: 1,
      title: 'The Shawshank Redemption',
      poster: 'https://i.pinimg.com/originals/da/0d/cc/da0dcc87e0e8b776a5f88ef460834db1.jpg',
      synopsis: 'In 1947, Andy Dufresne (Tim Robbins), a banker in Maine, is convicted of murdering his wife and her lover, a golf pro. Since the state of Maine has no death...',
      genres: [
        'Crime', 'Drama'
      ],
      year: 1994,
      director: 'Frank Darabont',
      actors: [
        'Tim Robbins',
        'Morgan Freeman',
        'Bob Gunton',
        'William Sadler',
        'Clancy Brown',
        'Gil Bellows'
      ],
      hours: [
        'Monday - 19:30',
        'Monday - 22:30'
      ],
      room: 1
    },
    {
      id: 2,
      title: 'The Godfather',
      poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      synopsis: 'In late summer 1945, guests are gathered for the wedding reception of Don Vito Corleone\'s daughter Connie (Talia Shire) and Carlo Rizzi (Gianni Russo). Vito...',
      genres: [
        'Crime', 'Drama'
      ],
      year: 1972,
      director: 'Francis Ford Coppola',
      actors: [
        'Marlon Brando',
        'Al Pacino',
        'James Caan',
        'Richard S. Castellano',
        'Robert Duvall',
        'Sterling Hayden'
      ],
      hours: [
        'Wednesday - 19:30',
        'Wednesday - 22:30'],
      room: 2
    },
    {
      id: 3,
      title: 'The Godfather Part II',
      poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      synopsis: 'The Godfather Part II presents two parallel storylines. One involves Mafia chief Michael Corleone in 1958/1959 after the events of the first movie; the othe...',
      genres: [
        'Crime', 'Drama'
      ],
      year: 1974,
      director: 'Francis Ford Coppola',
      actors: [
        'Al Pacino',
        'Robert Duvall',
        'Diane Keaton',
        'Robert De Niro',
        'John Cazale',
        'Talia Shire'
      ],
      hours: [
        'Thuesday - 19:30',
        'Thuesday - 22:30'
      ],
      room: 3
    },
    {
      id: 4,
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      synopsis: 'The movie begins with a gang of men with clown masks breaking into the bank where the mob has a large portion of their money stashed. It begins with five cl...',
      genres: [
        'Action', 'Crime', 'Drama', 'Thriller'
      ],
      year: 2008,
      director: 'Christopher Nolan',
      actors: [
        'Christian Bale',
        'Heath Ledger',
        'Aaron Eckhart',
        'Michael Caine',
        'Maggie Gyllenhaal',
        'Gary Oldman'
      ],
      hours: [
        'Thuesday - 19:30',
        'Tuesday - 22:30'
      ],
      room: 4
    },
    {
      id: 5,
      title: 'Schindler\'s List',
      poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      synopsis: 'The relocation of Polish Jews from surrounding areas to Krakow begins in late 1939, shortly after the outbreak of World War II, when the German Army defeats...',
      genres: [
        'Biography', 'Drama', 'History'
      ],
      year: 1993,
      director: 'Steven Spielberg',
      actors: [
        'Liam Neeson',
        'Ben Kingsley',
        'Ralph Fiennes',
        'Caroline Goodall',
        'Jonathan Sagall',
        'Embeth Davidtz'
      ],
      hours: [
        'Friday - 19:30',
        'Friday - 22:30'
      ],
      room: 5
  }];

export {movies};
