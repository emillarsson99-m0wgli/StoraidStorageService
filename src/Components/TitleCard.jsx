import React from 'react'

function TitleCard({ Title, Text }) {
  return (
    <div className="title-card-container">
        <h1>{Title}</h1>
        <p>{Text}</p>
    </div>
  )
}

export default TitleCard