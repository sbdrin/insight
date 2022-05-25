var shell = require('shelljs'); //同步执行cmd命令
shell.exec(`npm run restart`, { async: true });
