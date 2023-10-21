/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: `ts-jest`,
  testEnvironment: `node`,
  roots: [`.`],
  setupFilesAfterEnv: [`./jest.setup.ts`],
  testRegex: `\\.(test|e2e-test)\\.ts$`,
};
