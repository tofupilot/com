import {
  IconCircuitVoltmeter,
  IconEaseInOutControlPoints,
  IconLibraryPhoto,
  IconListCheck,
} from "@tabler/icons-react";
import { HeaderBadge } from "../../HeaderBadge";
import Code from "./Code";
import CodeExampleTabs from "./CodeExampleTabs";
import FeaturesList from "./Features";

const code = `import openhtf as htf
from tofupilot.openhtf import TofuPilot

@plug(multimeter=MultimeterPlug)
@htf.measures(
    htf.Measurement('voltage')
    .in_range(3.1, 3.5)
    .with_units('V'),
)
def test_power_supply(test, multimeter):
    voltage = multimeter.measure_voltage()
    test.measurements.voltage = voltage

def main():
    test = htf.Test(
      test_power_supply,
      part_number="PCBA01",
      procedure_name="PCBA Test",
    )
    with TofuPilot(test): # [!code highlight]
        test.execute(lambda: "07301")  # Mock operator S/N input
`;

const code2 = `from tofupilot import TofuPilotClient

def main():
    client = TofuPilotClient()

    voltage = Multimeter().measure_voltage()
    limits = {"limit_low": 3.1, "limit_high": 3.5}
    passed = limits["limit_low"] <= voltage <= limits["limit_high"]

    # [!code word:create_run]
    client.create_run(
        unit_under_test={
            "part_number": "PCBA01",
            "serial_number": "07301"
        },
        procedure_name="PCBA Test",
        steps=[{**limits,
            "step_name": "Test Voltage",
            "value": voltage,
            "units": "V",
            "step_passed": passed}],
        run_passed=passed,
    )
`;

const features = [
  {
    name: "Test Steps",
    description:
      "Log details of individual test steps, including status, name, and duration.",
    icon: IconListCheck,
  },
  {
    name: "Measurements",
    description:
      "Capture numeric measurements for each test step and their validation criteria.",

    icon: IconEaseInOutControlPoints,
  },
  {
    name: "Plugs",
    description:
      "Modular architecture to integrate external resources like metrology equipment.",
    icon: IconCircuitVoltmeter,
  },
  {
    name: "Attachments",
    description:
      "Upload log files, pictures, or other attachments securely from your Python scripts.",
    icon: IconLibraryPhoto,
  },
];

export default function CodeExample() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-28 w-full max-w-6xl px-3"
    >
      <HeaderBadge>fast integration</HeaderBadge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
      >
        Connect your test scripts <br /> with a single line of Python
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
        With TofuPilot’s open-source Python client and REST API, you can quickly
        connect your test scripts—whether you use OpenHTF or your own syntax.
      </p>
      <CodeExampleTabs
        tab1={<Code code={code} lang="python" className="h-[30rem]" />}
        tab2={<Code code={code2} lang="python" className="h-[30rem]" />}
      />

      <FeaturesList features={features} />
    </section>
  );
}
