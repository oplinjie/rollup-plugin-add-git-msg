import Banner from './get-banner';

export default function addGitMsg(options = {}) {
  return {
    name: 'addGitMsg',

    banner() {
      const banner = new Banner(options);
      return banner.getHeader();
    }
  };
}
