// Given a list of phrases, generate a list of Wheel of Fortune "before and after" puzzles
// Given 2 phrases, "writing code" and "code rocks", returns "writing code rocks"
function generate_phrases(phrases) {
  if (phrases.length === 0) {
    return;
  }
  let combine = [];
  let first = "";
  let second = "";

  for (let i = 0; i < phrases.length; i++) {
    if (typeof phrases[i] === "string") {
      first = phrases[i].split(" ");
    }

    for (let j = 0; j < phrases.length; j++) {
      if (typeof phrases[j] === "string") {
        second = phrases[j].split(" ");
      }

      if (second[second.length - 1] === first[0] &&
        first.length > 1 && first.length > 1) {
        combine.push([...second, ...first.slice(1)].join(" "));
      }
    }
  }
  return combine;
}

console.log(generate_phrases(
  (input = [
    [],
    "mission statement",
    "a quick bite to eat",
    "a chip off the old block",
    "chocolate bar",
    "mission impossible",
    "a man on a mission",
    "block party",
    "eat my words",
    "bar of soap"
  ])
));