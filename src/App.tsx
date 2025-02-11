import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [input, setInput] = useState<string>("");
  const { userData, error, fetchUserData } = useFetchUserData();

  if (error) {
    toast.error(error);
  }

  return (
    <div className="flex justify-center items-center bg-body-light h-screen">
      <div className="flex flex-col justify-start gap-8 pt-8 w-[45%] h-screen">
        <Header />
        <SearchInput
          input={input}
          setInput={setInput}
          fetchUserData={fetchUserData}
        />
        <Card userData={userData} />
      </div>
      <Toaster />
    </div>
  );
}

export default App;

function useFetchUserData() {
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

  const [userData, setUserData] = useState<Data>(defaultData);
  const [error, setError] = useState<string | null>(null);

  const fetchUserData = async (username: string) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.status === 404) throw new Error("No Record Found");
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return { userData, error, fetchUserData };
}
