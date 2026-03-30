/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

function Form(props) {
  const [inputText, setInputText] = useState("");
  const [selectOption, setSelectOption] = useState("1");
  const inputRef = useRef(null);

  function addItemHendler(e) {
    e.preventDefault();
    if (inputText) {
      props.addItem({ text: inputText, option: selectOption });
      setInputText("");
      inputRef.current.focus();
    }
  }

  function inputTextHandler(txt) {
    setInputText(txt.target.value);
  }

  function selectOptionHendler(option) {
    setSelectOption(option.target.value);
  }

  return (
    <form className="form">
      <input
        type="text"
        placeholder="Ürün adı giriniz"
        onChange={inputTextHandler}
        value={inputText}
        ref={inputRef}
      />
      <select onChange={selectOptionHendler}>
        {/*/// burada Array.from bir liste olusturuyor map ile bu liste uzerinde dolasiyoruz */}
        {Array.from({ length: 10 }, (v, i) => i + 1).map((idx) => (
          <option key={idx} value={idx}>
            {idx}
          </option>
        ))}
      </select>
      {/* burada butona event eklendi yanlis degil ancak forma onSubmit eventi eklenmesi cok daha dogru */}
      <button type="submit" onClick={addItemHendler}>
        Ekle
      </button>
      <button type="button" onClick={props.clearHandle}>
        Clear List
      </button>
    </form>
  );
}

export default Form;
