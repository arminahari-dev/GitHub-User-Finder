import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchInput from "./components/SearchInput";
import Card from "./components/Card";
import toast, { Toaster } from "react-hot-toast";
import useFetchUserData from "./hooks/useFetchUserData";

function App() {
  const [input, setInput] = useState<string>("");
  const { userData, error, isloading, fetchUserData } = useFetchUserData({
    setInput,
  });

  if (error) {
    toast.error(error);
  }

  return (
    <>
      <div className="flex justify-center items-center bg-body-light h-screen">
        <div className="flex flex-col justify-start gap-8 pt-8 w-[45%] h-screen">
          <Header />
          <SearchInput
            input={input}
            setInput={setInput}
            fetchUserData={fetchUserData}
            isloading={isloading}
          />
          <Card userData={userData} />
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
