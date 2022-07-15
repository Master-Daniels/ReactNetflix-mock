const KEY = "71c1f5cba0859a406283f26117119963";
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=1`,
  requestToprated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${KEY}`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  requestHorror: `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&query=horror&page=1&include_ads=false`,
};

export default requests