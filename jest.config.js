import wrapper from "./wrapper";

module.exports = {
  transform: {
    "^.+\\.jsx?$": wrapper,
  },
};
