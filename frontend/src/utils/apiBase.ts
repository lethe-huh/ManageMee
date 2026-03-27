const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const resolveApiBase = () => {
  const configuredBase =
    (import.meta as any).env?.VITE_API_URL ??
    (import.meta as any).env?.VITE_API_BASE_URL;

  if (configuredBase) {
    const normalizedBase = trimTrailingSlash(String(configuredBase));
    return normalizedBase.endsWith('/api')
      ? normalizedBase.slice(0, -4)
      : normalizedBase;
  }

  if (
    typeof window !== 'undefined' &&
    window.location.hostname !== 'localhost' &&
    window.location.hostname !== '127.0.0.1'
  ) {
    return 'https://managemee.onrender.com';
  }

  return 'http://localhost:3001';
};

export const API_BASE = resolveApiBase();
export const API_BASE_WITH_API = `${API_BASE}/api`;