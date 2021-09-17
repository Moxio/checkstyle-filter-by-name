#!/usr/bin/env node

import { Command } from "commander";
import { readFile } from "./ReadFile";
import { writeFile } from "./WriteFile";
import { excludeByName } from "./excludeByName";

const program = new Command();

program
	.option("-i, --input <value>", "input file")
	.option("-o, --output <output> ", "output file (optional, will use input file otherwise")
	.option("-e --exclude <name>", "names to exclude, default js regex");


program.parse(process.argv);
const options = program.opts();
const input = readFile(options.input);

if (input.elements?.length !== 1 || input.elements[0].name !== "checkstyle") {
	throw new Error("could not find checkstyle element");
}

//if no elements we don't have to do anything.
if (input.elements[0].elements) {
	input.elements[0].elements = excludeByName(input.elements[0].elements, options.exclude);
	writeFile(options.output ?? options.input, input);
}