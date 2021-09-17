import { readFile } from "../src/readFile";

describe("readFile", () => {
	it("can read file", () => {
		const text = readFile(__dirname + "/_fixtures/typescript-error.xml");
		expect(text).toStrictEqual({
			"declaration": {
				"attributes": {
					"version": "1.0",
					"encoding": "utf-8"
				}
			},
			"elements": [{
				"type": "element",
				"name": "checkstyle",
				"attributes": {
					"version": "4.3"
				},
				"elements": [{
					"type": "element",
					"name": "file",
					"attributes": {
						"name": "node_modules/example/example.d.ts"
					},
					"elements": [{
						"type": "element",
						"name": "error",
						"attributes": {
							"line": "8",
							"column": "59",
							"severity": "error",
							"message": "Type '\"day\" | \"era\" | \"hour\" | \"minute\" | \"month\" | \"second\" | \"timeZoneName\" | \"weekday\" | \"year\" | \"fractionalSecondDigits\"' does not satisfy the constraint 'keyof DateTimeFormatOptions'.\n  Type '\"fractionalSecondDigits\"' is not assignable to type 'keyof DateTimeFormatOptions'.",
							"source": "TS2344"
						}
					}]
				}]
			}]
		});
	})
});