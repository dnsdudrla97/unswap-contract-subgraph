// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Receive extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Receive entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Receive must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Receive", id.toString(), this);
    }
  }

  static load(id: string): Receive | null {
    return changetype<Receive | null>(store.get("Receive", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Swap extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swap entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Swap must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Swap", id.toString(), this);
    }
  }

  static load(id: string): Swap | null {
    return changetype<Swap | null>(store.get("Swap", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get recipient(): Bytes {
    let value = this.get("recipient");
    return value!.toBytes();
  }

  set recipient(value: Bytes) {
    this.set("recipient", Value.fromBytes(value));
  }

  get srcToken(): Bytes {
    let value = this.get("srcToken");
    return value!.toBytes();
  }

  set srcToken(value: Bytes) {
    this.set("srcToken", Value.fromBytes(value));
  }

  get destToken(): Bytes {
    let value = this.get("destToken");
    return value!.toBytes();
  }

  set destToken(value: Bytes) {
    this.set("destToken", Value.fromBytes(value));
  }

  get expectedAmount(): BigInt {
    let value = this.get("expectedAmount");
    return value!.toBigInt();
  }

  set expectedAmount(value: BigInt) {
    this.set("expectedAmount", Value.fromBigInt(value));
  }

  get receivedAmount(): BigInt {
    let value = this.get("receivedAmount");
    return value!.toBigInt();
  }

  set receivedAmount(value: BigInt) {
    this.set("receivedAmount", Value.fromBigInt(value));
  }

  get percent(): BigInt {
    let value = this.get("percent");
    return value!.toBigInt();
  }

  set percent(value: BigInt) {
    this.set("percent", Value.fromBigInt(value));
  }
}

export class Log extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Log entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Log must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Log", id.toString(), this);
    }
  }

  static load(id: string): Log | null {
    return changetype<Log | null>(store.get("Log", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logType(): string {
    let value = this.get("logType");
    return value!.toString();
  }

  set logType(value: string) {
    this.set("logType", Value.fromString(value));
  }

  get createAt(): BigInt {
    let value = this.get("createAt");
    return value!.toBigInt();
  }

  set createAt(value: BigInt) {
    this.set("createAt", Value.fromBigInt(value));
  }

  get tx(): string {
    let value = this.get("tx");
    return value!.toString();
  }

  set tx(value: string) {
    this.set("tx", Value.fromString(value));
  }
}

export class History extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save History entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type History must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("History", id.toString(), this);
    }
  }

  static load(id: string): History | null {
    return changetype<History | null>(store.get("History", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get logs(): Array<string> {
    let value = this.get("logs");
    return value!.toStringArray();
  }

  set logs(value: Array<string>) {
    this.set("logs", Value.fromStringArray(value));
  }
}
