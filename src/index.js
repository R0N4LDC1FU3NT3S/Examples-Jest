export const text = "Hola Mundo"

export const Fruits = ["Mango", "Banano", "Naranja", "Manzana"]

export const reverseString = (str, callback) => {
	callback(str.split("").reverse().join(""))
}

export const reverseString2 = str =>
	new Promise((resolve, reject) => {
		if (!str) {
			reject(Error("Error reverseString2"))
		}
		resolve(str.split("").reverse().join(""))
	})
