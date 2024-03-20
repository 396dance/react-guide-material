import "./Container.css";

const Container = ({ as: aaa, bbb: ccc }) => {
  console.log(aaa, ccc);
  return (
    <div className="container">
      {/* <h3>{title}</h3>
      <h3>{children}</h3> */}
    </div>
  );
};

export default Container;
