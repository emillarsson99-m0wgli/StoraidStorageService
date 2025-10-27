

function Tiles({ Title, Text }) {
  return (
    <div className="tiles-component">
        <div className="tiles">
            <h3 className="tiles-title">{Title}</h3>
            <p className="tiles-text">{Text}</p>
        </div>
    </div>
  )
}

export default Tiles