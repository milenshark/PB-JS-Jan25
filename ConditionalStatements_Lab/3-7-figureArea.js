function calculateArea(shape, ...params) {
    switch (shape) {
        case 'square':
            return (params[0] * params[0]).toFixed(3);
        case 'rectangle':
            return (params[0] * params[1]).toFixed(3);
        case 'circle':
            return (Math.PI * params[0] * params[0]).toFixed(3);
        case 'triangle':
            return ((params[0] * params[1]) / 2).toFixed(3);
        default:
            return 'Invalid shape';
    }
}

// Примери:
console.log(calculateArea('square', 5));        // 25.000
//console.log(calculateArea('rectangle', 7, 2)); // 14.000
//console.log(calculateArea('circle', 3));       // 28.274
//console.log(calculateArea('triangle', 4, 6));  // 12.000