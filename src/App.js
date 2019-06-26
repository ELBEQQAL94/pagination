import React, {useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Posts from './components/Posts';
import Pagination from './components/Pagination';

const App = () => {

  const [posts, setPost] = useState([]);

  const [loading, setLaoding] = useState(false);

  const [page, setPage] = useState(1);

  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLaoding(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPost(res.data);
      setLaoding(false);
    };
    fetchPosts();
  }, []);

  // get current posts
  const indexOfLastPost = page * postsPerPage;
  const indexOfFristPage = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFristPage, indexOfLastPost);

  const paginate = (number) => setPage(number);
  
  return (
    <div className="container mt-5">
       <h1 className="text-primary mb-3">my blog</h1>
       <Posts posts={currentPosts} loading={loading} />
       <Pagination 
          paginate={paginate} 
          postsPerPage={postsPerPage} 
          totalPosts={posts.length}
        />
    </div>
  );
};

export default App;