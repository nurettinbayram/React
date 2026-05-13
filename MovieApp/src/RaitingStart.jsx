/* eslint-disable react/prop-types */
//! BURADA DISARIYA HERHANGI BIR BAGIMLILIGI OLMAYAN BIR COMPONENT GELISTIRILDI DIGER PROJELERDE KULLANMAK UZERE...
import { useState } from "react";
import { PropTypes } from "prop-types";

/// BURADA COMPONENTIN PROPLARININ TURUNU GEREKLILIGINI BELIRTIYORUZ.
RaitingStart.propTypes = {
  maxRaiting: PropTypes.number.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,

  /*
  /// You can declare that a prop is a specific JS type. By default, these
  /// are all optional.
  ///import { PropTypes } from "prop-types";
  optionalArray: PropTypes.array,
  optionalBool: PropTypes.bool,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalString: PropTypes.string,
  optionalSymbol: PropTypes.symbol,
  */
};

export default function RaitingStart({
  maxRaiting = 5,
  size = 48,
  color = "#FFD700",
  onMovieRaiting,
}) {
  const [raiting, setRaiting] = useState(0);
  const [hoverRaiting, setHoverRaiting] = useState(0);

  function handleRaitingMovie(raiting) {
    onMovieRaiting(raiting);
    setRaiting(raiting);
  }

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>
        {
          //!----------------- Array.from({ length: maxRaiting }, (val, i) => Kullanumina dikkat----------------
          Array.from({ length: maxRaiting }, (val, i) => (
            /// fill propsuna icinde bir logic ifade yazilarak o anki durumuna bagli olarak donus saglanir.
            /// onRaiting yardimi ile tiklanma durumunda tiklanilan yildiza kadar dolar.
            <Star
              key={i}
              fill={hoverRaiting ? hoverRaiting >= i + 1 : raiting >= i + 1}
              color={color}
              size={size}
              onRaiting={() => handleRaitingMovie(i + 1)}
              onHoverEnter={() => setHoverRaiting(i + 1)}
              onHoverLeave={() => setHoverRaiting(0)}
            />
          ))
        }
      </div>
      {/*
      /// raiting || ""      BU KISIM ONEMLI OR OPARATURU YARDIMI ILE SOL TARAF FALSE YANI SIFIR DEGER DONDERIYORSA
      ///  BIR SONUC YAZMAZ ANCAK 0 DAN FARKLI ISE YANI BUDA TRUE OLUR O DEGER DONER*/}
      <p style={textStyle}>{hoverRaiting || raiting || ""}</p>
    </div>
  );
}

function Star({ fill, color, size, onRaiting, onHoverEnter, onHoverLeave }) {
  return (
    <span
      onClick={onRaiting}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
    >
      {
        /// fill propsuna bagli olarak icerik dolumu yada bos mu bu secilir.
        fill ? (
          /// ici dolu yildiz
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        ) : (
          /// Ici bos yildiz
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
          </svg>
        )
      }
    </span>
  );
}

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const iconStyle = {
  display: "flex",
  gap: ".2rem",
};

const textStyle = {
  margin: "0",
  fontSize: "1rem",
};
