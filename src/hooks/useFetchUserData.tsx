import React, { useState } from "react";

interface Data {
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
}

const defaultData: Data = {
  avatar_url: "",
  name: "",
  location: "",
  bio: "",
  public_repos: 0,
  followers: 0,
  following: 0,
};

const useFetchUserData = ({
  setInput,
}: {
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [userData, setUserData] = useState<Data>(defaultData);
  const [error, setError] = useState<string | null>(null);
  const [isloading, setIsloading] = useState<boolean>(false);

  const fetchUserData = async (username: string) => {
    try {
      setIsloading(true);
      setError(null);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) throw new Error("No Record Found");
      const data = await response.json();
      setUserData(data);
      setIsloading(false);
    } catch (err) {
      setError((err as Error).message);
      setInput("");
    } finally {
      setIsloading(false);
      setError(null);
    }
  };

  return { userData, error, isloading, fetchUserData };
};

export default useFetchUserData;
