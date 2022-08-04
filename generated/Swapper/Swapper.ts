// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Received extends ethereum.Event {
  get params(): Received__Params {
    return new Received__Params(this);
  }
}

export class Received__Params {
  _event: Received;

  constructor(event: Received) {
    this._event = event;
  }

  get param0(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get param1(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Swap extends ethereum.Event {
  get params(): Swap__Params {
    return new Swap__Params(this);
  }
}

export class Swap__Params {
  _event: Swap;

  constructor(event: Swap) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get srcToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get destToken(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get expectedAmount(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get receivedAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get percent(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class Swapper extends ethereum.SmartContract {
  static bind(address: Address): Swapper {
    return new Swapper("Swapper", address);
  }

  adapters(param0: BigInt): Address {
    let result = super.call("adapters", "adapters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_adapters(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("adapters", "adapters(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class MultiSwapExactInputCall extends ethereum.Call {
  get inputs(): MultiSwapExactInputCall__Inputs {
    return new MultiSwapExactInputCall__Inputs(this);
  }

  get outputs(): MultiSwapExactInputCall__Outputs {
    return new MultiSwapExactInputCall__Outputs(this);
  }
}

export class MultiSwapExactInputCall__Inputs {
  _call: MultiSwapExactInputCall;

  constructor(call: MultiSwapExactInputCall) {
    this._call = call;
  }

  get params(): MultiSwapExactInputCallParamsStruct {
    return changetype<MultiSwapExactInputCallParamsStruct>(
      this._call.inputValues[0].value.toTuple()
    );
  }
}

export class MultiSwapExactInputCall__Outputs {
  _call: MultiSwapExactInputCall;

  constructor(call: MultiSwapExactInputCall) {
    this._call = call;
  }
}

export class MultiSwapExactInputCallParamsStruct extends ethereum.Tuple {
  get to(): Address {
    return this[0].toAddress();
  }

  get srcToken(): Address {
    return this[1].toAddress();
  }

  get destToken(): Address {
    return this[2].toAddress();
  }

  get amountIn(): BigInt {
    return this[3].toBigInt();
  }

  get swaps(): Array<MultiSwapExactInputCallParamsSwapsStruct> {
    return this[4].toTupleArray<MultiSwapExactInputCallParamsSwapsStruct>();
  }
}

export class MultiSwapExactInputCallParamsSwapsStruct extends ethereum.Tuple {
  get adapterId(): BigInt {
    return this[0].toBigInt();
  }

  get routerId(): BigInt {
    return this[1].toBigInt();
  }

  get path(): Array<Address> {
    return this[2].toAddressArray();
  }

  get percent(): BigInt {
    return this[3].toBigInt();
  }

  get amountOut(): BigInt {
    return this[4].toBigInt();
  }

  get deadline(): BigInt {
    return this[5].toBigInt();
  }
}

export class RegisterAdapterCall extends ethereum.Call {
  get inputs(): RegisterAdapterCall__Inputs {
    return new RegisterAdapterCall__Inputs(this);
  }

  get outputs(): RegisterAdapterCall__Outputs {
    return new RegisterAdapterCall__Outputs(this);
  }
}

export class RegisterAdapterCall__Inputs {
  _call: RegisterAdapterCall;

  constructor(call: RegisterAdapterCall) {
    this._call = call;
  }

  get _adapterIdx(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _routerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RegisterAdapterCall__Outputs {
  _call: RegisterAdapterCall;

  constructor(call: RegisterAdapterCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SimpleSwapExactInputSingleCall extends ethereum.Call {
  get inputs(): SimpleSwapExactInputSingleCall__Inputs {
    return new SimpleSwapExactInputSingleCall__Inputs(this);
  }

  get outputs(): SimpleSwapExactInputSingleCall__Outputs {
    return new SimpleSwapExactInputSingleCall__Outputs(this);
  }
}

export class SimpleSwapExactInputSingleCall__Inputs {
  _call: SimpleSwapExactInputSingleCall;

  constructor(call: SimpleSwapExactInputSingleCall) {
    this._call = call;
  }

  get adapterId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get routerId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amountIn(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountOut(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get srcToken(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get destToken(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class SimpleSwapExactInputSingleCall__Outputs {
  _call: SimpleSwapExactInputSingleCall;

  constructor(call: SimpleSwapExactInputSingleCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get from(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
