import ProfilePost from "./ProfilePost";

const Posts = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h3>Recent Posts</h3>
      {data.map((post, index) => (
        <ProfilePost data={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
