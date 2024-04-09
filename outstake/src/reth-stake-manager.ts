import {
  ClaimMaxGas as ClaimMaxGasEvent,
  ExtendLockTime as ExtendLockTimeEvent,
  GasManagerTransferred as GasManagerTransferredEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SetForceUnstakeFee as SetForceUnstakeFeeEvent,
  SetMaxLockupDays as SetMaxLockupDaysEvent,
  SetMinLockupDays as SetMinLockupDaysEvent,
  SetOutETHVault as SetOutETHVaultEvent,
  StakeRETH as StakeRETHEvent,
  Unstake as UnstakeEvent,
  WithdrawYield as WithdrawYieldEvent
} from "../generated/RETHStakeManager/RETHStakeManager"
import {
  ClaimMaxGas,
  ExtendLockTime,
  GasManagerTransferred,
  OwnershipTransferred,
  SetForceUnstakeFee,
  SetMaxLockupDays,
  SetMinLockupDays,
  SetOutETHVault,
  StakeRETH,
  Unstake,
  WithdrawYield
} from "../generated/schema"

export function handleClaimMaxGas(event: ClaimMaxGasEvent): void {
  let entity = new ClaimMaxGas(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.gasAmount = event.params.gasAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExtendLockTime(event: ExtendLockTimeEvent): void {
  let entity = new ExtendLockTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.positionId = event.params.positionId
  entity.extendDays = event.params.extendDays
  entity.mintedREY = event.params.mintedREY

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGasManagerTransferred(
  event: GasManagerTransferredEvent
): void {
  let entity = new GasManagerTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousGasManager = event.params.previousGasManager
  entity.newGasManager = event.params.newGasManager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetForceUnstakeFee(event: SetForceUnstakeFeeEvent): void {
  let entity = new SetForceUnstakeFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._forceUnstakeFee = event.params._forceUnstakeFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMaxLockupDays(event: SetMaxLockupDaysEvent): void {
  let entity = new SetMaxLockupDays(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._maxLockupDays = event.params._maxLockupDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetMinLockupDays(event: SetMinLockupDaysEvent): void {
  let entity = new SetMinLockupDays(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._minLockupDays = event.params._minLockupDays

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetOutETHVault(event: SetOutETHVaultEvent): void {
  let entity = new SetOutETHVault(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._outETHVault = event.params._outETHVault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeRETH(event: StakeRETHEvent): void {
  let entity = new StakeRETH(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._positionId = event.params._positionId
  entity._account = event.params._account
  entity._amountInRETH = event.params._amountInRETH
  entity._deadline = event.params._deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnstake(event: UnstakeEvent): void {
  let entity = new Unstake(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._positionId = event.params._positionId
  entity._account = event.params._account
  entity._amountInRETH = event.params._amountInRETH

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawYield(event: WithdrawYieldEvent): void {
  let entity = new WithdrawYield(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amountInREY = event.params.amountInREY
  entity.yieldAmount = event.params.yieldAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
