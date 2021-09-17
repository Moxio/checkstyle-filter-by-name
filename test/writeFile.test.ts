import { writeFile } from "../src/WriteFile";
import fs from "fs";

describe("writeFile", () => {
	it("writes correct output to file", () => {
		const filepath = __dirname + "/_fixtures/output.xml";

			writeFile(filepath, {
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

		const xml = fs.readFileSync(filepath, 'utf8');
		expect(xml).toStrictEqual("<?xml version=\"1.0\" encoding=\"utf-8\"?><checkstyle version=\"4.3\"><file name=\"node_modules/example/example.d.ts\"><error line=\"8\" column=\"59\" severity=\"error\" message=\"Type '&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;' does not satisfy the constraint 'keyof DateTimeFormatOptions'.\n" +
			"  Type '&quot;fractionalSecondDigits&quot;' is not assignable to type 'keyof DateTimeFormatOptions'.\" source=\"TS2344\"/></file></checkstyle>");
		fs.unlinkSync(filepath);
	})
});