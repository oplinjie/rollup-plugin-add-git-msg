import {
  execSync,
  exec
} from 'child_process';

const removeLineBreaks = (str) => {
  return str.replace(/(\r\n|\n|\r)/gm, "")
}

export default (command, callback) => {
  const gitCommand = ['git', command].join(' ');

  if (callback) {
    exec(gitCommand, (err, stdout) => {
      if (err) {
        return callback(err)
      }
      callback(null, removeLineBreaks(stdout.toString()));
    })
  } else {
    try {
      const stdout = execSync(gitCommand);
      return removeLineBreaks(stdout.toString());
    } catch (e) {
      console.error(`Rollup plugin add git msg warn: No git ${command} yet.`)
    }
  }
}
