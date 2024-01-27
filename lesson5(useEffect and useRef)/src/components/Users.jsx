import React from 'react'
const Users = ({users}) => {
  return (
    <div className="users">
        <ul className="list">
            {users?.map((user) => ( // объяснить почему вышла ошибка и поставить оператор ? (ОПЦИОНАЛЬНАЯ ЦЕПЬ)
            // https://www.youtube.com/watch?v=slaaDOt0ZvM скинуть видос
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users