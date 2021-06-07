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

export class DepositEvent extends ethereum.Event {
  get params(): DepositEvent__Params {
    return new DepositEvent__Params(this);
  }
}

export class DepositEvent__Params {
  _event: DepositEvent;

  constructor(event: DepositEvent) {
    this._event = event;
  }

  get pubkey(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get withdrawal_credentials(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get amount(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get signature(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get index(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }
}

export class Eth2DepositContract extends ethereum.SmartContract {
  static bind(address: Address): Eth2DepositContract {
    return new Eth2DepositContract("Eth2DepositContract", address);
  }

  get_deposit_count(): Bytes {
    let result = super.call(
      "get_deposit_count",
      "get_deposit_count():(bytes)",
      []
    );

    return result[0].toBytes();
  }

  try_get_deposit_count(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "get_deposit_count",
      "get_deposit_count():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  get_deposit_root(): Bytes {
    let result = super.call(
      "get_deposit_root",
      "get_deposit_root():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_get_deposit_root(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "get_deposit_root",
      "get_deposit_root():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get pubkey(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get withdrawal_credentials(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signature(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get deposit_data_root(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}
