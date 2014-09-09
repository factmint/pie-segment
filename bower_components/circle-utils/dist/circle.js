var Circle = {
	tenth: Math.PI * 1/5,
	eighth: Math.PI * 1/4,
	quarter: Math.PI * 1/2,
	half: Math.PI,
	whole: 2 * Math.PI
	getPointOnCircle: function(x, y, radius, angle) {
		return {
			x: x + radius * Math.sin(angle),
			y: y + radius * Math.cos(angle)
		};
	}
}
