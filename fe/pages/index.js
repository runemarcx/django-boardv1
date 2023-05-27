import boardStore from "@/board_store/boardstore";
import AddBoard from "@/components/add_board";
import DisplayBoard from "@/components/display_board";
import Navbar from "@/components/navbar";
import { userData } from "@/data_store/data";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Home() {

  const router = useRouter();
  const { user, addBoardData } = userData();
  const [event, setEvent] = useState({
    isAddBoard: false,
  });
  const addBoard = () => {
    setEvent({ ...event, isAddBoard: true }); 
  }

  const view = () => {
    console.log(user);
  }


  return (
    <>
      <Navbar />
      <div className="container mx-auto">

        <div className="mt-10">
          <h1 className="text-2xl font-bold" onClick={view}>Boards</h1>

          <div className="grid grid-cols-3 gap-3 my-5">

            <DisplayBoard />
            {}

          </div>

        </div>
      </div>
    </>
  )
}
