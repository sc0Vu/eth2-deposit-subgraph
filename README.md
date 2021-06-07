# eth2-deposit-subgraph


Provide the historical and analytics data for Eth2 deposit.


Current subgraph locations: https://thegraph.com/explorer/subgraph/sc0vu/eth2

## Installation

Install global commands.

```
# NPM
$ npm install -g truffle ganache-cli

# Yarn
$ yarn global add truffle ganache-cli
```

Install dependencies
```
# NPM
npm install

# Yarn
yarn
```

## Generate Schema

```
yarn codegen
```

## Compile AssemblyScript

```
yarn build
```

## Deploy Subgraph

Prerequisite:
1. Go to [official website](https://thegraph.com/explorer) and register an account.
2. Get your `<access-token>` in your subgraph space.

Should execute auth command first.
```
graph auth [options] <node> <access-token>
```
Deploy to subgraph space.

```
yarn deploy
```
