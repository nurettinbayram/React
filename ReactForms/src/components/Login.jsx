import { useRef } from "react";

export default function Login() {
  //! FORM INPUTLARLA CALISMANIN EN ETKILI YOLU useRef KULLANMAKTIR
  const email = useRef();
  const password = useRef();

  function handleSubmit(e) {
    ///form submit ozelligini kapatmak icin preventDefault kullanildi.
    e.preventDefault();

    ///REF ile tanimlanan degerlerde current uzerinden propertylere ulasmak mumkun
    console.log(email.current.value);
    console.log(password.current.value);

    ///Bu sekildede icini bosaltmis oluruz.
    email.current.value = "";
    password.current.value = "";
  }

  return (
    ///form icin onSubmit eventi kullanildi
    <form onSubmit={handleSubmit}>
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
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
