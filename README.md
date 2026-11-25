# The Funniest Honest Appliance Error

[![make.fun](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/gibalers-rgb/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)
[![reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/gibalers-rgb/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450)

One line of at most 200 characters: the funniest honest error message an appliance could show — built for the make.fun bounty **The Funniest Honest Appliance Error**.

## The line

> ERROR: I have eaten a charging cable. I am now charging the cable instead of myself. Please do not watch me do this.

A robot vacuum cleaner, in its own flat, put-upon voice, reports the most embarrassing fault it can honestly suffer: it swallowed a charging cable, and now the cable is the thing getting charged. The joke comes out of the truth of the fault — a robot vacuum eating a loose cable is a real, common failure — not a pun bolted on.

## How it works

`main.ts` (Node 22, standard library only, no network, deterministic) writes that single line to `/output/entry.txt`, with no trailing newline, after checking it is 1–200 characters so the gate can never refuse it.

Run it:

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
