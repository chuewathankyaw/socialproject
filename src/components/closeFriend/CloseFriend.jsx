import "./closeFriend.css";

export default function CloseFriend({ user }) {
  return (
    <li className="sideberFriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}
