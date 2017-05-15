# Rollup plugin add git msg

Will add a comment to the start of the transpiled code.

A standard Comment Header contains:
- Current repo name from `package.json` and last git commit / git tag from git command.
- The copyright of the repo.
- Date of compiled time.

Example header:

```javascript
/*!
 * ${rollup-plugin-add-git-msg} v1.0-${126f2767e370ed3593ad8d7b9e3b924d54515b24}
 *
 * Copyright 2017 by oplinjie
 *
 * Date: 2017-05-15
*/
```

### Installation

```bash
$ npm install --save-dev rollup-plugin-add-git-msg
```

### Uasge

Add plugin to your rollup configuration:

```javascript
import addGitMsg from 'rollup-plugin-add-git-msg';

module.exports = {
  plugins: [
    addGitMsg({ 'copyright': 'oplinjie' })
  ]
}
```

### Plugin Options
- `showDate`     Default value: `true`
- `showTag`      Default value: `true`
- `showCommitID` Default value: `true`
- `copyright`    Default value: `null`

### License
MIT License (MIT)
