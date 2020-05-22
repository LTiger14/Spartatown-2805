# Demo

1. removed-public-api-deprecation - loading selector - wait 2s on the cart page for related products to load. Use deprecated versions of ProductActions.LoadProductSuccess()
1. Component and html deprecation - CartItemComponent no longer uses isSaveForLaterEnabled(). Use the method in both ts and html.
1. `anonymousFeature` - config deprecation

## Demo flow

1. Introduction - why is it useful?
2. Quickly demo the app
3. start from 1.5 spa repo
4. run ng9 upgrade
   4.1 `ng update @angular/core @angular/cli --force`
   4.2 switch to slides
   4.3 schematics stuff (supported migration scripts)
5. Run `ng add @angular/localize`
6. Run `ng update @spartacus/schematics --next`
   6.1 talk about package.json while it's running
7. Show the diff. Talk about changes
8. Fix the breaking changes live
9. Have a working branch (after the upgrade), just in case
10. Switch back to the app UI and show that it's working again
