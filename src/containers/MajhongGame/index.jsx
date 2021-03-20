import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import MahjongCard from "../../components/MahjongCard";
import {
  initializeGameBoard,
  resetIds,
  setActiveCardId,
  setCardStatus,
  compareCards,
} from "../../store/game/actions";

const useStyles = createUseStyles({
  gameWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 64px)",
    gridRowGap: "1em",
  },
});

const MajhongGame = ({
  cards,
  previousCardId,
  activeCardId,
  initializeGameBoard,
  resetIds,
  setActiveCardId,
  setCardStatus,
  compareCards,
}) => {
  const styles = useStyles();

  useEffect(() => {
    initializeGameBoard();
  }, []);

  const onCardClick = (id) => {
    setActiveCardId(id);
    setCardStatus(id);
  };

  useEffect(() => {
    if (previousCardId && activeCardId) {
      compareCards();
      resetIds();
    }
  }, [activeCardId, previousCardId]);

  return (
    <div className={styles.gameWrapper}>
      {cards.map(({ card, id }) => (
        <MahjongCard card={card} key={id} onCardClick={() => onCardClick(id)} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cards: state.game.cards,
  previousCardId: state.game.previousCardId,
  activeCardId: state.game.activeCardId,
});
const mapDispatchToProps = {
  initializeGameBoard,
  resetIds,
  setCardStatus,
  compareCards,
  setActiveCardId,
};

export default connect(mapStateToProps, mapDispatchToProps)(MajhongGame);
