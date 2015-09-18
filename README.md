# AngularJS sample app

*A sample app for AngularJS 1.x and 2.x by [@franciov](//twitter.com/franciov)*

## Best Practices

https://github.com/franciov/angular2-sample-app/labels/best%20practice

## How to run the app (angular2)

Please note that Angular 2 is based on Typescript, so make sure you install tsd:

```sh
$ npm install -g tsd@^0.6.0
$ tsd install angular2 es6-promise rx rx-lite
```

This will generate the folder `typings` at the root folder of your project.

Make sure you run tsc to create js source files:

```sh
$ npm install -g typescript@^1.5.0
$ tsc --watch -m commonjs -t es5 --emitDecoratorMetadata --experimentalDecorators angular2/app/*.ts
```

Finally, run a local HTTP server:

```sh
$ npm install -g http-server
$ http-server
```

Open your favourite browser and go to http://0.0.0.0:8080/app/

## How to contribute

Please check the list of issues/features and feel free to leave a comment / start working on one of them / open a new one:

https://github.com/franciov/angular2-sample-app/issues

Make sure you:

- work on your own branch
- write specs before writing code
- ask questions ;)
- send a pull request when tests pass
- expect a review :)
