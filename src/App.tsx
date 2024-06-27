import { useEffect, useState } from 'react';
import styled from 'styled-components';
import appStore from './stores/app.store';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  const [mock, setMock] = useState(null);

  const bears = appStore(state => state.bears);

  const increase = appStore(state => state.increase);
  const decrease = appStore(state => state.decrease);

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

      <p>Bear count: {bears}</p>
      <Button onClick={() => increase(1)}>+ Increase</Button>
      <Button onClick={() => decrease(1)}>- Decrease</Button>
    </div>
  );
}

export default App;
