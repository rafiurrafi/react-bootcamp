import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../store/post/post.actions";
import { selectPosts } from "../store/post/post.select";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  useEffect(() => {
    fetch("https://jsonplaceholder.ir/users")
      .then((res) => res.json())
      .then((data) => dispatch(setPosts(data)));
  }, []);
  console.log(posts);
  return <div>Helo</div>;
};

export default Posts;
