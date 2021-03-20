import {
  INITIALIZE_GAME_BOARD,
  GET_CARDS,
  RESET_IDS,
  SET_ACTIVE_CARD_ID,
  SET_CARD_STATUS,
  COMPARE_CARDS,
} from "./types";

export const initializeGameBoard = () => {
  return {
    type: INITIALIZE_GAME_BOARD,
  };
};

export const getCards = () => {
  return {
    type: GET_CARDS,
  };
};

export const setCardStatus = (payload) => {
  return {
    type: SET_CARD_STATUS,
    payload,
  };
};

export const setActiveCardId = (payload) => {
  return {
    type: SET_ACTIVE_CARD_ID,
    payload,
  };
};

export const resetIds = () => {
  return {
    type: RESET_IDS,
  };
};

export const compareCards = (payload) => {
  return {
    type: COMPARE_CARDS,
    payload,
  };
};
