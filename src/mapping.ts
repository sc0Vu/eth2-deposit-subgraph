import { BigInt } from '@graphprotocol/graph-ts';
import { DepositEvent } from '../generated/Eth2DepositContract/Eth2DepositContract';
import {
  Depositor,
  Deposit,
  DailyDeposit,
  Aggregation,
} from '../generated/schema';

export function handleDeposit(event: DepositEvent): void {
  let ZERO = BigInt.fromI32(0);
  let ONE = BigInt.fromI32(1);

  // day data
  let timestamp = event.block.timestamp.toI32();
  let dayID = timestamp / 86400;
  let depositDayID = dayID.toString();

  let deposit = Deposit.load(event.transaction.hash.toHex());
  deposit = new Deposit(event.transaction.hash.toHex());
  deposit.dayID = depositDayID;
  deposit.pubkey = event.params.pubkey;
  deposit.withdrawal_credentials = event.params.withdrawal_credentials;
  deposit.amount = BigInt.fromUnsignedBytes(event.params.amount);
  deposit.depositor = event.transaction.from.toHex();
  deposit.timestamp = event.block.timestamp;
  deposit.save();

  let dailyDeposit = DailyDeposit.load(depositDayID);
  if (dailyDeposit == null) {
    dailyDeposit = new DailyDeposit(depositDayID);
    dailyDeposit.dailyAmountDeposited = ZERO;
    dailyDeposit.dailyDepositCount = ZERO;
  }
  dailyDeposit.dailyDepositCount = dailyDeposit.dailyDepositCount!!.plus(ONE);
  dailyDeposit.dailyAmountDeposited = dailyDeposit.dailyAmountDeposited!!.plus(
    deposit.amount
  );
  dailyDeposit.save();

  let aggregation = Aggregation.load('1');
  if (aggregation == null) {
    aggregation = new Aggregation('1');
    aggregation.totalDeposits = ZERO;
    aggregation.totalDepositors = ZERO;
    aggregation.totalAmountDeposited = ZERO;
  }
  aggregation.totalDeposits = aggregation.totalDeposits!!.plus(ONE);
  aggregation.totalAmountDeposited = aggregation.totalAmountDeposited!!.plus(
    deposit.amount
  );

  let depositor = Depositor.load(event.transaction.from.toHex());
  if (depositor == null) {
    depositor = new Depositor(event.transaction.from.toHex());
    depositor.depositCount = ZERO;
    depositor.totalAmountDeposited = ZERO;
    aggregation.totalDepositors = aggregation.totalDepositors!!.plus(ONE);
  }
  depositor.depositCount = depositor.depositCount!!.plus(ONE);
  depositor.totalAmountDeposited = depositor.totalAmountDeposited!!.plus(
    deposit.amount
  );
  depositor.save();
  aggregation.save();
}
