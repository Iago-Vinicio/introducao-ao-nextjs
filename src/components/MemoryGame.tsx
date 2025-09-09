"use client";

import { useState, useEffect } from "react";
import Carta from "./Cards";

type CardType = {
  id: number;
  value: string;
  flipped: boolean;
  matched: boolean;
};

export default function MemoryGame() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timerActive, setTimerActive] = useState(false);

  const startGame = () => {
    const values = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    ];

    const deck = [...values, ...values]
      .sort(() => Math.random() - 0.5)
      .map((value, index) => ({
        id: index,
        value,
        flipped: false,
        matched: false,
      }));

    setCards(deck);
    setFlippedCards([]);
    setTime(0);
    setScore(0);
    setFinished(false);
    setTimerActive(false);
  };

  useEffect(() => {
    startGame();
  }, []);


  useEffect(() => {
    if (!timerActive || finished) return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [timerActive, finished]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setFinished(true);
      setTimerActive(false); 
    }
  }, [cards]);

  const handleClick = (id: number) => {
    if (!timerActive) setTimerActive(true);
    if (flippedCards.length === 2) return;

    const newCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (newCards[first].value === newCards[second].value) {
        setCards((prev) =>
          prev.map((card) =>
            card.id === first || card.id === second
              ? { ...card, matched: true }
              : card
          )
        );
        setScore((s) => s + 2);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first || card.id === second
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 800);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="font-bold text-6xl">Desafio de Revisão: React com Next.js
      </h1>
      <p className="bg-gray-300 rounded-2xl px-4 py-2 font-semibold text-lg">
        Tempo: {Math.floor(time / 60)}:
        {(time % 60).toString().padStart(2, "0")}
      </p>

      <p>Pontuação: {score}</p>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {cards.map((card) => (
          <Carta
            key={card.id}
            valor={card.value}
            virado={card.flipped}
            combinado={card.matched}
            aoClicar={() => handleClick(card.id)}
          />
        ))}
      </div>

      {finished && (
        <p className="text-green-700 font-semibold">
          Parabéns! Você ganhou!
        </p>
      )}
 
      <button
        onClick={startGame}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
      >
        Reiniciar
      </button>
    </div>
  );
}
