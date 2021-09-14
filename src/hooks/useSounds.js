import { useEffect, useRef } from "react";
import * as Tone from "tone";

import hh from "assets/sounds/HH.wav";
import drum from "assets/sounds/Drum.wav";
import clap from "assets/sounds/Clap.wav";
import snare from "assets/sounds/Snare.wav";

export default function useSounds() {
  const mySampler = useRef(null);

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

  const buttonsList = [
    {
      soundPlay: () => mySampler.current.triggerAttackRelease(["C4"], 4),
    },
    {
      soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4),
    },
    {
      soundPlay: () => mySampler.current.triggerAttackRelease(["F#4"], 4),
    },
    {
      soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 4),
    },
  ];

  return { buttonsList };
}
