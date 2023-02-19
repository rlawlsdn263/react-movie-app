import React from 'react';

/* 
  Movie 컴포넌트 생성
  props 파라미터 세팅
*/
function Movie({title, poster_path, vote_average }){
  return(
    <div className="movie-container">
      <img />
      <div className="movie-info">
        <h4>제목</h4>
        <span>평점</span>
      </div>
    </div>
  )
}

export default Movie;