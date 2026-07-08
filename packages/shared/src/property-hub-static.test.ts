import { readFileSync } from "node:fs";
import vm from "node:vm";

import { describe, expect, test } from "vitest";

const hubHtmlPath = "Property Hub.dc.html";
const hubDataPath = "oracle-data.js";

type HubComponent = {
  state: Record<string, unknown>;
  componentDidMount: () => void;
  renderVals: () => Record<string, unknown>;
};

class FakeDCLogic {
  state: Record<string, unknown> = {};

  setState(
    update:
      | Record<string, unknown>
      | ((state: Record<string, unknown>) => Record<string, unknown>),
  ) {
    const patch = typeof update === "function" ? update(this.state) : update;
    this.state = { ...this.state, ...patch };
  }
}

const loadFixtureComponent = () => {
  const html = readFileSync(hubHtmlPath, "utf8");
  const dataScript = readFileSync(hubDataPath, "utf8");
  const scriptMatch = html.match(
    /<script[^>]*data-dc-script[^>]*>([\s\S]*?)<\/script>/,
  );

  if (!scriptMatch) {
    throw new Error("Failed to locate the static app logic block.");
  }

  const sandbox: {
    globalThis: Record<string, unknown>;
    window: Record<string, unknown>;
    DCLogic: typeof FakeDCLogic;
    Component?: new () => HubComponent;
  } = {
    globalThis: {},
    window: {},
    DCLogic: FakeDCLogic,
  };
  sandbox.globalThis = sandbox;
  sandbox.window = sandbox;

  vm.runInNewContext(dataScript, sandbox);
  vm.runInNewContext(`${scriptMatch[1]}\nthis.Component = Component;`, sandbox);
  if (!sandbox.Component) {
    throw new Error("Fixture component did not load.");
  }
  const componentCtor = sandbox.Component;

  return {
    html,
    component: new componentCtor(),
  };
};

describe("Property Hub static runtime", () => {
  test("seeds a default inquiry and evidence run on first mount", () => {
    const { component } = loadFixtureComponent();

    component.componentDidMount();
    const view = component.renderVals();
    const result = view.res as { active: boolean; count: number; headerLabel: string };
    const evidenceRuns = view.evRuns as Array<unknown>;

    expect(result.active).toBe(true);
    expect(result.count).toBeGreaterThan(0);
    expect(result.headerLabel).toBe("Properties with multiple active permits");
    expect(evidenceRuns).toHaveLength(1);
  });

  test("uses component callbacks instead of raw inline DOM click handlers", () => {
    const { html, component } = loadFixtureComponent();

    component.componentDidMount();
    const view = component.renderVals();

    expect(html).not.toContain('onClick="document.getElementById');
    expect(view).toHaveProperty("toggleInquiryPanel");
    expect(view).toHaveProperty("inquiryPanelOpen");
  });
});
