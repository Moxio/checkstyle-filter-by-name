import * as fs from "fs";
import * as convert from "xml-js";
import { Element } from "xml-js";

export const readFile = (filepath: string): Element => {
	const xml = fs.readFileSync(filepath, "utf8");
	const jsonAsStr = convert.xml2json(xml, {});
	return JSON.parse(jsonAsStr) as Element;
};