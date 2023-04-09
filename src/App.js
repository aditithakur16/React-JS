import React from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import BlogCard from './BlogCard';
function App() { 
  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description: "ifjefjoiejowgjlwjg"
    },
    {
      id: 2,
      title: "Blog Title 2",
      description: "ifjefjoiejowgjlwjg"
    },
    {
      id: 3,
      title: "Blog Title 3",
      description: "ifjefjoiejowgjlwjg"
    }
  ]
  return (
    <div className="App">
      <h1>Hello React👋</h1>
   //   <ClassComponent/>
      const blogCard = blogArr.map((item, pos) => {
        return (
          <BlogCard/>
        )
      })
      
    </div>
  );
}

export default App;
