module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['**/app/services/**/*.spec.ts'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverage: true,
  collectCoverageFrom: ['src/app/services/**/*.{ts,js}'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^@models/(.*)$': '<rootDir>/src/app/models/$1',
    '^@config/(.*)$': '<rootDir>/src/app/config/$1',
    '^@services/(.*)$': '<rootDir>/src/app/services/$1',
    '^@controllers/(.*)$': '<rootDir>/src/app/controllers/$1',
    '^@routes/(.*)$': '<rootDir>/src/app/routes/$1',
    '^@middlewares/(.*)$': '<rootDir>/src/app/middlewares/$1',
    '^@exceptions/(.*)$': '<rootDir>/src/app/exceptions/$1',
    '^@validators/(.*)$': '<rootDir>/src/app/validators/$1',
    '^@interfaces/(.*)$': '<rootDir>/src/app/interfaces/$1',
  },
};
