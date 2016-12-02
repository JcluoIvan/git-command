const GitCommand = require('./GitCommand');
const Console = require('./console');

let cmd = new GitCommand({cwd: 'D:/work/GitHub/sg44_w'})

// cmd.checkout('master')
//     .then((stdout, stderr) => {
//         stdout && console.info('out > ', stdout.toString());
//         stderr && console.info('err > ', stderr.toString());
//     });


// cmd.hash('master')
//     .then(out => {
//         console.info(out)
//     })

// let merges = [2, 6, 11, 21, 22, 29];
// merges.forEach(no => {
//     cmd.checkout(`sg${no}`)
//     .merge('master', txt => console.info(txt))
//     .pull()
// })

cmd.checkout('sg6').push();