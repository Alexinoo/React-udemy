import React from 'react';
import avatar from '../../../assets/default-avatar.svg';
export function Person({ name, nickName = 'unknown', images }) {
  //   const img = images[0].small.url; Won't work - others undefined

  //Option 1 - Longest one
  //   const img = images && images[0] && images[0].small && images[0].small.url;

  //Optional chaining - shortest one
  //   const img = images?.[0]?.small?.url;

  //  Putting 1 and 2 together - use default avatar (||)
  //   const img = images?.[0]?.small?.url || avatar;

  const img = images?.[0]?.small?.url ?? avatar;

  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4> {name}</h4>
      <p>Nickname : {nickName}</p>
    </div>
  );
}
