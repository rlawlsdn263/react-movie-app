import { dummy } from "./movieDummy";
import Movie from "./components/Movie";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {/* dummy 파일에 접근해 리스트 렌더링하기 */}
        {dummy.results.map((item) => {
          return <Movie></Movie>;
        })}
      </div>
    </div>
  );
}

export default App;
