import { DOMParser, XMLSerializer } from "@xmldom/xmldom";

export const excludeByName = (xmlIn: string, excludePattern: RegExp): string => {

	const parser = new DOMParser();
	const doc = parser.parseFromString(xmlIn);
	if (doc.getElementsByTagName("checkstyle").length !== 1) {
		throw new Error("could not find checkstyle element");
	}

	Array.from(doc.getElementsByTagName("file")).map((fileElement) => {
		const name = fileElement.getAttribute("name");
		if (name === null) {
			throw new Error("Expected file[@name]");
		}
		if (fileElement.parentNode === null) {
			throw new Error("Expected file to be connected");
		}
		if (excludePattern.test(name)) {
			// delete newline textnode if present
			const nextSibling = fileElement.nextSibling;
			if (nextSibling !== null && nextSibling.nodeType === 3 && nextSibling.nodeValue === "\n") {
				fileElement.parentNode.removeChild(nextSibling);
			}
			// delete file element
			fileElement.parentNode.removeChild(fileElement);
		}
	});

	return (new XMLSerializer()).serializeToString(doc);
};