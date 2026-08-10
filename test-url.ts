const getImg = (name: string) => new URL(`../assets/images/${name}`, import.meta.url).href;
console.log(getImg('test.jpg'));
