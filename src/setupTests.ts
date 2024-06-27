import '@testing-library/jest-dom';
import { server } from './mocks/node';

server.listen();

vi.mock('zustand'); // to make it work like Jest (auto-mocking)
