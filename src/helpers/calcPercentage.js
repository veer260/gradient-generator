export const cubic = (P0, P1, P2, P3) => {
  const x0 = P0.x;
  const y0 = P0.y;

  const x1 = P1.x;
  const y1 = P1.y;

  const x2 = P2.x;
  const y2 = P2.y;

  const x3 = P3.x;
  const y3 = P3.y;

//   return (t) =>
//     Math.pow(1 - t, 3) * y0 +
//     3 * Math.pow(1 - t, 2) * t * y1 +
//     3 * (1 - t) * Math.pow(t, 2) * y2 +
//     Math.pow(t, 3) * y3;

  return (t) =>
    Math.pow(1 - t, 3) * x0 +
    3 * Math.pow(1 - t, 2) * t * x1 +
    3 * (1 - t) * Math.pow(t, 2) * x2 +
    Math.pow(t, 3) * x3;

//   const res = [];

    // const valX = x(t);
    // const valY = y(t);


//   return valY;
};