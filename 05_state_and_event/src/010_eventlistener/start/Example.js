const Example = () => {
  const clickHandler = () => {
    alert("クリックしました");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button>クリックしてね</button>
    </>
  );
};

export default Example;
