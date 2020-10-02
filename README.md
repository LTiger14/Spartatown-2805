# Spartatown

To learn more about Spartacus please visit our
[official Github](https://github.com/SAP/spartacus#what-is-spartacus)

This repo was created for Sparta town demo streamed live on 28th May, 2020.

It demonstrates how to use Spartacus schematics in order to migrate 1.5.x Spartacus application to 2.0.

Steps to take in order to upgrade:

1. `ng update @angular/core @angular/cli --force` - upgrade to Angular 9
2. `ng update @spartacus/schematics --next` - upgrade to Spartacus 2.0
3. `ng add @angular/localize` - don't forget to add the `@angular/localize`
4. Resolve the _TODO_ comments.

To check the upgraded application, check out the `upgrade-2-0` branch.

When switching between the `master` and `upgrade-2-0` branches, don't forget to delete you `node_modules` and to install the packages: `rm -rf node_modules && yarn`.
