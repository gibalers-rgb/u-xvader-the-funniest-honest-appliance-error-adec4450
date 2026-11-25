// The Funniest Honest Appliance Error — make.fun bounty
// u-xvader-the-funniest-honest-appliance-error-adec4450
//
// A robot vacuum cleaner reports, in its own flat voice, the most
// embarrassing fault it can honestly suffer: it has swallowed a
// charging cable, and now the cable is the thing getting charged.
//
// Runs on Node 22, standard library only, no network, deterministic:
// the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "ERROR: I have eaten a charging cable. I am now charging the cable instead of myself. Please do not watch me do this.";

// The sealed gate only accepts UTF-8 text of 1 to 200 characters that is
// not only white space. Fail loudly here instead of shipping an entry
// the gate would refuse and the judge would never see.
const trimmed = LINE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`entry line is ${trimmed.length} characters, must be 1-200`);
}

// Write the line with no trailing newline, so the file holds exactly
// the judged text and nothing extra.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", trimmed, "utf8");
