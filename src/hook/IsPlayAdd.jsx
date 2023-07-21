export const useIsfindList = (list, user) => {
  const isfindList = (id) => {
    if (list.length === 0) {
      return false;
    }
    const playList = list.find((song) => song.rank === id);
    if (playList !== undefined) {
      return user.playList.some(
        (song) => JSON.stringify(song) === JSON.stringify(playList)
      );
    }
    return false;
  };
  return isfindList;
};