export async function getData<T>(url: string): Promise<T> {
  const data = await fetch(url);
  return data.json();
}
