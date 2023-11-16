export async function fetchMovie(movieID) {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${movieID}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "88ab55b92dmsh4494a8fe474be28p10df7fjsnffe426a3393d",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (response.ok) {
    return response.json();
  }
  throw new Error("fetch products error");
}
