import { useState } from "react";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../utils/validation";

export default function Login() {
  ///BURADA OLUSTURDUGUMUZ HOOKUN HER BIR INPUT ICIN ICERIK DEGERLERINI FAKLI ISIMLENDIRDIK.
  ///HOOKTAN DONEN DEGERLER IKI NOKTANDAN ONCEKI DEGERLERDIR BUNU HER INPUTA GORE OZELLESTIRMEK ICIN IKI NOKTADAN SONRA
  ///HER INPUT ICIN ONA OZGU ISIMLER VERILDI.
  const {
    value: emailValue,
    handleInputBlur: handleEmailBlur,
    handleInputChange: handleEmailChange,
    hasError: hasEmailError, //hasError GONDERILEN HEM FONKSIYON SONUCUNU HEMDE HOOKTAKI DIGER LOGIK SONUCLARIN DONDERIR.
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value)); //BURADA TANIMLANAN FONKSIYON HOOK ICINDEKI FONKSIYON YERINE GECER. BU FONKSIYON EMAIL'E OZGU.

  const {
    value: passwordValue,
    handleInputBlur: handlePasswordBlur,
    handleInputChange: handlePasswordChange,
    hasError: hasPasswordError,
  } = useInput("", (value) => hasMinLength(value, 4));

  function handleSubmit(e) {
    ///form submit ozelligini kapatmak icin preventDefault kullanildi.
    e.preventDefault();

    if (hasEmailError || hasPasswordError) return;

    console.log(emailValue, passwordValue);
  }

  return (
    ///form icin onSubmit eventi kullanildi
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your email and password!</p>
      </div>
      <Input
        id="email"
        name="email"
        labelText="Email"
        error={hasEmailError && "Enter valid email!"} //BU HOOKTAN DONEN PARAMETRE SONCU VERILECEK ERROR.
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        value={emailValue}
        type="email"
      />
      {/* /// KARSI TARAFTA BUTUN PROPERTYLER ICIN PROPS OLUSTURULMASINA GEREK YOK
      /// ...PROPS YARDIMI ILE VERILER CIKARILABILR. */}
      <Input
        labelText="Password"
        id="password"
        name="password"
        type="password"
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        value={passwordValue}
        error={
          hasPasswordError && "The password must be at least 5 characters long."
        }
      />
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
