import React from 'react';

export default function FetchLayout({ actividad }) {
  return (
    <div style={{color : "red"}}>
      {actividad.key ? (
        <div>
          <p>{actividad.activity}</p>
          <p>{actividad.type}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
