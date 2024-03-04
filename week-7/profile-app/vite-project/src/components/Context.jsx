import { createContext } from 'react'
const initialCount = 0;

export const CountContext = createContext({ count: initialCount, setCount: () => {} });

export const SetCountContext = createContext(initialCount);
