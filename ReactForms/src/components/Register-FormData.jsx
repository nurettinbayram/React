import { useState } from "react";

export default function Register() {
  const [isPasswordsMatch, setIsPasswordsMatch] = useState(false);

  function handleSubmit(e) {
    ///form submit ozelligini kapatmak icin preventDefault kullanildi.
    e.preventDefault();

    //! INPUTTAN VERI ALMANIN BASKA BIR YOLU formData YONTEMI.
    const formData = new FormData(e.target);

    ///get metodu ile inputun name propertisi verilerek key degeri seklinde bize degeri dondurur.
    console.log(formData.get("fullname"));
    console.log(formData.get("email"));
    console.log(formData.get("password"));
    console.log(formData.get("repassword"));

    if (formData.get("password") !== formData.get("repassword")) {
      setIsPasswordsMatch(true);
      return;
    }
    setIsPasswordsMatch(false);

    ///checkbox seceneklerini get ile alamayiz bunun icin getAll metotu gereklidir.
    console.log(formData.getAll("hobbies")); //bir array dondurur.

    console.log("-------Object.fromEntries(formData.entries())-----------");
    ///? YUKARIDAKI YONTEM ILE TUM VERILER CEKILEBILIR ANCAK DAHA IYI YONTEM BIR OBJE ICERISINDE SAKLAMAK OLUR.
    ///bu sekilde key valu sekilde verileri elde etmis oluruz ancak checkBox buna dahil edilmiyor bunun icin checkboxlari ayri alip dahil etmek gerekiyor.
    const data = Object.fromEntries(formData.entries());
    const hobbies = formData.getAll("hobbies");
    data.hobbies = hobbies; //DATA OBJESI ICINDE BIR HOBBIES ALANI OLUSTURULARAK HOBILER ONA ATANIR.
    console.log(data);

    //?FORMDAKI INPUTLARI SIFIRLAMAK
    //#BUNUN ALTERNATIFI RESET BUTONUN TYPE'INI SADECE RESET YAPILARAK BU KISMA HIS GEREK DUYULMAZ.
    e.target.reset(); ///bu sekilde inputlar sifirlanir.
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Register</h1>
        <p>Please enter your info!</p>
      </div>
      {/*/// required, maxLength={10}, minLength={5} gibi HTML5'in sagladigi validation kurallari mevcut.  */}
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          name="fullname"
          required
        />
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
          required
        />
      </div>

      <div className="row mb-3">
        <div className="col-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            maxLength={10}
            minLength={5}
          />
        </div>
        <div className="col-6">
          <label htmlFor="repassword" className="form-label">
            Re-Password
          </label>
          <input
            type="password"
            className="form-control"
            id="repassword"
            name="repassword"
            required
            maxLength={10}
            minLength={5}
          />
          {isPasswordsMatch && (
            <div className="invalid-feedback d-block">
              The password does NOT match...
            </div>
          )}
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="hobbies" className="form-label">
          Hobbies
        </label>
        <div className="card card-body text-bg-light">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="cars"
              value="cars"
            />
            <label htmlFor="cars" className="form-check-label">
              Araba
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="books"
              value="books"
            />
            <label htmlFor="books" className="form-check-label">
              Kitap
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="hobbies"
              id="movies"
              value="movies"
            />
            <label htmlFor="movies" className="form-check-label">
              Sinema
            </label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        {/* button type reset yapilarak inputlar bosaltilir. */}
        <button type="reset" className="btn btn-outline-light">
          Reset
        </button>
      </div>
    </form>
  );
}
