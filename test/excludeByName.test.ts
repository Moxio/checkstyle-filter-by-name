import { excludeByName } from "../src/excludeByName";


describe("excludeByName", () => {
	it("should filter file by name", () => {
		const checkstyle = 	[
			{
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
			},
			{
				"type": "element",
				"name": "file",
				"attributes": {
					"name": "example/example.d.ts"
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
			},
		];

		const result = excludeByName(checkstyle, "node_modules\\/");
		expect(result).toStrictEqual([{
			"type": "element",
			"name": "file",
			"attributes": {
				"name": "example/example.d.ts"
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
		}]);
	})
});