/// <reference types="node" />
import IChange from '../interfaces/IChange';
import express = require('express');
import http = require('http');
export default class RaftNode {
    port: number;
    heartBeatTimeOut: number;
    electionTimeOut: number;
    currentState: number;
    currentUrl: string;
    currentLeader: string;
    term: number;
    lastHeartBeat: number;
    data: {
        [key: string]: string;
    };
    changes: Array<IChange>;
    fellows: Array<string>;
    vote: string;
    constructor(port?: number, heartBeatTimeOut?: number, electionTimeOut?: number, url?: string);
    stringify(data: any): string;
    sendQuery(url: string, query: {
        [key: string]: string;
    }): Promise<any>;
    addFellow(nodeUrl: any): boolean;
    removeFellow(nodeUrl: any): boolean;
    sendElectRequest(): void;
    voteCandidate(candidate: string, term: number): boolean;
    sendHeartBeat(): void;
    setData(key: string, value: string): Promise<boolean>;
    getData(key?: string): {
        [key: string]: string;
    };
    isNotAcceptHeartBeat(): boolean;
    isShouldBeCandidate(): boolean;
    logState(): void;
    registerGetDataController(app: express.Application): void;
    registerSetDataController(app: express.Application): void;
    registerAddFellowController(app: express.Application): void;
    registerRemoveFellowController(app: express.Application): void;
    registerShowFellowController(app: express.Application): void;
    registerElectRequestController(app: express.Application): void;
    registerHeartBeatController(app: express.Application): void;
    registerControllers(app: express.Application): void;
    run(callback?: () => any): http.Server;
    loop(): void;
}
