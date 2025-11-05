function StarRating({ rating }) {
    // Genererad med youtube och ai
    // https://www.youtube.com/watch?v=eDw46GYAIDQ
    const totalStars = 5;
  return (
    <div className="star-rating-component"> 
        {[...Array(totalStars)].map((_, i) => {
            const starValue = i + 1;
            return (
                <img className="star-icon" key={i} src={rating >= starValue ? "/StarIcon.svg" : ''} />
            );
        })}
    </div>
  );
}

export default StarRating