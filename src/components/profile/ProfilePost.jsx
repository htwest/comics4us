const ProfilePost = ({ data }) => {
  return (
    <div className="post">
      <h5>{data.title}</h5>
      <p>{data.message}</p>
      <div className="post-buttons">
        <button>Like</button>
        <button>Dislike</button>
        <button>Message</button>
      </div>
    </div>
  );
};

export default ProfilePost;
