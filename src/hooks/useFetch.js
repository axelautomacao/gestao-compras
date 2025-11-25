import { apiFetch } from "../services/api.js";

export async function useFetch(path, options) {
  try {
    const data = await apiFetch(path, options);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
