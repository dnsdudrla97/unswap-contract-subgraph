import { ipfs, json, JSONValue, JSONValueKind, TypedMap } from '@graphprotocol/graph-ts';

import {
    History,
    Log,
} from "../generated/schema"


export const asObject = (val: JSONValue | null): TypedMap<string, JSONValue> | null => {
    if (val != null && val.kind === JSONValueKind.OBJECT) {
        return val.toObject();
    }
    return null;
}

export const evtHistoryPush = (tokenId: string, log: Log): void  => {
    let history = History.load(tokenId)

    if (history === null) {
        return;
    }
    let historyLogs = history.logs
    historyLogs.push(log.id)
    history.logs = historyLogs

    history.save()
}
