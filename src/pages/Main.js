import React from 'react';

export default function Main({ match }) {
  return (
    <h1>{match.params._id}</h1>
  );
}