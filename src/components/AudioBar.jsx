import React, { memo } from "react";
import { AudioBardiv } from "../assets/css/MusicSub";
import Playlist from "./Playlist";
import { useDispatch, useSelector } from "react-redux";
import { playListToggle } from "../store/modules/UserSlice";

const AudioBar = memo(() => {
  const dispatch = useDispatch();

  const toggle2 = () => {
    dispatch(playListToggle());
  };
  return (
    <>
      <AudioBardiv onClick={toggle2}>
        <Playlist />
      </AudioBardiv>
    </>
  );
});

export default AudioBar;
