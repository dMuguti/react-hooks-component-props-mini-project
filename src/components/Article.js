import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const displayMinutes = () => {
    if (minutes < 30) {
      return "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {displayMinutes()}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
