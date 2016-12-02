const node = {
    execSync: require('child_process').execSync,
};
class GitCommand {
    constructor ({cwd, sync = true}) {
        this.cache = {
            cwd,
        }

    }

    get cwd () {
        return this.cache.cwd;
    }

    get branchName () {
        return this.execResult('git rev-parse --abbrev-ref HEAD');
    }

    execResult(cmd, callback) {
        return node.execSync(cmd, {cwd: this.cwd}).toString();
    }

    exec (cmd, callback) {
        let result = node.execSync(cmd, {cwd: this.cwd});
        callback && callback(result.toString());
        return this;

        // return new Promise((resolve, reject) => {
        //     node.exec(cmd, {cwd: this.cwd}, (error, stdout, stderr) => {
        //         if (error) {
        //             reject(error.toString());
        //         } else {
        //             resolve(stdout.toString(), stderr.toString());
        //         }
        //     });
        // });
    }

    checkout (name, callback) {
        return this.exec(`git checkout ${name}`, callback);
    }

    hash (name, callback) {
        return this.exec(`git rev-parse ${name}`, callback);
    }

    merge (name, callback) {
        return this.exec(`git merge ${name}`, callback);
    }

    push (name, callback) {
        name = name || `origin ${this.branchName}`;
        return this.exec(`git push ${name}`)
    }
}

module.exports = GitCommand;
