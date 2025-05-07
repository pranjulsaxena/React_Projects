import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from './user';

function GithubProfile() {
  const [userName, setUserName] = useState('hkirat');
  const [Loading, setLoading] = useState(null);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios(`https://api.github.com/users/${userName}`)
      setLoading(false);
      setUserData(response.data);
      console.log(response);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, [])
  if (Loading) {
    return <div className='text-center text-7xl font-bold'>Loading ...</div>
  }
  if (error) {
    return <div className="text-red-600 font-semibold mt-5">Error: {error}</div>;

  }
  return (
    <div className='border-2 border-gray-300 rounded-xl shadow-lg max-w-xl mx-auto p-6 mt-10'>
      <div className='flex flex-col items-center'>
        <div className='mt-10'>
          <input type="text" placeholder='github username ...' onChange={(event) => { setUserName(event.target.value) }} className='border rounded-sm px-3 py-1'
          />
          <button disabled={Loading || !userName || userName == 'hkirat'} className={`bg-blue-500 px-4 py-2 rounded-lg text-white  text-xl ml-1 mb-4 border  cursor-pointer ${!userName || Loading ? " disabled:cursor-not-allowed" : " "}`} onClick={fetchData}>Search</button>
        </div>
        {userData !== null ? <User use={userData} /> : null}

      </div>
    </div>
  )
}

export default GithubProfile
