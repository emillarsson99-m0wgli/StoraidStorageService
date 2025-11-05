function StarRating({ rating }) {
    
    const totalStars = 5;
  return (
    <div className="star-rating-component"> 
        {[...Array(totalStars)].map((_, i) => {
            const starValue = i + 1;
            return (
                <img className="star-icon" key={i} src={rating >= starValue ? "/starIcon.svg" : ''} />
            );
        })}
    </div>
  );
}

export default StarRating