/**
 * @module @minions-qa-runs/sdk/schemas
 * Custom MinionType schemas for Minions Qa-runs.
 */

import type { MinionType } from 'minions-sdk';

export const qarunType: MinionType = {
  id: 'qa-runs-qa-run',
  name: 'Qa run',
  slug: 'qa-run',
  description: 'An execution of a test suite against a clawspace or toolbox.',
  icon: '▶️',
  schema: [
    { name: 'suiteId', type: 'string', label: 'suiteId' },
    { name: 'clawspace', type: 'string', label: 'clawspace' },
    { name: 'toolboxId', type: 'string', label: 'toolboxId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'startedAt', type: 'string', label: 'startedAt' },
    { name: 'completedAt', type: 'string', label: 'completedAt' },
    { name: 'totalTests', type: 'number', label: 'totalTests' },
    { name: 'passed', type: 'number', label: 'passed' },
    { name: 'failed', type: 'number', label: 'failed' },
    { name: 'skipped', type: 'number', label: 'skipped' },
    { name: 'durationMs', type: 'number', label: 'durationMs' },
    { name: 'triggeredBy', type: 'select', label: 'triggeredBy' },
  ],
};

export const testresultType: MinionType = {
  id: 'qa-runs-test-result',
  name: 'Test result',
  slug: 'test-result',
  description: 'The result of a single test case within a QA run.',
  icon: '📊',
  schema: [
    { name: 'runId', type: 'string', label: 'runId' },
    { name: 'testCaseId', type: 'string', label: 'testCaseId' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'actualOutcome', type: 'string', label: 'actualOutcome' },
    { name: 'errorMessage', type: 'string', label: 'errorMessage' },
    { name: 'durationMs', type: 'number', label: 'durationMs' },
    { name: 'stdout', type: 'string', label: 'stdout' },
    { name: 'stderr', type: 'string', label: 'stderr' },
  ],
};

export const assertionresultType: MinionType = {
  id: 'qa-runs-assertion-result',
  name: 'Assertion result',
  slug: 'assertion-result',
  description: 'The result of a single assertion within a test result.',
  icon: '🔍',
  schema: [
    { name: 'testResultId', type: 'string', label: 'testResultId' },
    { name: 'assertionRuleId', type: 'string', label: 'assertionRuleId' },
    { name: 'passed', type: 'boolean', label: 'passed' },
    { name: 'actualValue', type: 'string', label: 'actualValue' },
    { name: 'expectedValue', type: 'string', label: 'expectedValue' },
    { name: 'errorDetail', type: 'string', label: 'errorDetail' },
  ],
};

export const customTypes: MinionType[] = [
  qarunType,
  testresultType,
  assertionresultType,
];

