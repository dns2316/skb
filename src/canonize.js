export default function canonize(url) {
  //TODO custom domain name - непонятный коммент из видоса.
  url = url
              .replace(/-*/g, '')
              .replace(/www./, '');
  console.log('url in canonize: ', url);
  const re = /^(.{5})(\w*=)?(([a-z]*:)?\/*)?(\w*\.\w*\/*)?(@)?(\w*(\.\w*)?)/;
  console.log('re in canonize: ', re);
  const username = re.exec(url)[7];
  console.log('username in canonize: ' + username);
  return '@' + username;
};
