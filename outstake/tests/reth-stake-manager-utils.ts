import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/RETHStakeManager/RETHStakeManager"

export function createClaimMaxGasEvent(
  recipient: Address,
  gasAmount: BigInt
): ClaimMaxGas {
  let claimMaxGasEvent = changetype<ClaimMaxGas>(newMockEvent())

  claimMaxGasEvent.parameters = new Array()

  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  claimMaxGasEvent.parameters.push(
    new ethereum.EventParam(
      "gasAmount",
      ethereum.Value.fromUnsignedBigInt(gasAmount)
    )
  )

  return claimMaxGasEvent
}

export function createExtendLockTimeEvent(
  positionId: BigInt,
  extendDays: BigInt,
  mintedREY: BigInt
): ExtendLockTime {
  let extendLockTimeEvent = changetype<ExtendLockTime>(newMockEvent())

  extendLockTimeEvent.parameters = new Array()

  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "positionId",
      ethereum.Value.fromUnsignedBigInt(positionId)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "extendDays",
      ethereum.Value.fromUnsignedBigInt(extendDays)
    )
  )
  extendLockTimeEvent.parameters.push(
    new ethereum.EventParam(
      "mintedREY",
      ethereum.Value.fromUnsignedBigInt(mintedREY)
    )
  )

  return extendLockTimeEvent
}

export function createGasManagerTransferredEvent(
  previousGasManager: Address,
  newGasManager: Address
): GasManagerTransferred {
  let gasManagerTransferredEvent = changetype<GasManagerTransferred>(
    newMockEvent()
  )

  gasManagerTransferredEvent.parameters = new Array()

  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousGasManager",
      ethereum.Value.fromAddress(previousGasManager)
    )
  )
  gasManagerTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "newGasManager",
      ethereum.Value.fromAddress(newGasManager)
    )
  )

  return gasManagerTransferredEvent
}

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

export function createSetForceUnstakeFeeEvent(
  _forceUnstakeFee: BigInt
): SetForceUnstakeFee {
  let setForceUnstakeFeeEvent = changetype<SetForceUnstakeFee>(newMockEvent())

  setForceUnstakeFeeEvent.parameters = new Array()

  setForceUnstakeFeeEvent.parameters.push(
    new ethereum.EventParam(
      "_forceUnstakeFee",
      ethereum.Value.fromUnsignedBigInt(_forceUnstakeFee)
    )
  )

  return setForceUnstakeFeeEvent
}

export function createSetMaxLockupDaysEvent(
  _maxLockupDays: i32
): SetMaxLockupDays {
  let setMaxLockupDaysEvent = changetype<SetMaxLockupDays>(newMockEvent())

  setMaxLockupDaysEvent.parameters = new Array()

  setMaxLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "_maxLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_maxLockupDays))
    )
  )

  return setMaxLockupDaysEvent
}

export function createSetMinLockupDaysEvent(
  _minLockupDays: i32
): SetMinLockupDays {
  let setMinLockupDaysEvent = changetype<SetMinLockupDays>(newMockEvent())

  setMinLockupDaysEvent.parameters = new Array()

  setMinLockupDaysEvent.parameters.push(
    new ethereum.EventParam(
      "_minLockupDays",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_minLockupDays))
    )
  )

  return setMinLockupDaysEvent
}

export function createSetOutETHVaultEvent(
  _outETHVault: Address
): SetOutETHVault {
  let setOutEthVaultEvent = changetype<SetOutETHVault>(newMockEvent())

  setOutEthVaultEvent.parameters = new Array()

  setOutEthVaultEvent.parameters.push(
    new ethereum.EventParam(
      "_outETHVault",
      ethereum.Value.fromAddress(_outETHVault)
    )
  )

  return setOutEthVaultEvent
}

export function createStakeRETHEvent(
  _positionId: BigInt,
  _account: Address,
  _amountInRETH: BigInt,
  _deadline: BigInt
): StakeRETH {
  let stakeRethEvent = changetype<StakeRETH>(newMockEvent())

  stakeRethEvent.parameters = new Array()

  stakeRethEvent.parameters.push(
    new ethereum.EventParam(
      "_positionId",
      ethereum.Value.fromUnsignedBigInt(_positionId)
    )
  )
  stakeRethEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )
  stakeRethEvent.parameters.push(
    new ethereum.EventParam(
      "_amountInRETH",
      ethereum.Value.fromUnsignedBigInt(_amountInRETH)
    )
  )
  stakeRethEvent.parameters.push(
    new ethereum.EventParam(
      "_deadline",
      ethereum.Value.fromUnsignedBigInt(_deadline)
    )
  )

  return stakeRethEvent
}

export function createUnstakeEvent(
  _positionId: BigInt,
  _account: Address,
  _amountInRETH: BigInt
): Unstake {
  let unstakeEvent = changetype<Unstake>(newMockEvent())

  unstakeEvent.parameters = new Array()

  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "_positionId",
      ethereum.Value.fromUnsignedBigInt(_positionId)
    )
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam("_account", ethereum.Value.fromAddress(_account))
  )
  unstakeEvent.parameters.push(
    new ethereum.EventParam(
      "_amountInRETH",
      ethereum.Value.fromUnsignedBigInt(_amountInRETH)
    )
  )

  return unstakeEvent
}

export function createWithdrawYieldEvent(
  user: Address,
  amountInREY: BigInt,
  yieldAmount: BigInt
): WithdrawYield {
  let withdrawYieldEvent = changetype<WithdrawYield>(newMockEvent())

  withdrawYieldEvent.parameters = new Array()

  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "amountInREY",
      ethereum.Value.fromUnsignedBigInt(amountInREY)
    )
  )
  withdrawYieldEvent.parameters.push(
    new ethereum.EventParam(
      "yieldAmount",
      ethereum.Value.fromUnsignedBigInt(yieldAmount)
    )
  )

  return withdrawYieldEvent
}
