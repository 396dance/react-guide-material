import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const onClickA = () => {
    setCountB(countA + 1);
  };
  const [countB, setCountB] = useState(10);
  const onClickB = () => {
    setCountA(countB + 1);
  };
  const [countC, setCountC] = useState(100);
  const onClickC = () => {
    setCountC(countC + 1);
  };

  return (
    <>
      <div>ボタンAを{countA}回押しました！</div>
      <button onClick={onClickA}>ボタンA</button>
      <div>ボタンBを{countB}回押しました！</div>
      <button onClick={onClickB}>ボタンB</button>
      <div>ボタンCを{countC}回押しました！</div>
      <button onClick={onClickC}>ボタンC</button>
    </>
  );
};

export default Example;
