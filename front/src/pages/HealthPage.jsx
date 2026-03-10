import { useState } from 'react';
import { fetchHealth } from '../api';

export default function HealthPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchHealth();
      setResult(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h2>Health Check</h2>
      <p className="description">GET /health - 서버 상태를 확인합니다.</p>
      <button onClick={checkHealth} disabled={loading}>
        {loading ? '확인 중...' : '헬스체크 실행'}
      </button>
      {error && <p className="error">{error}</p>}
      {result && (
        <pre className="result">{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
