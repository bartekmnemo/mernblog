import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./home.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

export default function Home() {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  console.log(axios);

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get("/posts" + search);
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      {user ? "" : <Header />}
      <div className="home">
        <Posts posts={posts} id="postsId" />
      </div>
    </>
  );
}
