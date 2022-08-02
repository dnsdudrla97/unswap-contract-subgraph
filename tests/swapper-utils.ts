import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Received,
  Swap
} from "../generated/Swapper/Swapper"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createReceivedEvent(param0: Address, param1: BigInt): Received {
  let receivedEvent = changetype<Received>(newMockEvent())

  receivedEvent.parameters = new Array()

  receivedEvent.parameters.push(
    new ethereum.EventParam("param0", ethereum.Value.fromAddress(param0))
  )
  receivedEvent.parameters.push(
    new ethereum.EventParam("param1", ethereum.Value.fromUnsignedBigInt(param1))
  )

  return receivedEvent
}

export function createSwapEvent(
  sender: Address,
  recipient: Address,
  srcToken: Address,
  destToken: Address,
  expectedAmount: BigInt,
  receivedAmount: BigInt,
  percent: BigInt
): Swap {
  let swapEvent = changetype<Swap>(newMockEvent())

  swapEvent.parameters = new Array()

  swapEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("srcToken", ethereum.Value.fromAddress(srcToken))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam("destToken", ethereum.Value.fromAddress(destToken))
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "expectedAmount",
      ethereum.Value.fromUnsignedBigInt(expectedAmount)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "receivedAmount",
      ethereum.Value.fromUnsignedBigInt(receivedAmount)
    )
  )
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "percent",
      ethereum.Value.fromUnsignedBigInt(percent)
    )
  )

  return swapEvent
}
