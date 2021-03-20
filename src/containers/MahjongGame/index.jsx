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
import PropTypes from "prop-types";

const useStyles = createUseStyles({
  gameWrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 64px)",
    gridRowGap: "1em",
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
