# koa-version-router
> auto add version to router

----

## Features

* use [koa-version](https://github.com/MangroveTech/koa-version)
* use [koa-router](https://github.com/alexmingoia/koa-router)
* auto add version to router

----

## Examples

```js
var app = require('koa')()
var version = require('koa-version-router')

var routes = __dirname + '/routes'
/*
- routes //default version 1.0.0
    - user.js //default route
    - pet.js //default route
    - 2.0.0 //2.0.0 routes
        - user.js
 */

version(app, routes)

```
