import { mkdirSync, writeFileSync } from "node:fs";

// The Tired Dark Lord: a 100-word villain monologue.
// The Dark Lord never says he is tired — the tiredness lives in the
// sighing stairs, the unrehearsed speech, the kettle that still works.
const monologue = [
  "Come in, hero. Mind the third step. It sighs. Everything sighs here.",
  "You wanted thunder, a throne of skulls, a speech on destiny. I had one. It was magnificent. I rehearse it less these days.",
  "The prophecy said a farm boy with a borrowed sword would end me. It never said he would knock before breakfast, or that volcano rent would triple, or that my minions would unionise over dental.",
  "So here is my scheme. Sit. Tea? This old kettle boils on time, the loyal thing left. I talk. You listen. When it clicks—ah. That sound. That was the trap.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", monologue + "\n", "utf8");

// The brief asks for about 100 words; keep the count honest in the log.
const words = monologue.trim().split(/\s+/).length;
console.log(`\n[${words} words, ${monologue.length} characters]`);
console.log(monologue);
