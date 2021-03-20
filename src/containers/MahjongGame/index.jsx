import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import PropTypes from "prop-types";

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
  button: {
    background: "#fff",
    outline: "none",
    padding: 7,
    marginTop: 20,
    border: "1px solid rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
  },
});

const MahjongGame = ({
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

  const onCardClick = (id) => {
    setActiveCardId(id);
    setCardStatus(id);
  };

  const restartGame = () => initializeGameBoard();

  useEffect(() => {
    initializeGameBoard();
  }, []);

  useEffect(() => {
    if (previousCardId && activeCardId) {
      compareCards();
      resetIds();
    }
  }, [activeCardId, previousCardId]);

  return (
    <>
      <div className={styles.gameWrapper}>
        {cards.map(({ card, id }) => (
          <MahjongCard
            card={card}
            key={id}
            onCardClick={() => onCardClick(id)}
          />
        ))}
      </div>
      <button className={styles.button} onClick={restartGame}>
        Restart game
      </button>
    </>
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

MahjongGame.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      card: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
  previousCardId: PropTypes.string.isRequired,
  activeCardId: PropTypes.string.isRequired,
  initializeGameBoard: PropTypes.func.isRequired,
  resetIds: PropTypes.func.isRequired,
  setActiveCardId: PropTypes.func.isRequired,
  setCardStatus: PropTypes.func.isRequired,
  compareCards: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(MahjongGame);
