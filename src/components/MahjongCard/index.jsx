import React from "react";
import { createUseStyles } from "react-jss";
import classnames from "classnames";
import { HIDDEN } from "../../constants/cardStatuses";
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  card: {
    width: 40,
    height: 48,
    background: "#fff",
    borderRadius: 10,
    lineHeight: "3em",
    textAlign: "center",
    border: "1px solid rgba(0, 0, 0, 0.25)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    outline: "none",
  },
  visible: {
    border: "1px solid rgba(94, 235, 52, 0.4)",
    boxShadow: "0px 0px 10px rgba(94, 235, 52, 0.4)",
  },
});

const MahjongCard = ({ card, onCardClick }) => {
  const styles = useStyles();
  const { status, value } = card;

  return (
    <button
      className={classnames(styles.card, {
        [styles.visible]: status !== HIDDEN,
      })}
      onClick={onCardClick}
    >
      {status === HIDDEN ? "" : value}
    </button>
  );
};

MahjongCard.propTypes = {
  card: PropTypes.shape({
    status: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
  onCardClick: PropTypes.func.isRequired,
};
export default MahjongCard;
