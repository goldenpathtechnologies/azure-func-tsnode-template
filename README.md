# Azure Function App Node.js and TypeScript Template

This template repository provides the basic boilerplate to quickly start developing an Azure Function
App in Node and TypeScript.

## Features

- 100% TypeScript project
- Preconfigured ESLint rules
- Jest testing framework
- Separate TSConfig files for build and development
- GitHub Actions workflow
  - Automated versioning with `semantic-release`
  - Deployment to an existing Azure Function App
- Comprehensive ignore rules
  - .gitignore
  - .eslintignore
  - .funcignore
- Default healthcheck function to test availability of the Function App
- IDE configuration for VSCode and JetBrains

## Development

Ensure that you create a `local.settings.json` file in the root directory of this project with the
following content:

```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true"
  },
  "Host": {
    "CORS": "*",
    "CORSCredentials": false
  }
}
```

Be sure to view the [Azure Functions documentation](https://learn.microsoft.com/en-us/azure/azure-functions/)
for more info to aid in development of your Function App.

## Issues

Please report any issues with this software
[here](https://github.com/goldenpathtechnologies/azure-func-tsnode-template/issues). If you would like to contribute to
this project, feel free to fork it and send a pull request. Note that this project is governed by a
[code of conduct](https://github.com/goldenpathtechnologies/azure-func-tsnode-template/blob/main/CODE_OF_CONDUCT.md).

## License

This project is [MIT](https://github.com/goldenpathtechnologies/azure-func-tsnode-template/blob/main/LICENSE)
licensed.
