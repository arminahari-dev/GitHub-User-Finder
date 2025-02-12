import avatar from "../assets/images/avatar.png";

interface CardProps {
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const Card: React.FC<{ userData: CardProps }> = ({ userData }) => {
  return (
    <div className="gap-x-8 grid grid-cols-[auto_1fr] bg-card-light shadow-2xl p-8 rounded-lg w-full h-[25rem]">
      <div>
        <img
          className="rounded-full w-[11rem]"
          src={userData?.avatar_url || avatar}
        />
      </div>
      <div className="flex flex-col gap-18">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-[#586e90] text-2xl">
            {userData?.name|| "unknown"}
          </h2>
          <p className="text-primary"> {userData?.location || "unknown"}</p>
          <span className="text-secondary">{userData?.bio || "Bio"}</span>
        </div>
        <div className="flex justify-between bg-body-light px-[5rem] py-[2rem] rounded-lg text-[#586e90]">
          <div className="flex flex-col text-center">
            <span className="font-bold">Public Repos</span>
            <span className="font-normal">{userData?.public_repos}</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-bold">Followers</span>
            <span className="font-normal">{userData?.followers}</span>
          </div>
          <div className="flex flex-col text-center">
            <span className="font-bold">Following</span>
            <span className="font-normal">{userData?.following}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
