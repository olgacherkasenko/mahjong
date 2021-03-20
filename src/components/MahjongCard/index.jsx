import React from "react";
import { createUseStyles } from "react-jss";
import { HIDDEN } from "../../constants/cardStatuses";

const useStyles = createUseStyles({
  card: {
    width: 40,
    height: 48,
    background: "#fff",
    border: "1px solid",
    borderRadius: 10,
    lineHeight: "3em",
    textAlign: "center",
  },
});

const MahjongCard = ({ card, onCardClick }) => {
  const styles = useStyles();
  const { status, value } = card;

  return (
    <button className={styles.card} onClick={onCardClick}>
      {status === HIDDEN ? "?" : value}
    </button>
  );
};

export default MahjongCard;
