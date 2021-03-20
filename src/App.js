import React from "react";
import { createUseStyles } from "react-jss";
import MajhongGame from "./containers/MahjongGame";

const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Mahjong game</p>
      <MajhongGame />
    </div>
  );
};

export default App;
