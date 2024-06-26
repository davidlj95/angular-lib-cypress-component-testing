import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    'baseUrl': 'http://localhost:4200'
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
      options: {
        projectConfig: {
          root: '',
          sourceRoot: 'src',
          buildOptions: {
            tsConfig: "tsconfig.lib.json",
            main: "src/cypress-entrypoint.ts",
            outputPath: '../../dist/sample-lib'
          }
        }
      }
    },
    specPattern: '**/*.cy.ts'
  }

})
