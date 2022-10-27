import React from "react";

function UserFavs({ allUsers, user }) {
  const { name, favorites } = allUsers;
  console.log(allUsers.id)

  // const image = [allUsers.id.favorites]

  return (
    <div>
      <h1>Favorites</h1>
      {/* <div>{image}</div> */}
    </div>
  )
}

export default UserFavs;
