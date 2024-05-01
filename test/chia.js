const a1 = [106.69877307011481, 10.780053712767886];
const a2 = [106.69883970623479, 10.78006194674564]
const m =3
// Tính độ dài vector
const dx = (a2[0] - a1[0]) / m;
const dy = (a2[1] - a1[1]) / m;

// Tính tọa độ các điểm chia
const points = [];
for (let i = 1; i < m; i++) {
  const x = a1[0] + i * dx;
  const y = a1[1] + i * dy;
  points.push({ x, y });
  console.log(x+", "+y);
}

// console.log(points);