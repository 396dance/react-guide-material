import "./Profile.css";

const Profile = ({ name, age, country, color, aaa }) => {
  return (
    <div className={`profile ${color}`}>
      <h3>Name: {name}</h3>
      <p>Age: {age} </p>
      <p>From: {country}</p>
      <p>aaa: {aaa}</p>
    </div>
  );
};

export default Profile;
