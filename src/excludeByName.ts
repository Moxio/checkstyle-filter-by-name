import { Element } from "xml-js";

export const excludeByName = (checkstyle: Element[], regExpStr: string): Element[] => {
	return checkstyle.filter((element) => {
		if (element.name === "file") {
			if (element.attributes && element.attributes.name && typeof element.attributes.name === "string") {
				const regExp = RegExp(regExpStr);
				return !regExp.test(element.attributes.name);
			}
		}

		return true;
	});
};