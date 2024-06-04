import React from 'react';

const BlogIcon = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/blogicon.png`}
        alt="Blog Icon"
        style={{ width: '50px', height: 'auto' }}
      />
    </div>
  );
};

export default BlogIcon;
