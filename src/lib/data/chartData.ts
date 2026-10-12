// Portfolio breakdown shown in the donut chart (clockwise from the top).
// pct drives the segment size; dot/elbow/lineY place each label around the ring;
// attract is how far the label slides toward it on hover.
export const segments = [
	{ id: 1, pct: 38.5, color: '#92278f', numColor: '#92278f', side: 'right', dot: [692, 248], elbow: [738, 190], lineY: 190, attract: [-14, 12], glow: '146, 39, 143' },
	{ id: 2, pct: 24.2, color: '#a8d8ea', numColor: '#539eb8', side: 'right', dot: [570, 513], elbow: [705, 485], lineY: 485, attract: [-14, -14], glow: '127, 196, 220' },
	{ id: 3, pct: 27.2, color: '#c8a2cb', numColor: '#c8a2cb', side: 'left', dot: [296, 303], elbow: [268, 455], lineY: 455, attract: [14, -12], glow: '200, 162, 203' },
	{ id: 4, pct: 10.2, color: '#539eb8', numColor: '#539eb8', side: 'left', dot: [437, 125], elbow: [300, 172], lineY: 172, attract: [14, 14], glow: '83, 158, 184' }
];
