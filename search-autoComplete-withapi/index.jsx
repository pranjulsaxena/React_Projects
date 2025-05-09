import React, { useEffect, useState } from "react";
import axios from "axios";
import Suggestions from "./suggestions";
import { MdCancel } from "react-icons/md";

function Search() {
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  const [userdata, setuserdata] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [showdropdown, setShowdropdown] = useState(false);
  const [filteredUsers, setfilteredUsers] = useState([]);

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await axios("https://dummyjson.com/users");
      const users = response.data.users.map((users) => users.firstName);
      setuserdata(users);
      console.log(users);
      setloading(false);
      seterror(null);
    } catch (err) {
      setloading(false);
      seterror(err.message);
    }
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchParam(query);

    if (query.length >= 1) {
      const filtered =
        userdata && userdata.length
          ? userdata.filter((items) => items.toLowerCase().indexOf(query) > -1)
          : [];
      setfilteredUsers(filtered);
      setShowdropdown(true);
      console.log(filtered);
    } else {
      setShowdropdown(false);
      setfilteredUsers([]);
    }
  };

  const handleClick = (event) => {
    setSearchParam(event.target.innerText);
    setShowdropdown(false);
    setfilteredUsers([]);
    console.log(event.target.innerText);
  };
  const handleCancel = () => {
    setSearchParam("");
    setShowdropdown(false);
    setfilteredUsers([]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div className="mx-auto max-w-md mt-20 shadow-md bg-gray-100 border-1 px-4 py-2 border-gray-100 relative">
      <div className="flex items-center relative">
        <input
          type="text"
          placeholder="Enter Username ..."
          onChange={handleChange}
          value={searchParam}
          className="focus:outline-blue-700 border rounded-md w-full mb-2  p-4"
        />
        <div
          className="absolute right-2 text-xl cursor-pointer hover:text-2xl"
          onClick={handleCancel}
        >
          <MdCancel />
        </div>
      </div>
      <button className="w-full border rounded-md py-4 text-white bg-blue-500 cursor-pointer hover:bg-blue-600">
        Search
      </button>
        <div className="absolute w-full left-0 mt-1 top-full z-10">{showdropdown && (
          <Suggestions data={filteredUsers} handleClick={handleClick} />
        )}</div>
    </div>
  );
}

export default Search;
