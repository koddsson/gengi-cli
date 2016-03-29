# gengi-cli

Simple CLI for the excellent [gengi.is](http://gengi.is).

### Setup

```
$ npm install -g gengi-cli
/usr/local/bin/gengi -> /usr/local/lib/node_modules/gengi-cli/bin/gengi
/usr/local/lib
└── gengi-cli@1.1.0
```

### Usage
```
usage: gengi <currency> <value> [-r | --round] [-h | --help]

currency:     Standard three letter currency code (ISO 4217)
value:        Numeric value, defaults to 1
-r | --round: Round calculated number
-h | --help:  Show these instructions

Other available commands
gengi list    Display list of all available currencies
```
#### Example
```
$ gengi usd 100
12840.283
```
