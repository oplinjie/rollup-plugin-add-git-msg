const addGitMsg = require('../dist/rollup-plugin-add-git-msg');
const { rollup } = require('rollup');
const { expect } = require('chai');
const { readFileSync } = require('fs');


describe('rollup-plugin-add-git-msg', function() {
  it('should return new plugin instance', () => {
    const instance = addGitMsg();
    expect(instance.name).to.equal('addGitMsg');
  });

  it('should add banner', function() {
    return rollup({
      entry: 'test/fixtures/source.js',
      plugins: [ addGitMsg() ]
    }).then(bundle => {
      const result = bundle.generate({
        format: 'cjs'
      });
      expect(result.code).to.contain('Date')
      expect(result.code).to.contain('rollup-plugin-add-git-msg')
    })
  });
});
