#!/usr/bin/env node

import { Command } from "commander";
import { excludeByName } from "./excludeByName";
import * as fs from "fs";

const program = new Command();

program
	.option("-i, --input <value>", "input file")
	.option("-o, --output <output> ", "output file (optional, will use input file otherwise")
	.option("-e --exclude <name>", "names to exclude, default js regex");


program.parse(process.argv);
const options = program.opts();

const xmlIn = fs.readFileSync(options.input, "utf8");
const xmlOut = excludeByName(xmlIn, new RegExp(options.exclude));
fs.writeFileSync(options.output ?? options.input, xmlOut);