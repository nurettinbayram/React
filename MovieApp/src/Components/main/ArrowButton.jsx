/* eslint-disable react/prop-types */
import { colors } from "../../Helper/const";

export default function ArrowButton({ isOpen }) {
  return isOpen ? (
    <i className="bi bi-caret-up-square" style={{ color: colors.priColor }}></i>
  ) : (
    <i
      className="bi bi-caret-down-square"
      style={{ color: colors.priColor }}
    ></i>
  );
}
