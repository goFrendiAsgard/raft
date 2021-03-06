"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RaftNode_1 = require("./classes/RaftNode");
function runApp(config) {
    const { port, heartBeatTimeOut, electionTimeOut, url, fellows } = config;
    const raftNode = new RaftNode_1.default(port, heartBeatTimeOut, electionTimeOut, url, fellows);
    raftNode.run();
}
if (require.main === module) {
    const args = process.argv.slice(2);
    const port = args[0] ? parseInt(args[0], 10) : parseInt(process.env.PORT, 10) || 3000;
    const heartBeatTimeOut = args[1] ? parseInt(args[1], 10) : 100;
    const electionTimeOut = args[2] && args[2] !== "random" ?
        parseInt(args[2], 10) : Math.round(Math.random() * 150) + 150;
    const url = args[3] ? args[3] : `http://localhost:{$port}`;
    const fellows = args.slice(4);
    runApp({ port, heartBeatTimeOut, electionTimeOut, url, fellows });
}
