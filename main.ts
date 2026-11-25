// main.ts — writes one original dad joke to <MAKEFUN_OUTPUT_DIR>/entry.txt
// (default /output). The joke is a single line of 1-200 Unicode code points,
// told out loud by a dad at the dinner table: setup, then the turn lands.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I told my son the calendar's days are numbered. He said, 'Dad, that's literally how calendars work.'";

// Guard: the entry must be one line of 1-200 Unicode code points.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 200 || line.includes("\n")) {
  throw new Error(`line is invalid: ${codePoints} code points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Write the line with no trailing newline, so the file is exactly one line.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
