[![Continuous Integration](https://github.com/Moxio/checkstyle-filter-by-name/actions/workflows/ci.yml/badge.svg)](https://github.com/Moxio/checkstyle-filter-by-name/actions/workflows/ci.yml)
[![NPM version](https://img.shields.io/npm/v/checkstyle-filter.svg)](https://www.npmjs.com/package/checkstyle-filter-by-name)

checkstyle-filter-by-name
===================
Library for filtering rules from a checkstyle file

Installation
------------
This library can be installed from the NPM package registry.
Depending on your use case it might be better to install this package globally
(if you want to run these commands from your continuous integration server for example)

Using NPM:
```
npm install checkstyle-filter-by-name
```
or Yarn
```
yarn add checkstyle-filter-by-name
```

Usage
-----
From the command line you can run this command
```
./node_modules/.bin/checkstyle-filter-by-name -i [filename] -o [filename] -e [exclude regex]"
```
There are three command line arguments:

| short arg | long arg | effect  |
|---|---|---|
| -i | --input | the file to read from |
| -o | --output | the file to write to, option, if not included will write to input file |
| -e | --exclude | the javascript regex to determine which checkstyle entries get excluded |

Provided filters
--------------

### -e --exclude
Passing along the -e or --exclude flag will exclude entries within the checkstyle file that match the given regular expression.
A check is performed using standard javascript regexp: `RegExp(..passes argument..).test(..checkstyle entry name..)`.
If this function returns true the file is skipped.

####example
Given a file with these rules:
```xml
<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
	<file name="node_modules/example/example.d.ts">
		<error line="1" column="1" severity="error" message="Example" source="TS2344" />
	</file>
	<file name="example/example.d.ts">
		<error line="1" column="1" severity="error" message="Example" source="TS2344" />
	</file>
</checkstyle>
```

Running this command:
`checkstyle-filter-by-name -i typescript-error.xml -e "node_modules\\/"`

Will result in a file with these rules:
```xml
<?xml version="1.0" encoding="utf-8"?>
<checkstyle version="4.3">
	<file name="example/example.d.ts">
		<error line="1" column="1" severity="error" message="Example" source="TS2344" />
	</file>
</checkstyle>
```

Versioning
----------
This project adheres to [Semantic Versioning](http://semver.org/).

Contributing
------------
Contributions to this project are more than welcome.

License
-------
This project is released under the MIT license.

Treeware
--------
This package is [Treeware](https://treeware.earth/). If you use it in production,
then we'd appreciate it if you [**buy the world a tree**](https://plant.treeware.earth/Moxio/commonmark-ext-fancy-lists)
to thank us for our work. By contributing to the Treeware forest you'll be creating
employment for local families and restoring wildlife habitats.

---
Made with love, coffee and fun by the [Moxio](https://www.moxio.com) team from
Delft, The Netherlands. Interested in joining our awesome team? Check out our
[vacancies](https://werkenbij.moxio.com/) (in Dutch).
