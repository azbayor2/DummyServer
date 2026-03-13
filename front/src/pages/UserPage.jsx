import { useState, useEffect } from 'react';
import { fetchUsers, createUser, deleteUser } from '../api';

export default function UserPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setError(null);
    try {
      await createUser(name.trim(), email.trim());
      setName('');
      setEmail('');
      await loadUsers();
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteUser(id);
      await loadUsers();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="page">
      <h2>Users</h2>
      <p className="description">GET /users - 전체 유저 조회 | POST /users - 유저 생성 | DELETE /users/:id - 유저 삭제</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <button type="submit">추가</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="list-header">
        <h3>유저 목록</h3>
        <button onClick={loadUsers} disabled={loading} className="btn-small">
          {loading ? '로딩...' : '새로고침'}
        </button>
      </div>

      {users.length === 0 && !loading ? (
        <p className="empty">유저가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>이름</th>
              <th>이메일</th>
              <th>생성일</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt ? new Date(user.createdAt).toLocaleString() : '-'}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)} className="btn-small btn-danger">
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
