import { useState } from 'react';
import { fetchPython } from '../api';

export default function PythonPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callPython = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPython();
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Python Proxy</h2>
      <p className="description">GET /python - Python 서버로 프록시 요청을 보냅니다.</p>
      <button onClick={callPython} disabled={loading}>
        {loading ? '요청 중...' : 'Python 서버 호출'}
      </button>
      {error && <p className="error">{error}</p>}
      {result && (
        <pre className="result">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
