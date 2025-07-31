import { useState } from "react";

export default function LikeButton() {
  const [isLike, setIsLike] = useState(true);
  const [isCount, setIsCount] = useState(0);
  // Set red color only when liked
  const styles = { color: isLike ? "red" : "black" };
  
  return (
    <div>
      <p onClick={() => setIsLike(!isLike)} style={styles}>
        {isLike ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}

