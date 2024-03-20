const Example = () => {
  const clickHandler = () => {
    alert("クリックしました");
  };
  const clickHandler2 = () => {
    console.log("クリックしました");
  };
  return (
    <>
      <button
        onClick={() => {
          alert("クリックしました");
        }}
      >
        クリックしてね
      </button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;
