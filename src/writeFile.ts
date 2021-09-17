import * as fs from "fs";
import * as convert from "xml-js";
import { Element } from "xml-js";

export const writeFile = (filepath: string, json: Element): void => {
	const jsonAsStr = JSON.stringify(json);
	const xmlAsStr = convert.json2xml(jsonAsStr, {});
	fs.writeFileSync(filepath, xmlAsStr);
};