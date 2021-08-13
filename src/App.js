import { useState } from "react";
import styled from "styled-components";

function App() {
  const emojiLibrary = {
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐵": "Monkey-Face",
    "🦌": "Deer",
    "🦝": "Raccoon",
    "🐆": "Leopard",
    "🦁": "Lion",
    "🦮": "Guide Dog",
    "🐺": "Wolf",
    "🦙": "Llama",
    "🐪": "Camel",
    "🐷": "Pig Face",
    "🦓": "Zebra",
    "🐃": "Water Buffalo",
    "🐂": "Ox",
    "🐯": "Tiger Face",
    "🐈": "Cat",
    "🦄": "Unicorn",
    "🐻": "Bear",
    "🦦": "Otter",
    "🦨": "Skunk",
    "🦃": "Turkey",
    "🦚": "Peacock",
    "🦎": "Lizard",
    "🐉": "Dragon",
    "🐙": "Octopus",
    "🐜": "Ant",
    "🐚": "Spiral Shell",
    "🐛": "Bug",
    "🦗": "Cricket",
    "🐝": "Honeybee",
    "🦂": "Scorpion",
    "🐞": "Lady Beetle",
  };

  const [placeholder, setPlaceHolder] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [error, setError] = useState(false);

  // Object -> Array
  const emojiArr = Object.keys(emojiLibrary);

  // Event Handlers
  const handleClick = emoji => {
    for (let i of emojiArr) {
      if (i === emoji) {
        setPlaceHolder(emojiLibrary[i]);
        setSelectedEmoji(emoji);
        setError(false);
      }
    }
  };

  const handleChange = e => {
    for (let i of emojiArr) {
      if (i === e.target.value) {
        setPlaceHolder(emojiLibrary[i]);
        setSelectedEmoji(e.target.value);
        setError(false);
      } else {
        setError(true);
        setPlaceHolder(" ");
        setSelectedEmoji(e.target.value);
      }
    }
  };

  return (
    <AppContainer>
      <h1>Emoji Library</h1>
      <input
        type="text"
        placeholder={"Search your emoji"}
        onChange={handleChange}
      />
      <PlaceHolder>
        {selectedEmoji ? (
          <span className="selectedEmoji">{selectedEmoji}</span>
        ) : null}
        {placeholder ? (
          <h3 className="result">{placeholder}</h3>
        ) : (
          <p>Translation will appear here ... </p>
        )}
        {error ? (
          <h3 className="error-msg">Emoji not found in database!</h3>
        ) : null}
      </PlaceHolder>

      <EmojiShowcase>
        {emojiArr.map((eachItem, index) => (
          <span
            key={index}
            onClick={() => {
              handleClick(eachItem);
            }}
          >
            {eachItem}
          </span>
        ))}
      </EmojiShowcase>
    </AppContainer>
  );
}

export default App;

/* ---------------------------- STYLED COMPONENTS --------------------------- */

const AppContainer = styled.div`
  margin-top: 1rem;
  min-height: 90vh;
  width: 30rem;
  max-width: 98%;
  background-color: #000;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  h1 {
    text-align: center;
    padding-bottom: 1rem;
  }

  input {
    width: 100%;
    padding: 0.5rem 0.4rem;
    border-radius: 3px;
    border: 0.1rem solid #bbb;
    text-align: center;
    font-size: 1.5rem;
  }
`;

const PlaceHolder = styled.div`
  padding: 1rem 0 0 0;
  text-align: center;

  h3.result {
    color: rgb(25, 159, 163);
  }

  h3.error-msg {
    color: #ea4335;
  }

  span.selectedEmoji {
    font-size: 1.5rem;
  }
`;

const EmojiShowcase = styled.div`
  padding: 1rem 0.4rem;
  span {
    display: inline-block;
    cursor: pointer;
    font-size: 2rem;
    padding: 1rem 0.8rem;

    &:hover {
      background-color: #f7f7f7;
      background-color: rgba(255, 255, 255, 0.12);
      border-radius: 50%;
    }
  }
`;
