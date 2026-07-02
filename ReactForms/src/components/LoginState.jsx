import { useState } from "react";

export default function Login() {
  //? Normalde her bir input icn bir state tanimlayip islem yapilabilirdi ancak cok fazla input girisi cok fazla state kullanimi demek oluyor.
  //? bu durumda cok mantikli gorunmedigi icin obje seklinde bir state tanimladik tum inputlari burada depoladik
  const initialValues = { email: "", password: "" };
  const [values, setValues] = useState(initialValues);

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
          onChange={handleInputChange}
          value={values.email}
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
          name="password"
          onChange={handleInputChange}
          value={values.password}
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button className="btn btn-outline-light">Reset</button>
      </div>
    </form>
  );
}
