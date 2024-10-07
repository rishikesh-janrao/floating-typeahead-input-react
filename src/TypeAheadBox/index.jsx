import { useState } from "react";
import "./TypeAheadBox.css";
import Loader from "../Loader";

function TypeAheadBox({
  initialData = [
    "Aarav",
    "Aditi",
    "Akash",
    "Anika",
    "Arjun",
    "Arushi",
    "Avni",
    "Bhavya",
    "Dev",
    "Diya",
    "Gaurav",
    "Harsh",
    "Isha",
    "Ishaan",
    "Jatin",
    "Kabir",
    "Kavya",
    "Kiran",
    "Krishna",
    "Lakshmi",
    "Madhav",
    "Meera",
    "Naman",
    "Neeraj",
    "Nikita",
    "Om",
    "Pooja",
    "Pranav",
    "Priya",
    "Rahul",
    "Ria",
    "Rohan",
    "Rishikesh",
    "Sai",
    "Rutuja",
    "Saurabh",
    "Shruti",
    "Siddharth",
    "Simran",
    "Sneha",
    "Tanvi",
    "Tanishq",
    "Tara",
    "Varun",
    "Vani",
    "Veer",
    "Vidya",
    "Vikram",
    "Yash",
    "Zara",
  ],
  name = "Names",
  type = "text",
  onChange = () => {},
  onItemSelection = (index, value) => {},
}) {
  const [suggestions, setSuggestions] = useState(initialData);
  const [textInput, setTextInput] = useState("");
  const [active, setActive] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const generateSuggestions = (e) => {
    const {
      target: { value: textboxValue },
      nativeEvent: { data: currentKeyBoardKey },
    } = e;

    setTextInput(
      currentKeyBoardKey === null && textboxValue === "" ? "" : textboxValue
    );
    let filteredData = suggestions.filter((item) =>
      item.startsWith(textboxValue)
    );
    filteredData = suggestions.filter((item) => item.includes(textboxValue));
    filteredData = suggestions.filter((item) =>
      item.toLocaleLowerCase().includes(textboxValue.toLocaleLowerCase())
    );
    const hasFilteredData =
      (currentKeyBoardKey === null && textboxValue === "") ||
      filteredData.length === 0;
    setSuggestions(hasFilteredData ? initialData : filteredData);
    onChange(e);
  };
  const onFocus = (e) => {
    setActive(true);
    setTimeout(() => setShowLoader(false), 5000);
  };
  const onBlur = (e) => setActive(false);

  const selectSuggestion = (index, value) => {
    setTextInput(value);
    setActive(false);
    onItemSelection(index, value);
  };
  return (
    <div className="box">
      <div className="box__input">
        <input
          data-state="floating"
          data-empty={`${textInput === "" ? "empty" : "filled"}`}
          onFocus={onFocus}
          onBlur={(e) => setTimeout(onBlur, 100)}
          onChange={generateSuggestions}
          value={textInput}
          type={type}
        />
        <label data-state="floating">{name}</label>
      </div>
      <div
        className={`box__suggestions ${
          active ? "box__suggestions--active" : ""
        }`}
      >
        <ul className="box__suggestion-list">
          {showLoader ? (
            <div className="box__loader-container">
              <Loader loaderColor="red" />
            </div>
          ) : (
            suggestions.map((value, index) => (
              <li
                className="box__suggestion-item"
                key={index}
                onClick={(e) => selectSuggestion(index, value)}
                dangerouslySetInnerHTML={{
                  __html: value.replace(textInput, `<b>${textInput}</b>`),
                }}
              ></li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default TypeAheadBox;
