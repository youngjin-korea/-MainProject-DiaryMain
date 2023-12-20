import React, { useContext, useEffect, useState } from "react";
import MyHeader from "./../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";
import DiaryList from "../components/DiaryList";
const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  // App.js에 위치한 일기 data를 받아옴

  const [data, setData] = useState([]);
  // 헤더 날짜에 맞는 데이터만 담기위한 상태
  const [curDate, setCurDate] = useState(new Date());
  // 현재 날짜를 담은 상태
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`;
  // 헤더 가운데 날짜를 나타냄
  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        curDate.getFullYear(),
        curDate.getMonth() + 1,
        0
      ).getTime();

      setData(
        diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay)
      );
    }
  }, [diaryList, curDate]);

  const increaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() + 1, curDate.getDate())
    );
  };
  //헤더 오른쪽 버튼 눌러서 한달 추가를 다루는 함수
  const decreaseMonth = () => {
    setCurDate(
      new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate())
    );
  };
  //헤더 왼쪽 버튼 눌러서 한달 감소를 다루는 함수
  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth} />}
        rightChild={<MyButton text={">"} onClick={increaseMonth} />}
      />
      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;
