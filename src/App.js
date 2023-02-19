import { dummy } from "./movieDummy";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {/* dummy 파일에 접근해 리스트 렌더링하기 */}
        {dummy.results.map((item) => {
          // props 전달하기
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
