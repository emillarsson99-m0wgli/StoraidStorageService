

function Tiles({ Title, Text, className }) {
  return (
    <div className="tiles-component">
        <div className={`tiles ${className}`}>
            <h3 className="tiles-title">{Title}</h3>
            <p className="tiles-text">{Text}</p>
        </div>
    </div>
  )
}

export default Tiles