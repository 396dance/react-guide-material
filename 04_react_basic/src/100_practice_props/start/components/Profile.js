import "./Profile.css";

const Profile = (props) => {
  return (
    <div className="profile">
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>From:{props.country}</p>
    </div>
  );
};

export default Profile;
