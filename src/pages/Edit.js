import React from "react";
import { useSearchParams } from "react-router-dom";
// 경로 뒤에 ?네임=값&네임=값 으로 페이지에 값을 전달하는 방법

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return <div>Edit</div>;
};

export default Edit;
