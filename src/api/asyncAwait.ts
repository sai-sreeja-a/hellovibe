
import type { User, Post, Todo, CombinedResult } from "./types.js";

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function getDataWithAsyncAwait(): Promise<CombinedResult> {
  const results = await Promise.allSettled([
    fetchData<User[]>("https://jsonplaceholder.typicode.com/users"),
    fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts"),
    fetchData<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  ]);

  const errors: string[] = [];

  const user = results[0].status === "fulfilled"
    ? results[0].value
    : (errors.push("Users API failed"), []);

  const posts = results[1].status === "fulfilled"
    ? results[1].value
    : (errors.push("Posts API failed"), []);

  const todos = results[2].status === "fulfilled"
    ? results[2].value
    : (errors.push("Todos API failed"), []);

  return { user, posts, todos, errors };
}
