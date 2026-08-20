import { useState } from "react";
import Input from "./Input";

export default function Login() {
  //? Normalde her bir input icn bir state tanimlayip islem yapilabilirdi ancak cok fazla input girisi cok fazla state kullanimi demek oluyor.
  //? bu durumda cok mantikli gorunmedigi icin obje seklinde bir state tanimladik tum inputlari burada depoladik
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);

  ///------VALIDATION PROCES-STEP-1--------
  // const isEmailInValid = values.email.length > 0 && !values.email.includes("@");
  // const isPasswordInValid =values.password !== "" && values.password.length < 5;

  ///------VALIDATION PROCES-STEP-2--------
  const [isEdited, setIsEdited] = useState({ email: false, password: false });

  const isEmailInValid = isEdited.email && !values.email.includes("@");
  const isPasswordInValid = isEdited.password && values.password.length < 5;

  //! Blur input focus eventi bittikten sonra tetiklenir.
  function handleInputBlur(e) {
    const name = e.target.name;

    ///ilgili inputta focus oldu ve ondan ciktiktan sinra blur eventi tetiklenir ve burasi true'ya doner
    setIsEdited((prev) => ({
      ...prev,
      [name]: true,
    }));
  }

  function handleSubmit(e) {
    ///form submit ozelligini kapatmak icin preventDefault kullanildi.
    e.preventDefault();
    console.log(values);
  }

  function handleInputChange(e) {
    const name = e.target.name; //name propertysinden donen ismin objedeki key ile eslestigine dikkat et yani donen deger email-email olmali
    const value = e.target.value;

    setValues({
      ///burada asagida belirttigi gibi obje acilir son deger ilk degeri overriden eder.
      ...values, // email:"nn@gmail.com", password:"123", email:xx@gmail.com
      [name]: value,
    });

    ///handleInputBlur() methodunda true ya donen degerleri degistirmeye calisildiginda false dergerine donduruyoruz.
    setIsEdited((prev) => ({
      ...prev,
      [name]: false,
    }));
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
          name="email"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={values.email}
        />
        {isEmailInValid && (
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
          name="password"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={values.password}
        />
        {isPasswordInValid && (
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
