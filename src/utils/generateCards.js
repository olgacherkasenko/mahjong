import { v4 as uuidv4 } from "uuid";
import { HIDDEN } from "../constants/cardStatuses";
import getPrimeNumbers from "./getPrimeNumbers";
import shuffleArray from "./shuffleArray";

const generateCards = () => {
  const MIN_CARD_VALUE = 1;
  const MAX_CARD_VALUE = 50;

  const primeNumbers = getPrimeNumbers(MIN_CARD_VALUE, MAX_CARD_VALUE);
  const cardValues = shuffleArray([...primeNumbers, ...primeNumbers]);

  return cardValues.map((number) => ({
    id: uuidv4(),
    card: { status: HIDDEN, value: number },
  }));
};

export default generateCards;
