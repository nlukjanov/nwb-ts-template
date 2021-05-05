# NWB Typescript setup

Used nwb to create a react-app template

Then added Typescript support

Additionally added
* Husky
* Lint Staged
* Conventional commits
* ESLint
* Prettier

## Issues
* NWB uses webpack 4 under the hood
That forces to use ```ts-loader``` version 8, not 9 (hardcoded) in the ```package.json```

Keep an eye on NWB updates to update packages when possible
