import React from 'react';

export default function GamesList ({games}) {

  const emptyMessage = (
    <p>There are no games yet in your collection.</p>
  );

  const gamesList = (
    <p>Games List</p>
  );

  return (
    <div>
      {games.length === 0? emptyMessage: gamesList}
    </div>
  );
}