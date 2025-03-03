import {
  IconCircuitVoltmeter,
  IconLibraryPhoto,
  IconListCheck,
  IconMathMaxMin,
} from "@tabler/icons-react";
import { HeaderBadge } from "../../HeaderBadge";
import Code from "./Code";
import CodeExampleTabs from "./CodeExampleTabs";
import FeaturesList from "./Features";
import Balancer from "react-wrap-balancer";

const code = `import openhtf as htf
from tofupilot.openhtf import TofuPilot

@plug(multimeter=MultimeterPlug)
@htf.measures(
  htf.Measurement('voltage')
  .in_range(3.1, 3.5)
  .with_units('V'),
)
def test_voltage(test, multimeter):
  voltage = multimeter.get_voltage()
  test.measurements.voltage = voltage

def main():
  test = htf.Test(
    test_voltage,
    part_number="PCBA01",
    procedure_name="PCBA Test",
  )
  with TofuPilot(test): # [!code highlight]
    test.execute(lambda: "07301")  
`;

const code2 = `from tofupilot import TofuPilotClient

def main():
  client = TofuPilotClient()
  voltage = Multimeter().get_voltage()
  limits = {"limit_low": 3.1, "limit_high": 3.5}
  passed = limits["limit_low"] <= voltage <= limits["limit_high"]

  # [!code word:create_run]
  client.create_run(
    unit_under_test={
      "part_number": "PCBA01",
      "serial_number": "07301"},
    procedure_name="PCBA Test",
    steps=[{**limits,
      "name": "test_voltage",
      "measurement_value": voltage,
      "measurement_unit": "V",
      "step_passed": passed,
      "duration": timedelta(seconds=2),
      "started_at": datetime.now()}],
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

    icon: IconMathMaxMin,
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
        <Balancer>
          Connect your test scripts with a single line of Python
        </Balancer>
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
