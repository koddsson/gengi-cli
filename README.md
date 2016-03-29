# gengi-cli
[![Build Status](https://travis-ci.org/koddsson/gengi-cli.svg?branch=master)](https://travis-ci.org/koddsson/gengi-cli) 
[![NPM version](https://img.shields.io/npm/v/gengi-cli.svg?style=flat-square)](https://www.npmjs.com/package/gengi-cli)

Simple CLI for the excellent [gengi.is](http://gengi.is).

## Setup

```
npm install -g gengi-cli
```

## Usage
```
usage: gengi <currency> <value> [-r | --round] [-h | --help]

currency:     Standard three letter currency code (ISO 4217)
value:        Numeric value, defaults to 1
-r | --round: Round calculated number
-h | --help:  Show these instructions

Other available commands
gengi list    Display list of all available currencies
```
### Example
```
$ gengi usd 100
12840.283
```
