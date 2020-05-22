# Demo

1. Component and html deprecation - CartItemComponent no longer uses isSaveForLaterEnabled(). Use the method in both ts and html.

## Demo flow

1. Introduction - why is it useful?
2. Quickly demo the app
3. start from 1.5 spa repo
4. run ng9 upgrade
   4.1 `ng update @angular/core @angular/cli --force`
   4.2 switch to slides
   4.3 schematics stuff (supported migration scripts)
5. Run `ng update @spartacus/schematics --next`
   6.1 Run `ng add @angular/localize`
   6.2 talk about package.json while it's running
6. Show the diff. Talk about changes
7. Fix the breaking changes live
8. Have a working branch (after the upgrade), just in case
9. Switch back to the app UI and show that it's working again
