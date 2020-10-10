const shell = require('shelljs');

// static file in public had been upload to cos/cdn
// shell.cp('-R', 'src/public/', 'dist/');
shell.cp('-R', 'src/views/', 'dist/src');
