import { useState } from "react";

/// HOOKUMUZ DISARIDAN INITIAL VALUE VE FUNCTION ALIYOR BU FONKSIYONUN GOREVI HER IMPUTUN VALIDASYON KURALLARINA GORE
/// HAREKET ETMESINI SAGLAMAK. FOMKSIYONUN ICERIGI HOOKSU KULLANDIGIMIZ SAYFADA ILGILI INPUTA VE DERGERLERE BAGLI
/// OLARAK TANIMLANIR.
export default function useInput(initialValues, validationFn) {
  const [value, setValue] = useState(initialValues);

  const [isEdited, setIsEdited] = useState(false);

  //the function we expect from outside it will replase validationFn(value) so we can send different fonctionalty to here
  const isValid = validationFn(value);

  //! Blur input focus eventi bittikten sonra tetiklenir.
  function handleInputBlur() {
    setIsEdited(true);
  }

  function handleInputChange(e) {
    setValue(e.target.value); // set value of state from input.
    setIsEdited(false); // once we start to change input we set edited status false so hide input error msg.
  }

  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError: isEdited && !isValid,
  };
}
