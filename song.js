/*
* Song attributes expressed with variables and ouput with console.log
 */

// Song attributes

// The song artist
var artist = 'Joe Bonamassa';

// Song title
var songTitle = 'Sloe Gin';

// Song duration: minutes:seconds
var songDuration = '8:13';

// Song duration in seconds
var songDurationInSeconds = 493;

// Song composer(s)
var songComposers = ['Bob Ezrin', 'Michael Kamen'];

// Date song was initially released
var releaseDate = 'August 21, 2007';

// Is this a favorite song?
var favoriteSong = true;

// Album genre
var songGenre = 'Blues Rock';

// Billboard peak (US)
var billboardChartPeakUS = 184;

// Label
var songLabel = 'J & R Adventures';

// song Ratings: number of stars out of 5
var ratings = {
  allMusic: 4.5,
  spotify: 5,
  billboard: 4.5,
  amazonMusic: 5,
  rockMag: 4.0
};

// Output the attributes
console.log('Artist: ', artist);
console.log('Song Title: ', songTitle);
console.log('Song Duration: ', songDuration);
console.log('Duration in seconds: ', songDurationInSeconds);
console.log('Song Composers: ', ...songComposers);
console.log('Release Date: ', releaseDate);
console.log('Is this a favorite song? ', favoriteSong);
console.log('Genre: ', songGenre);
console.log('US Billboard Chart Peak: ', billboardChartPeakUS);
console.log('Label: ', songLabel);
console.log('Ratings for song (out of 5 stars):\n ', JSON.stringify(ratings));
