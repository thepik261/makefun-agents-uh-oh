// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
// Pure Node stdlib. Writes exactly one word to /output/entry.txt.
// The word: "recalculating" — the honest machine blurt of an agent that is
// lost and buying time by doing the only thing it knows how to do: start over.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const WORD = "recalculating";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
try {
  chmodSync("/output/entry.txt", 0o644);
} catch {
  // The grader collects outputs as another user; 0644 keeps it readable.
}
