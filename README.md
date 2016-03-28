# gengi-cli

Simple CLI for the excellent [gengi.is](http://gengi.is).

### Setup

```
$ npm install -g gengi-cli
/usr/local/bin/gengi -> /usr/local/lib/node_modules/gengi-cli/bin/gengi
/usr/local/lib
└── gengi-cli@1.0.3
```

### Usage
```
$ gengi help
usage: gengi <currency> <value>
currency (required): Standard three letter currency code (ISO 4217)
value (optional): Numeric value, defaults to 1
```
#### Example
```
$ gengi USD 100
12840.283
```
