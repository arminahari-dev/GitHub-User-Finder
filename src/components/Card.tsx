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
    <div className="flex flex-col gap-4 bg-card-light dark:bg-card-dark shadow-2xl p-4 md:p-8 rounded-lg w-full">
      <div className="flex flex-row-reverse justify-end items-center gap-4">
        <div>
          <h2 className="font-bold text-[#586e90] dark:text-text-dark text-2xl">
            {userData?.name || "unknown"}
          </h2>
          <p className="text-primary"> {userData?.location || "unknown"}</p>
        </div>
        <div>
          <img
            className="rounded-full size-16 md:size-20"
            src={userData?.avatar_url || avatar}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:pl-[6rem]">
        <div>
          <span className="text-secondary dark:text-text-dark">
            {userData?.bio || "Bio"}
          </span>
        </div>
        <div className="flex justify-between bg-body-light dark:bg-body-dark p-4 md:p-8 rounded-lg w-full text-[#586e90] text-[1rem] dark:text-text-dark whitespace-break-spaces">
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
