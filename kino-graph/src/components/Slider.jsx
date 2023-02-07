import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="Зараз у тренді" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="Нові релізи" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Блокбастери"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Популярний на Netflix"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Бойовики" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Епік" />
    </Container>
  );
}

const Container = styled.div``;
