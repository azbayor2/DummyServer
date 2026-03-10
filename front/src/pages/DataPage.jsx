import { useState, useEffect } from 'react';
import { fetchAllData, createData } from '../api';

export default function DataPage() {
  const [dataList, setDataList] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllData();
      setDataList(Array.isArray(data) ? data : []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setError(null);
    try {
      await createData(input.trim());
      setInput('');
      await loadData();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="page">
      <h2>Data</h2>
      <p className="description">GET / - 전체 데이터 조회 | POST / - 데이터 생성</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="새 데이터 입력..."
        />
        <button type="submit">추가</button>
      </form>

      {error && <p className="error">{error}</p>}

      <div className="list-header">
        <h3>데이터 목록</h3>
        <button onClick={loadData} disabled={loading} className="btn-small">
          {loading ? '로딩...' : '새로고침'}
        </button>
      </div>

      {dataList.length === 0 && !loading ? (
        <p className="empty">데이터가 없습니다.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Comment</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.comment}</td>
                <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
