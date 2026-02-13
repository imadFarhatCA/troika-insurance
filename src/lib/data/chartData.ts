export const segments = [
	{ id: 1, path: 'M 400,330 L 407,130 A 200,200 0 0,1 488,150 Z', grad: 'grad1', iconPos: '436,184', icon: 'M 0,-12 C 4,-9 6,-4 6,2 L 3,6 L -3,6 L -6,2 C -6,-4 -4,-9 0,-12 Z M 0,-4 m -2,0 a 2,2 0 1,0 4,0 a 2,2 0 1,0 -4,0 M -6,2 L -9,6 L -6,6 M 6,2 L 9,6 L 6,6' },
	{ id: 2, path: 'M 400,330 L 500,157 A 200,200 0 0,1 600,330 Z', grad: 'grad2', iconPos: '526,259', icon: 'M 0,0 m -14,0 a 14,14 0 1,0 28,0 a 14,14 0 1,0 -28,0 M 0,0 L 0,-14 M 0,0 L 12,7' },
	{ id: 3, path: 'M 400,330 L 599,347 A 200,200 0 0,1 400,530 Z', grad: 'grad3', iconPos: '498,437', icon: 'M -15,-12 h 30 v 24 a 3,3 0 0,1 -3,3 h -24 a 3,3 0 0,1 -3,-3 z M -8,7 L -3,-3 L 3,4 L 8,-7 M 5,-7 L 8,-7 L 8,-4' },
	{ id: 4, path: 'M 400,330 L 386,530 A 200,200 0 0,1 208,275 Z', grad: 'grad4', iconPos: '281,413', icon: 'M -7,7 C -7,3 -10,-2 -10,-8 A 10,10 0 1,1 10,-8 C 10,-2 7,3 7,7 Z M -6,11 L 6,11 M -5,15 L 5,15' },
	{ id: 5, path: 'M 400,330 L 212,262 A 200,200 0 0,1 393,130 Z', grad: 'grad5', iconPos: '315,213', icon: 'M -12,-15 h 24 v 30 a 3,3 0 0,1 -3,3 h -18 a 3,3 0 0,1 -3,-3 z M -6,-19 h 12 v 7 a 2,2 0 0,1 -2,2 h -8 a 2,2 0 0,1 -2,-2 z M -6,-2 L 6,-2 M -6,5 L 6,5 M -6,12 L 3,12' }
];

export const connectors = [
	{ id: 1, cx: 451, cy: 126, path: 'M 451,126 L 473,89 H 530', color: '#c9a0dc' },
	{ id: 2, cx: 590, cy: 225, path: 'M 590,225 L 636,197 H 700', color: '#92278f' },
	{ id: 3, cx: 545, cy: 488, path: 'M 545,488 L 587,522 H 645', color: '#a7d8e9' },
	{ id: 4, cx: 228, cy: 455, path: 'M 228,455 L 197,480 H 155', color: '#ff0095' },
	{ id: 5, cx: 277, cy: 158, path: 'M 277,158 L 225,113 H 145', color: '#4dadc9' }
];

export const labels = [
	{ id: 1, x: 535, y: 78, anchor: 'start', color: '#c9a0dc', pct: '7%', title: 'SPECIALTY', desc1: 'Tailored', desc2: 'solutions' },
	{ id: 2, x: 705, y: 186, anchor: 'start', color: '#92278f', pct: '18%', title: 'BUSINESS', desc1: 'Enterprise', desc2: 'safeguard' },
	{ id: 3, x: 650, y: 512, anchor: 'start', color: '#a7d8e9', pct: '25%', title: 'HOME', desc1: 'Property', desc2: 'protection' },
	{ id: 4, x: 150, y: 470, anchor: 'end', color: '#ff0095', pct: '30%', title: 'LIFE', desc1: 'Security', desc2: 'for loved ones' },
	{ id: 5, x: 140, y: 102, anchor: 'end', color: '#4dadc9', pct: '20%', title: 'AUTO', desc1: 'Vehicle', desc2: 'coverage' }
];
