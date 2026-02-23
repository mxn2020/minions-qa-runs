/**
 * Minions Qa-runs SDK
 *
 * Test execution records, assertion results, and pass/fail tracking across clawspaces
 *
 * @module @minions-qa-runs/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Qa-runs.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
