export let gradient = 'to right,';
for(let i = 0; i < 359; i++) {
    gradient = `${gradient} hsl(${i}deg 100% 50%),`;
}

gradient = `${gradient} hsl(360deg 100% 50%)`;
