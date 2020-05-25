# Demo

1. Push a branch with the already upgraded app
2. Fix the refresh bug on the cart page with the product references changing

## Demo flow

1. L - Introduction - why is it useful?
2. L - Quickly demo the app
   L - 2.1 - show the code
3. L - start from 1.5 spa repo
4. L - run ng9 upgrade
   L - 4.1 `ng update @angular/core @angular/cli --force`
   L - 4.2 switch to slides
   L - 4.3 slide - schematics stuff (supported migration scripts)
5. N - Run `ng update @spartacus/schematics --next`
   N - 6.1 Run `ng add @angular/localize`
   N - 6.2 talk about package.json while it's running
6. N - Show the diff. Talk about changes
7. N - Fix the breaking changes live
8. X - Have a working branch (after the upgrade), just in case
9. N - Switch back to the app UI and show that it's working again
10. N - Future plans
