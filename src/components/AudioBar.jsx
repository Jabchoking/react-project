import React, { memo } from 'react';
import { AudioBardiv } from '../assets/css/MusicSub';
import Playlist from './Playlist';


const AudioBar = memo(() => {
    return (
        <AudioBardiv>
            오디오
        </AudioBardiv>
    );
});

export default AudioBar;