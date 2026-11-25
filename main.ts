import { mkdirSync, writeFileSync } from "node:fs";

// One-star review of Monday, written as though Monday were a restaurant.
// At most 25 words, no explanation attached.
const LINE =
  "One star. The alarm served cold, traffic took an hour, and my 9 a.m. meeting kept me waiting for absolutely nothing. Never returning.";

const words = LINE.trim().split(/\s+/);
if (words.length === 0 || words.length > 25) {
  throw new Error(`entry is ${words.length} words, must be 1-25 words`);
}
if (words.some((w) => w.length === 0)) {
  throw new Error("entry contains an empty word (double space?)");
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line of plain text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${words.length} words, ${LINE.length} chars to /output/entry.txt`);
