export default Array.from({length: 1000}).map((x, n) =>
    ({id: n, task: `Item ${n}`, cat: "Home"})
  );
