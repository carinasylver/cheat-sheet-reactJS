
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
  wiki: "https://pt.wikipedia.org/wiki/Hedy_Lamarr",
};

function Profile2() {
  //console.info("render");
  return (
    <>      
      <a href={user.wiki} target="_blank">
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          style={{
          width: user.imageSize,
          height: user.imageSize
          }}
        />
      </a>
      <h1>{user.name}</h1>     
    </>
  );
}

export default Profile2;
