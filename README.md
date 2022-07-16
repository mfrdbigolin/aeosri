<!--
  - Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
  - SPDX-License-Identifier: MIT
  -->

# *ÆOSRI*: My Own Personal Website [![Public license](https://img.shields.io/badge/MIT_(Expat)-yellow?logo=spdx&logoColor=white)](./LICENSE)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

My        personal        website,        currently        hosted        at
[ÆOSRI](https://aeosri.vercel.app)   by  Vercel.    Built  with  React  and
Next.js.

## Usage Notes

Use `yarn dev` to start a local server.

Make sure to include the following enviroment variables in your `.env`:

* `HOOK_SECRET`: a secret to authorize the webhook operation.

* `CMS_URL`: the URL to your CMS (preferably Strapi).

* `DATABASE_URL`: the URL to your Postgres database.

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
