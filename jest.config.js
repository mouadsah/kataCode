module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/index.ts'],
    collectCoverageFrom: ['src/**/*.ts'],
};
