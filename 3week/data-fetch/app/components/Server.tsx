// const getPosts = async () =>
//   await (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();

const getMovieList = async () => {
  const url =
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWRhNTczZDk3NTc2ZDUxNGM3NTYyZjNjMjI3NzgxYiIsInN1YiI6IjY1N2MxMjQwZTkzZTk1MjE4ZjZkMjM5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HkyRzjy-li0pLAqbjEVApq9hBDG6TlLdtJ56YuttHeU",
    },
  };
  const result = await fetch(url, options);
  const data = result.json();
  return data;
};

export default async function Server() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // const data = await res.json();
  // const data = await getPosts();

  const movieList = await getMovieList();
  return (
    <>
      <h1>Client Component</h1>
      <pre>{JSON.stringify(movieList, null, 2)}</pre>
    </>
  );
}
