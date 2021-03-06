import { useState, useEffect, useRef } from "react";
import * as Tone from "tone";

import drum from "assets/sounds/Drum.wav";
import hh from "assets/sounds/HH.wav";
import clap from "assets/sounds/Clap.wav";
import snare from "assets/sounds/Snare.wav";

export default function useSounds() {
  const mySampler = useRef(null);

  const [isDrumPlayed, isDrumPlayedChange] = useState(false);
  const [isHhPlayed, isHhPlayedChange] = useState(false);
  const [isClapPlayed, isClapPlayedChange] = useState(false);
  const [isSnarePlayed, isSnarePlayedChange] = useState(false);

  useEffect(() => {
    const sampler = new Tone.Sampler({
      C4: drum,
      "D#4": hh,
      "F#4": clap,
      A4: snare,
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler;
    });
  }, []);

  function handleSampleChange(note, file) {
    let fileUrl = URL.createObjectURL(file);
    let buffer = new Tone.Buffer(fileUrl);
    mySampler.current.add(note, buffer, () => alert("sample is OK"));
  }

  function soundPlay(note) {
    mySampler.current.triggerAttackRelease([note], 4);
  }

  function handleKeyDown({ key }) {
    switch (key) {
      case "a":
        isDrumPlayedChange(true);
        window.setTimeout(() => {
          isDrumPlayedChange(false);
        }, 300);
        soundPlay("C4");
        break;
      case "z":
        isHhPlayedChange(true);
        window.setTimeout(() => {
          isHhPlayedChange(false);
        }, 300);
        soundPlay("D#4");
        break;
      case "e":
        isClapPlayedChange(true);
        window.setTimeout(() => {
          isClapPlayedChange(false);
        }, 300);
        soundPlay("F#4");
        break;
      case "r":
        isSnarePlayedChange(true);
        window.setTimeout(() => {
          isSnarePlayedChange(false);
        }, 300);
        soundPlay("A4");
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const buttonsList = [
    {
      soundPlay: () => soundPlay("C4"),
      isPlayed: isDrumPlayed,
      id: "drum",
      handleSampleChange: (e) => handleSampleChange("C4", e.target.files[0]),
    },
    {
      soundPlay: () => soundPlay("D#4"),
      isPlayed: isHhPlayed,
      id: "hh",
      handleSampleChange: (e) => handleSampleChange("D#4", e.target.files[0]),
    },
    {
      soundPlay: () => soundPlay("F#4"),
      isPlayed: isClapPlayed,
      id: "clap",
      handleSampleChange: (e) => handleSampleChange("F#4", e.target.files[0]),
    },
    {
      soundPlay: () => soundPlay("A4"),
      isPlayed: isSnarePlayed,
      id: "snare",
      handleSampleChange: (e) => handleSampleChange("A4", e.target.files[0]),
    },
  ];

  return { buttonsList };
}
