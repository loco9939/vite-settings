import React, { useEffect, useState } from 'react';

import './App.css';

function App(): React.ReactElement {
  const [mock, setMock] = useState(null);
  useEffect(() => {
    const fetchMocks = async () => {
      const response = await fetch('https://example.com/user', {
        method: 'GET',
      });
      const data = await response.json();
      setMock(data);
    };

    fetchMocks();
  }, []);
  return (
    <div>
      <p>App</p>
      <p>{mock?.firstName}</p>
    </div>
  );
}

export default App;
