import profile from "../../images/profile.png";
import "../../css/Profile.css";

const Profile = () => {
  return (
    <div id="profile-page">
      <div className="profile-container">
        <img src={profile} alt="profile" />
        <div className="profile-box">
          <h1>MarvelFan1994</h1>
          <div className="profile-info">
            <div className="profile-ratings">
              <p>Rating 100%</p>
              <div className="approval-container">
                <button>Like</button>
                <button>Dislike</button>
              </div>
            </div>
            <p>
              I am an ethusiastic comic book collector and vendor. Everything I
              sell has been rated by CGC. Though I primarily collect and sell
              Marvel comics, I have trades from every publication imaginable.
              Please Reach out to me if you have any questions!
            </p>
          </div>
          <div className="profile-buttons">
            <button>Add to Store</button>
            <button>My Catalogue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
