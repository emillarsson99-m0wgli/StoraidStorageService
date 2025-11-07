


function StarRating({ rating }) {
    // Genererad med youtube och ai
    // https://www.youtube.com/watch?v=eDw46GYAIDQ
    const totalStars = 5;
  return (
    <div className="star-rating-component"> 
        {[...Array(totalStars)].map((_, i) => {
            const starValue = i + 1;
            return (
                <i key={i} className={`fa-star ${rating >= starValue ? "fa-solid" : "fa-regular"} star-icon`} />
                // <i className="star-icon" key={i} src={rating >= starValue ? "fa-solid fa-star" : "fa-solid fa-star"} />
            );
        })}
    </div>
  );
}

export default StarRating