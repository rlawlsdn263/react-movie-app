import React from 'react';

// 이미지 절대경로 설정
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

/* 
  Movie 컴포넌트 생성
  props 파라미터 세팅
*/
function Movie({title, poster_path, vote_average }){
  return(
    <div className="movie-container">
      {/* 이미지 경로 + props */}
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터"/>
      <div className="movie-info">
        <h4>{title}</h4>
        <span>{vote_average}</span>
      </div>
    </div>
  )
}

export default Movie;