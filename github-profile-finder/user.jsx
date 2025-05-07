import React from 'react'

function User({ use }) {
    const { avatar_url, followers, following, login, created_at, public_repos } = use;
    const created_date = new Date(created_at);

    return (
        <div className='flex flex-col items-center space-y-5'>
            <img src={avatar_url} className='w-32 h-32 rounded-full border-4' alt={login} />
            <h2 className='font-bold text-2xl'>{use.name}</h2>
            <p className='text-gray-600'><a href={`https://github.com/${login}`}>{login}</a></p>
            <div className="flex space-x-6 mt-4">
                <div><span className="font-bold">{followers}</span> Followers</div>
                <div><span className="font-bold">{following}</span> Following</div>
                <div><span className="font-bold">{public_repos}</span> Repos</div>
            </div>
            <a href={use.html_url} target="_blank" className="text-blue-600 hover:underline mt-4 block">
                View GitHub Profile
            </a>
            {use.location && <p>📍 {use.location}</p>}
            {use.company && <p>🏢 {use.company}</p>}

            <div>{`Joined on : ${created_date.toLocaleDateString()}`}</div>
        </div>
    )
}

export default User
