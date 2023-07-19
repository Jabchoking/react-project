import React, { useEffect, useState } from "react";
import axios from "axios";

const LyricsComponent = () => {
  const [lyrics, setLyrics] = useState("");

  useEffect(() => {
    const fetchLyrics = async () => {
      try {
        const apiKey = "191bdb8f42062c1e14e07a759a602169";
        const artist = "Coldplay";
        const track = "Viva la Vida";

        const trackId = await getTrackId(apiKey, artist, track);

        if (trackId) {
          const lyricsBody = await getLyrics(apiKey, trackId);
          setLyrics(lyricsBody);
        } else {
          setLyrics("곡을 찾을 수 없습니다.");
        }
      } catch (error) {
        console.error("가사를 가져오는 중에 오류가 발생했습니다.", error);
      }
    };

    fetchLyrics();
  }, []);

  const getTrackId = async (apiKey, artist, track) => {
    try {
      const url = `https://api.musixmatch.com/ws/1.1/track.search?apikey=${apiKey}&q_artist=${artist}&q_track=${track}`;

      const response = await axios.get(url);
      const data = response.data;

      if (data.message.header.status_code === 200) {
        const trackId = data.message.body.track_list[0].track.track_id;
        return trackId;
      } else {
        console.log("곡을 찾을 수 없습니다.");
        return null;
      }
    } catch (error) {
      console.error("곡을 가져오는 중에 오류가 발생했습니다.", error);
      return null;
    }
  };

  const getLyrics = async (apiKey, trackId) => {
    try {
      const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${apiKey}&track_id=${trackId}`;

      const response = await axios.get(url);
      const data = response.data;

      if (data.message.header.status_code === 200) {
        const lyricsBody = data.message.body.lyrics.lyrics_body;
        return lyricsBody;
      } else {
        console.log("가사를 찾을 수 없습니다.");
        return null;
      }
    } catch (error) {
      console.error("가사를 가져오는 중에 오류가 발생했습니다.", error);
      return null;
    }
  };

  return (
    <div>
      <h1>가사</h1>
      <p>{lyrics}</p>
    </div>
  );
};

export default LyricsComponent;
