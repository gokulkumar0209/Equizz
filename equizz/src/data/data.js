const cont = [
	{ question: "Phone", ans: ["Apple", "Samsung", "Moto", "Nokia"] },
	{ question: "TV", ans: ["Samsung", "Sony", "LG", "Acer"] },
	{ question: "Laptop", ans: ["HP", "Dell", "Asus", "Acer"] },
	{ question: "Watch", ans: ["Apple", "Samsung", "Timex", "Titan"] },
];
const expected = {
	Phone: "Samsung",
	TV: "Samsung",
	Laptop: "HP",
	Watch: "Timex",
};
export default { cont, expected };

