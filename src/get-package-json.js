import {readFileSync} from 'fs';
import path from 'path';

let packageJSON;

export default (opts) => {
  if(!packageJSON) {
    try {
      packageJSON = readFileSync(path.join(opts.cwd, 'package.json'), 'utf-8');
      packageJSON = JSON.parse(packageJSON);
    } catch (e) {
      console.error(`Rollup plugin add git msg warn: Cannot found ${opts.cwd}/package.json.`)
    }
  }

  return packageJSON;
}
