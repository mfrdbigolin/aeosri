<!--
  - Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
  - SPDX-License-Identifier: MIT
  -->

# *Aeosri*: Personal Website [![Public license](https://img.shields.io/badge/MIT_(Expat)-yellow?logo=spdx&logoColor=white)](./LICENSE)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

My        personal        website,        currently        hosted        at
[Aeosri](https://aeosri.vercel.app)  by  Vercel.    Built  with  React  and
Next.js.

## Usage Notes

Use `yarn dev` to start a local server.

### HTML

* `_html`: stores  the HTML content of the website,  a frontmatter with the
  required fields (vide infra) is needed at the top of each file.

The preferable format for the HTML files is:

```html
---
<!-- Frontmatter fields. -->
---

<p><!-- Content. --></p>

<!-- Plus ultra... -->
```

### Frontmatter Required Fields

As of now, the required frontmatter fields are:

1. `title`: title to be exhibited upon loading of the page.

2.  `date`:  date to be  shown on the  page, use the  format `<`*`year`*`>`
    `<`*`month`*`>` `<`*`day`*`>`, e.g. `2021 03 06`.

3. `description`: a brief description of the page's contents.

4. `tags`: relevant tags, used for  sorting and organization along with the
   slug path.

## Licensing

This  repository is  currently licensed  with the  [MIT (Expat)](./LICENSE)
(*SPDX-License-Identifier:     [MIT](https://spdx.org/licenses/MIT.html)*);
everyone  with  a copy  of  this  software  is  permitted to  use,  modify,
distribute  and/or  sublicense  it,  provided  that  the  LICENSE  and  the
copyright headers on the top of each source file are preserved in copies of
this package.

There is  no warranty  of any  kind for  this material,  nor the  author is
liable for  any third-party use of  this collection.  For more  details and
clarification, please read the [LICENSE](./LICENSE) in full text.

I will probably,  in future iterations, change to  another more restrictive
license, but further study is required in this matter.
