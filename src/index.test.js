import { text, Fruits, reverseString, reverseString2 } from "./index"

// Textos

test("Manejo de textos", () => {
	expect(text).toMatch(/Mundo/)
})

// Arrays

test("Manejo de arrays", () => {
	expect(Fruits).toContain("Mango")
})

// Numeros Mayores, Menores o Iguales

test("Manejo de numeros mayores", () => {
	expect(5).toBeGreaterThan(4)
})

test("Manejo de numeros mayores o iguales", () => {
	expect(5).toBeGreaterThanOrEqual(5) //
})
test("Manejo de numeros menores", () => {
	expect(5).toBeLessThan(6) //
})
test("Manejo de numeros menores o iguales", () => {
	expect(5).toBeLessThanOrEqual(5) //
})

// Booleanos

test("Manejo de booleanos positivos", () => {
	expect(true).toBeTruthy()
})

test("Manejo de booleanos negativos", () => {
	expect(false).toBeFalsy()
})

// Callbacks

test("Manejo de callbacks", () => {
	reverseString("Hola", str => {
		expect(str).toBe("aloH")
	})
})

// Promesas

test("Manejo de promesas", () => {
	return reverseString2("Hola").then(string => {
		expect(string).toBe("aloH")
	})
})

test("Manejo de Async/Await", async () => {
	const str = await reverseString2("Hola")
	expect(str).toBe("aloH")
})
