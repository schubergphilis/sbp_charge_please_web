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
