import React from "react";
import { useParams } from "react-router-dom";
// Route 안의 element에 /:변수명 으로 해당 페이지에서 값을 받아오는 방법

const Diary = () => {
  const { id } = useParams();
  console.log("id", id);
  return <div>Diary</div>;
};

export default Diary;
