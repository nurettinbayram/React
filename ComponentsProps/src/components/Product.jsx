//---------------------Birnci kullanim yontemi----------------------------
/* 
function Product() {
  // ./img/1.jpg uygulama public altinda yayinlandigi icin img yolu bu sekilde olur.

  const imgName = "1.jpg";
  const phoneTitle = "Ipone 14";
  const price = 800;
  const desc = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  return (
    <div>
      <img src={"./img/" + imgName} alt="" />
      <h2>{phoneTitle}</h2>
      <h4>{price} $</h4>
      <p>{desc}</p>
    </div>
  );
}
*/

//---------------------Ikinci kullanim yontemi----------------------------
/*
function Product() {
  // ./img/1.jpg uygulama public altinda yayinlandigi icin img yolu bu sekilde olur.
  const product_list = [
    {
      imgName: "1.jpg",
      phoneTitle: "Ipone 14",
      price: 800,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "2.jpg",
      phoneTitle: "Ipone 15",
      price: 900,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "3.jpg",
      phoneTitle: "Ipone 16",
      price: 1000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div>
      <img src={"./img/" + product_list[0].imgName} alt="" />
      <h2>{product_list[0].phoneTitle}</h2>
      <h4>{product_list[0].price} $</h4>
      <p>{product_list[0].desc}</p>
    </div>
  );
}
*/

//---------------------Ucuncu kullanim yontemi----------------------------
/*
function ProductList() {
  const product_list = [
    {
      imgName: "1.jpg",
      phoneTitle: "Ipone 14",
      price: 800,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "2.jpg",
      phoneTitle: "Ipone 15",
      price: 900,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "3.jpg",
      phoneTitle: "Ipone 16",
      price: 1000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <h2>Product List</h2>
      <Product
        imgName={"./img/" + product_list[0].imgName}
        phoneTitle={product_list[0].phoneTitle}
        price={product_list[0].price}
        desc={product_list[0].desc}
      />
      <Product
        imgName={"./img/" + product_list[1].imgName}
        phoneTitle={product_list[1].phoneTitle}
        price={product_list[1].price}
        desc={product_list[1].desc}
      />
    </div>
  );
}

function Product(props) {
  // ./img/1.jpg uygulama public altinda yayinlandigi icin img yolu bu sekilde olur.
  console.log(props);
  return (
    <div>
      <img src={props.imgName} alt="" />
      <h2>{props.phoneTitle}</h2>
      <h4>{props.price} $</h4>
      <p>{props.desc}</p>
    </div>
  );
}
*/

//---------------------Dorduncu kullanim yontemi----------------------------
/*
function ProductList() {
  const product_list = [
    {
      imgName: "1.jpg",
      phoneTitle: "Ipone 14",
      price: 800,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "2.jpg",
      phoneTitle: "Ipone 15",
      price: 900,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "3.jpg",
      phoneTitle: "Ipone 16",
      price: 1000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <h2>Product List</h2>

      {product_list.map((item, index) => (
        <Product
          key={index}
          imgName={"./img/" + item.imgName}
          phoneTitle={item.phoneTitle}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
*/

//---------------------Besinci kullanim yontemi----------------------------
/*
function ProductList() {
  const product_list = [
    {
      imgName: "1.jpg",
      phoneTitle: "Ipone 14",
      price: 800,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "2.jpg",
      phoneTitle: "Ipone 15",
      price: 900,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      imgName: "3.jpg",
      phoneTitle: "Ipone 16",
      price: 1000,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      <h2>Product List</h2>

      {product_list.map((item, index) => (
        // burada propslari obje seklinde toplu gonderdik
        <Product key={index} propsObj={item} />
      ))}
    </div>
  );
}

function Product(props) {
  // ./img/1.jpg uygulama public altinda yayinlandigi icin img yolu bu sekilde olur.
  // propslar obje seklinde aldigimiz icin props.propsObj.phoneTitle bu yuntemi kullaniyoruz

  console.log(props);
  return (
    <div>
      <img src={"./img/" + props.propsObj.imgName} alt="" />
      <h2>{props.propsObj.phoneTitle}</h2>
      <h4>{props.propsObj.price} $</h4>
      <p>{props.propsObj.desc}</p>
    </div>
  );
}
*/
//---------------------Altinci kullanim yontemi----------------------------

import PropTypes from "prop-types";

export default function Product({ propsObj }) {
  // burada sanki props objesinin icine konumlandik
  // ./img/1.jpg uygulama public altinda yayinlandigi icin img yolu bu sekilde olur.
  // propslar obje seklinde aldigimiz icin props.propsObj.phoneTitle bu yuntemi kullaniyoruz
  // ARRAY DESTRUCTURING yontemi ile function Product({ propsObj }) yapisina gecilir props yazmamiza gerek kalmadi

  //burada isActive durumuna gore yazdirdik
  if (!propsObj.isActive) {
    return null;
  }

  return (
    <div className="card shadow p-3">
      <img className="card-img-top" src={"./img/" + propsObj.imgName} alt="" />
      <div className="card-body">
        <h2 className="card-title">{propsObj.phoneTitle}</h2>
        <span className="badge text-bg-success">{propsObj.price} $</span>
        <p className="card-text">{propsObj.desc}</p>
      </div>
    </div>
  );
}

Product.propTypes = {
  propsObj: PropTypes.shape({
    isActive: PropTypes.bool,
    imgName: PropTypes.string,
    phoneTitle: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    desc: PropTypes.string,
  }).isRequired,
};
