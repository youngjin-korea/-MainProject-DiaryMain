import React from "react";

const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  //   btnType에 positive 와 negative 둘중 하나가 아니면 default를 반환하여 넣어줌.
  return (
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      //   위와 같이 클래스 이름을 정해주면 공백을 기준으로 두 배열의 요소가 이어짐.
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
