import { BigInt } from "@graphprotocol/graph-ts"
import { evtHistoryPush } from "./utils"
import {
  Received as EvtReceived,
  Swap as EvtSwap 
} from "../generated/Swapper/Swapper"
import { Receive, Swap, Log} from "../generated/schema"

// - event: Received(address,uint256)
// handler: handleReceived
// - event: Swap(indexed address,indexed address,address,address,uint256,uint256,uint256)
// handler: handleSwap

export function handleReceived(event: EvtReceived): void {
  let entity = new Receive(
    `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  )
  entity.address = event.params.param0
  entity.balance = event.params.param1
  entity.save()

  logReceived(entity.id, event)
}

export function logReceived(IDs: string, event: EvtReceived): void {
  let log = new Log(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`)

  log.logType = "RECEIVE"
  log.createAt = event.block.timestamp
  log.tx = event.transaction.hash.toHex()

  log.save()
  evtHistoryPush(IDs, log)
}

export function handleSwap(event: EvtSwap): void {
  let entity = new Swap(
    `${event.transaction.hash.toHex()}-${event.logIndex.toString()}`
  )
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.srcToken = event.params.srcToken
  entity.destToken = event.params.destToken
  entity.expectedAmount = event.params.expectedAmount
  entity.receivedAmount = event.params.receivedAmount
  entity.percent = event.params.percent
  entity.save()

  logSwap(entity.id, event)
}
export function logSwap(IDs: string, event: EvtSwap): void {
  let log = new Log(`${event.transaction.hash.toHex()}-${event.logIndex.toString()}`)

  log.logType = "SWAP"
  log.createAt = event.block.timestamp
  log.tx = event.transaction.hash.toHex()

  log.save()
  evtHistoryPush(IDs, log)
}
