import CodeExampleTabs from "./CodeExampleTabs";
import { HeaderBadge } from "../../HeaderBadge";
import Code from "./Code";
import {
  IconCircuitVoltmeter,
  IconEaseInOutControlPoints,
  IconLibraryPhoto,
  IconListCheck,
} from "@tabler/icons-react";
import FeaturesList from "./Features";

const code = `import openhtf as htf
from openhtf.plugs import plug
from multimeter_plug import MultimeterPlug
from tofupilot.openhtf import TofuPilot

@plug(multimeter=MultimeterPlug)
@htf.measures(
  htf.Measurement('voltage')
  .in_range(220.0, 240.0)
  .with_units('V'),
)
def test_power_supply(test, multimeter):
  voltage = multimeter.measure_voltage()
  test.measurements.voltage = voltage_phase

def main():
  test = htf.Test(test_power_supply)
  with TofuPilot(test) # [!code highlight]
    test.execute(lambda: "PCB0001")
`;

const code2 = `from tofupilot import TofuPilotClient
from multimeter import Multimeter

def main():
  client = TofuPilotClient()

  # Your custom test logic
  multimeter = Multimeter())
  voltage = multimeter.measure_voltage()
  current = multimeter.measure_current()
  
  # [!code word:create_run]
  client.create_run(
    procedure_id="FVT1",
    unit_under_test={
      "part_number": "PCBA01"
      "serial_number": "07301"
    },
    steps=[
      {"step_name": "Test Voltage", "value": voltage, "units": "V"},
      {"step_name": "Test Current", "value": current, "units": "A"}
    ],
    run_passed=True,
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
      <HeaderBadge>Developer-First</HeaderBadge>
      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-zinc-900 to-zinc-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-6xl md:text-6xl dark:from-zinc-50 dark:to-zinc-300"
      >
        Connect your test scripts <br /> with a single line
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
