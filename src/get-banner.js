import runGitCommand from './run-git-command';
import getPackageJSON from './get-package-json';

const COMMITHASH_COMMAND = 'rev-parse HEAD';
const TAG_COMMAND = 'describe --tags';

const COMMENT_LINE_START = '* ';
const NEW_LINE_CHAR = '\n';

const DEFAULT_OPTIONS = {
  showDate: true,
  showTag: true,
  showCommitID: true,
  cwd: process.cwd(),
}

export default class Banner {
  constructor(options = {}) {
    this.options = Object.assign(DEFAULT_OPTIONS, options);
  }

  getHeaderArray(opt) {
    const header = [];
    let gitMsg = '',
      date = new Date();

    let packageJSON = getPackageJSON(opt);
    if (packageJSON.name) {
      gitMsg = gitMsg.concat(`\${${packageJSON.name}} `)
    }

    if (opt.showTag) {
      const tag = runGitCommand(TAG_COMMAND);
      if (tag) {
        gitMsg = gitMsg.concat(`v${tag} - `)
      }
    }

    if (opt.showCommitID) {
      const commitID = runGitCommand(COMMITHASH_COMMAND);
      if (commitID) {
        gitMsg = gitMsg.concat(`\${${commitID}}`)
      }
    }

    header.push(gitMsg);
    header.push('');

    if (opt.copyright) {
      header.push(`Copyright ${date.getFullYear()} by ${opt.copyright}`);
      header.push('');
    }

    if (opt.showDate) {
      header.push(`Date: ${date.toISOString().substring(0, 10)}`);
      header.push('');
    }
    return header;
  }

  getHeader() {
    const header = this.getHeaderArray(this.options)
    const comment = header.map((headerpart) => {
      return headerpart.split(DEFAULT_OPTIONS.newLineChar)
        .map((line) => {
          return `${COMMENT_LINE_START}${line}`
        })
        .join(NEW_LINE_CHAR)
    })
    .join(NEW_LINE_CHAR);

    const commentWithLine = `/*!${NEW_LINE_CHAR}${comment}*/`

    return commentWithLine;
  }
}
