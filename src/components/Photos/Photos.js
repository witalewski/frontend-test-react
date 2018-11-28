import React from 'react';

const Photos = ({ photos }) => (
  <ul className="photos">
    {photos.map(({ url, src }) => {
      const image = <img alt="Restaurant" src={src} />;
      return (
        <li key={src}>
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {image}
            </a>
          ) : (
            image
          )}
        </li>
      );
    })}
  </ul>
);

export { Photos };
