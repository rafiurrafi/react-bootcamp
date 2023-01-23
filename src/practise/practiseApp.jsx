import { useEffect, useState } from "react";

const PractiseApp = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  function func() {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((page) => page + 1);
    }
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/?_limit=9&_page=${page}`)
      .then((res) => res.json())
      .then((data) => setPosts((prev) => [...prev, ...data]));
  }, [page]);
  useEffect(() => {
    window.addEventListener("scroll", func);
  }, []);
  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div style={{ padding: "3rem 0" }}>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default PractiseApp;
