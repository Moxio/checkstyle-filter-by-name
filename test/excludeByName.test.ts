import { excludeByName } from "../src/excludeByName";


describe("excludeByName", () => {
	it("should filter checkstyle file elements by name that match excludePattern", () => {
		const xmlIn = `<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
<file name="node_modules/example/example.d.ts">
<error line="8" column="59" severity="error" message="Type &apos;&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;&apos; does not satisfy the constraint &apos;keyof DateTimeFormatOptions&apos;.
  Type &apos;&quot;fractionalSecondDigits&quot;&apos; is not assignable to type &apos;keyof DateTimeFormatOptions&apos;." source="TS2344" />
</file>
<file name="node_modules/example/example.d.ts">
<error line="10" column="59" severity="error" message="Type &apos;&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;&apos; does not satisfy the constraint &apos;keyof DateTimeFormatOptions&apos;.
  Type &apos;&quot;fractionalSecondDigits&quot;&apos; is not assignable to type &apos;keyof DateTimeFormatOptions&apos;." source="TS2344" />
</file>
</checkstyle>`;

		const xmlOut = excludeByName(xmlIn, new RegExp("node_modules\\/"));
		expect(xmlOut).toStrictEqual(`<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
</checkstyle>`);
	});

	it("should not filter checkstyle file elements by name that don't match excludePattern", () => {
		const xmlIn = `<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
<file name="node_modules/example/example.d.ts">
<error line="8" column="59" severity="error" message="Type &apos;&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;&apos; does not satisfy the constraint &apos;keyof DateTimeFormatOptions&apos;.
  Type &apos;&quot;fractionalSecondDigits&quot;&apos; is not assignable to type &apos;keyof DateTimeFormatOptions&apos;." source="TS2344" />
</file>
<file name="src/client/example.d.ts">
<error line="10" column="59" severity="error" message="Type &apos;&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;&apos; does not satisfy the constraint &apos;keyof DateTimeFormatOptions&apos;.
  Type &apos;&quot;fractionalSecondDigits&quot;&apos; is not assignable to type &apos;keyof DateTimeFormatOptions&apos;." source="TS2344" />
</file>
</checkstyle>`;

		const xmlOut = excludeByName(xmlIn, new RegExp("node_modules\\/"));
		expect(xmlOut).toStrictEqual(`<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
<file name="src/client/example.d.ts">
<error line="10" column="59" severity="error" message="Type '&quot;day&quot; | &quot;era&quot; | &quot;hour&quot; | &quot;minute&quot; | &quot;month&quot; | &quot;second&quot; | &quot;timeZoneName&quot; | &quot;weekday&quot; | &quot;year&quot; | &quot;fractionalSecondDigits&quot;' does not satisfy the constraint 'keyof DateTimeFormatOptions'.
  Type '&quot;fractionalSecondDigits&quot;' is not assignable to type 'keyof DateTimeFormatOptions'." source="TS2344"/>
</file>
</checkstyle>`);
	});
});