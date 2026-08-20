import { useRef } from "react";

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();

    //! Bu sekilde forum tum verilerine ulasilabilir
    const formData = new FormData(e.target);
    console.log(formData.get("email"));
    console.log(formData.get("password"));

    //!Bu sekilde form icerigini sirfirlariz.
    e.target.reset();

    //? checkboxlar ile calismak icin getAll metoduna ihtiyacimiz var bu durumda daha detayli bilgi icin
    //? BTK 7.5 bolumu izlenmeli yada diger ReactForm prjesine bakiniz.

    //! Formu sifirlamanin bir diger yolu reset butonunun type'ini reset yapilmasi yeterlidir.
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" />
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
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">
          Reset
        </button>
      </div>
    </form>
  );
}
