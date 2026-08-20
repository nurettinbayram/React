import { useRef, useState } from "react";

export default function Login() {
  //! FORM INPUTLARLA CALISMANIN EN ETKILI YOLU useRef KULLANMAKTIR
  const email = useRef();
  const password = useRef();

  const [emailEroor, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  //! BURADAKI VALIDATION FORM SABMIT EDILDIKTEN SONRA YAPILMASI GEREKEN KONTROLLER. LOGINSTATE-VALIDATION.JS
  //! DOSYASINDAKI VALIDATION KULLANICININ ANLIK DURUMUNU BELIRTEN VALIDATION.
  function handleSubmit(e) {
    setEmailError(false);
    setPasswordError(false);

    ///form submit ozelligini kapatmak icin preventDefault kullanildi.
    e.preventDefault();

    ///REF ile tanimlanan degerlerde current uzerinden propertylere ulasmak mumkun
    const emailVal = email.current.value;
    const passwordVal = password.current.value;

    ///input degerlerini kontrol edip sonuca gore stateler guncellenir.
    const isEmailInvalid = !emailVal.includes("@");
    const isPasswordInvalid = passwordVal.length < 5;

    if (isEmailInvalid) {
      setEmailError(true);
      return;
    }

    if (isPasswordInvalid) {
      setPasswordError(true);
      return;
    }

    console.log("FORM SUBMITTED...");

    setEmailError(false);
    setPasswordError(false);
    ///Bu sekildede icini bosaltmis oluruz.
    email.current.value = "";
    password.current.value = "";
  }

  return (
    ///form icin onSubmit eventi kullanildi
    //? noValidate html5'in validation ozelligini kapatir.
    <form onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your email and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          ref={email} //#REF PROPERTYSI ILE STATE OBJESI BAGLANIR.
        />
        {emailEroor && (
          <div className="invalid-feedback d-block">Enter valid email.</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          ref={password} //#REF PROPERTYSI ILE STATE OBJESI BAGLANIR.
        />
        {passwordError && (
          <div className="invalid-feedback d-block">
            The password must be at least 5 characters long.
          </div>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
