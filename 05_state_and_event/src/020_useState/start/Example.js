import { useState } from "react";

const Example = () => {
  // 分割代入で取得;
  const [val, setVal] = useState("");
  const onChangehandler = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={onChangehandler} /> = {val}
    </>
  );
};

export default Example;
