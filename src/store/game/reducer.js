import {
  INITIALIZE_GAME_BOARD,
  RESET_IDS,
  SET_ACTIVE_CARD_ID,
  SET_CARD_STATUS,
  COMPARE_CARDS,
} from "./types";
import { VISIBLE, HIDDEN } from "../../constants/cardStatuses";
import generateCards from "../../utils/generateCards";

const initialState = {
  cards: [],
  activeCardId: "",
  previousCardId: "",
};

const changeCardStatus = (state, action) => {
  const currCard = state.cards.find(({ id }) => id === action.payload);
  currCard.card.status = VISIBLE;

  return [...state.cards];
};

const compareCardValues = (state) => {
  const prevCard = state.cards.find(({ id }) => id === state.previousCardId);
  const currCard = state.cards.find(({ id }) => id === state.activeCardId);

  if (prevCard.card.value === currCard.card.value) {
    [currCard, prevCard].forEach(({ card }) => (card.status = VISIBLE));
  } else {
    setTimeout(() => {
      [currCard, prevCard].forEach(({ card }) => (card.status = HIDDEN));
    }, 10);
  }
  return [...state.cards];
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_GAME_BOARD: {
      return {
        ...state,
        cards: generateCards(state, action),
      };
    }

    case SET_ACTIVE_CARD_ID: {
      return {
        ...state,
        activeCardId: action.payload,
        previousCardId: state.activeCardId,
      };
    }
    case RESET_IDS: {
      return {
        ...state,
        previousCardId: "",
        activeCardId: "",
      };
    }
    case SET_CARD_STATUS: {
      return {
        ...state,
        cards: changeCardStatus(state, action),
        currentCardId: action.payload,
      };
    }
    case COMPARE_CARDS: {
      return {
        ...state,
        cards: compareCardValues(state),
      };
    }
    default:
      return state;
  }
};

export default gameReducer;
