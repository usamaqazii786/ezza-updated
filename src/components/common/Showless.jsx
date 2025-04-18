"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const ShowmoreLess = ({ content, className }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleContent = (e) => {
    e.preventDefault();
    setShowMore(!showMore);
  };

  const limitedContent = content?.length <= 400
    ? <span className={`${className}`}>{content}</span>
    : (
      <span className={`${className}`}>
        {showMore ? content : `${content?.slice(0, 400)}`}
      </span>
    );

  return (
    <div>
      {limitedContent}
      {content.length > 35 && (
        <Link href="#" onClick={handleToggleContent} style={{ color: "#FFD700" }}>
          {showMore ? ' Show Less' : ' Read More...'}
        </Link>
      )}
    </div>
  );
};

export default ShowmoreLess;

// Usage example
// <ShowmoreLess content="Your content here..." className="your-class" />
