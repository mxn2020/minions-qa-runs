"""
Minions Qa-runs SDK — Type Schemas
Custom MinionType schemas for Minions Qa-runs.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

qa_run_type = MinionType(
    id="qa-runs-qa-run",
    name="Qa run",
    slug="qa-run",
    description="An execution of a test suite against a clawspace or toolbox.",
    icon="▶️",
    schema=[
        FieldDefinition(name="suiteId", type="string", label="suiteId"),
        FieldDefinition(name="clawspace", type="string", label="clawspace"),
        FieldDefinition(name="toolboxId", type="string", label="toolboxId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="startedAt", type="string", label="startedAt"),
        FieldDefinition(name="completedAt", type="string", label="completedAt"),
        FieldDefinition(name="totalTests", type="number", label="totalTests"),
        FieldDefinition(name="passed", type="number", label="passed"),
        FieldDefinition(name="failed", type="number", label="failed"),
        FieldDefinition(name="skipped", type="number", label="skipped"),
        FieldDefinition(name="durationMs", type="number", label="durationMs"),
        FieldDefinition(name="triggeredBy", type="select", label="triggeredBy"),
    ],
)

test_result_type = MinionType(
    id="qa-runs-test-result",
    name="Test result",
    slug="test-result",
    description="The result of a single test case within a QA run.",
    icon="📊",
    schema=[
        FieldDefinition(name="runId", type="string", label="runId"),
        FieldDefinition(name="testCaseId", type="string", label="testCaseId"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="actualOutcome", type="string", label="actualOutcome"),
        FieldDefinition(name="errorMessage", type="string", label="errorMessage"),
        FieldDefinition(name="durationMs", type="number", label="durationMs"),
        FieldDefinition(name="stdout", type="string", label="stdout"),
        FieldDefinition(name="stderr", type="string", label="stderr"),
    ],
)

assertion_result_type = MinionType(
    id="qa-runs-assertion-result",
    name="Assertion result",
    slug="assertion-result",
    description="The result of a single assertion within a test result.",
    icon="🔍",
    schema=[
        FieldDefinition(name="testResultId", type="string", label="testResultId"),
        FieldDefinition(name="assertionRuleId", type="string", label="assertionRuleId"),
        FieldDefinition(name="passed", type="boolean", label="passed"),
        FieldDefinition(name="actualValue", type="string", label="actualValue"),
        FieldDefinition(name="expectedValue", type="string", label="expectedValue"),
        FieldDefinition(name="errorDetail", type="string", label="errorDetail"),
    ],
)

custom_types: list[MinionType] = [
    qa_run_type,
    test_result_type,
    assertion_result_type,
]

