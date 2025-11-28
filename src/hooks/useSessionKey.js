import { useEffect } from 'react';

export function useSessionKey(keyName = 'sessionKey') {
  useEffect(() => {
    const key = sessionStorage.getItem(keyName);
    if (!key) {
      const newKey = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      sessionStorage.setItem(keyName, newKey);
    }
  }, [keyName]);
}
