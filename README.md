# Charge Please WebApp

This repository is created for the **Charge Please App** landingpage. If personnel working at Schuberg Philis or visitors want charge in front of our building they need to scan the QR codes on the Charge Poles. Colleagues that have the **Charge Please App** installed on their mobile device will be directly redirected and a charge session will start. If they don't have the app install this Instruction website will be shown to be able to charge their car.

## Technical information

The website is created using **ViteJS** and uses ReactJS together with Typescript.
Running the Webapp on your local machine needs some software packages.

- NodeJS
- Yarn

For OSX they can be installed using **HomeBrew**

```bash
brew upgrade
brew install node
brew install yarn
```

## Run development

Running this repository on your localmachine run these commands.

```bash
yarn install
yarn dev
```

## Build production

Build this repository for production run these commands.

```bash
yarn install
yarn build
```

A **dist** folder will be created which will entail all static data that can be pushed towards an S3 Bucket or whatever static file system you want.

## CI/CD

A GitHub action workflow takes care of autmatically building the website for pull requests. When a pull request is merged (or a naughty coder commits directly to main), the workflow in `.github/workflows/build.yml` runs and performs the following steps:
* Install node.js
* `yarn install` (with caching)
* `yarn build` - builds the site into directory `dist` and copies the content of deply into `dist`
* saves the site (content of `dist`) as an artifact
* commits the files in `dist` to the `gh-pages` branch

If there is a commit to the `gh-pages` branch, the contents of this banch is picked up by GitHub pages and depploed to: https://schubergphilis.github.io/sbp_charge_please_web/

## Related repos

* [sbp_charge_please](https://github.com/schubergphilis/sbp_charge_please) - Source code for the app (private)
* [sbp_charge_please_api](https://github.com/schubergphilis/sbp_charge_please_api) - Source code for the backend API (private)