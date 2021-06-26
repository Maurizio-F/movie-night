// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Randomizer(min: number, max: number) {
  const randomNumber = Math.floor(Math.random() * (min - max + 1) * 10);
  return randomNumber;
}

export default Randomizer;
