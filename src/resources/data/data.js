import AutomationSolution from "../../resources/homepageImages/automationSolution.svg";
import ElectricalSolution from "../../resources/homepageImages/electricalSolution.svg";
import FabricationSolution from "../../resources/homepageImages/fabricationSolution.svg";
import Tenders from "../../resources/homepageImages/tenders.svg";
import UsedMachineBuySell from "../../resources/homepageImages/usedMachine.svg";
import EqStore from "../../resources/homepageImages/eqStore.svg";
import AMC from "../../resources/homepageImages/amc.svg";
import Career from "../../resources/homepageImages/career.svg";
import ContactUs from "../../resources/homepageImages/contactUs.svg";

export const data = [
  {
    name: "Automation Solutions",
    image: AutomationSolution,
    path: "#",
  },
  {
    name: "Electrical Solutions",
    image: ElectricalSolution,
    path: "electrical-solution",
    panels: [
      {
        name: "PCC Panel",
        path: "pcc",
        desc: "PCC Description to be added!",
        specs: [
          {
            label: "Rated Voltage",
            info: "415V",
          },
          {
            label: "Phase",
            info: "3PH 3/4 WIRE SYSTEM",
          },
          {
            label: "Rated Current",
            info: "UPTO 6300A, 100KA",
          },
          {
            label: "Frequency",
            info: "50HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "IP Rating",
            info: "IP 20/ IP 44/ IP 65",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "Cement Plant, Chemical ind., Textile, Sugar, etc.",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Automation",
            info: "BUS COUPLER & AUTO CHANGE OVER FACILITY",
          },
          {
            label: "Communication",
            info: "MODBUS PROTOCOL, RS485",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "MCC Panel",
        desc: "MCC Description to be added!",
        path: "mcc",
        specs: [
          {
            label: "Rated Voltage",
            info: "240/415V",
          },
          {
            label: "Phase",
            info: "3PH 3/4 WIRE SYSTEM",
          },
          {
            label: "Rated Current",
            info: "UPTO 6300A, 100KA",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "IP Rating",
            info: "IP 20/ IP 44/ IP 65",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "Cement Plant, Chemical ind., Textile, Sugar, etc.",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Automation",
            info: "BUS COUPLER & AUTO CHANGE OVER FACILITY",
          },
          {
            label: "Communication",
            info: "MODBUS PROTOCOL, RS485",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "APFC Panel",
        desc: "APFC Description to be added!",
        path: "apfc",
        specs: [
          {
            label: "Rated Voltage",
            info: "200-900V",
          },
          {
            label: "Phase",
            info: "3PH 3/4 WIRE SYSTEM",
          },
          {
            label: "Rated Current",
            info: "50 to 2500KVAr",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "IP Rating",
            info: "IP 20/ IP 44/ IP 65",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "Cement Plant, Chemical ind., Textile, Sugar, etc.",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Automation",
            info: "BUS COUPLER & AUTO CHANGE OVER FACILITY",
          },
          {
            label: "Communication",
            info: "MODBUS PROTOCOL, RS485",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "VFD Panel",
        desc: "VFD Description to be added!",
        path: "vfd",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "UPTO 200KW",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60076-6",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "MOTOR SPEED CONTROL & AUTOMATION",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "VFD Compatibility",
            info: "COMPATIBLE WITH VARIOUS VFD BRANDS",
          },
          {
            label: "Device Integration",
            info: "MOTORS, SENSORS, PLC",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
        ],
      },
      {
        name: "Soft Starter Panel",
        desc: "Soft Description to be added!",
        path: "soft-starter",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60047-4-4",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "MOTOR SPEED CONTROL & AUTOMATION",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
        ],
      },
      {
        name: "Draw-out Panel",
        desc: "Draw Description to be added!",
        path: "draw-out",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60076-6",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "ELECTRICAL DISTRIBUTION & CONTROL",
          },
          {
            label: "Incoming / Outgoing",
            info: "DRAWOUT DESIGN (INCOMING & OUTGOING)",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
          {
            label: "Remote Monitoring",
            info: "INTUTIVE AND USER-FRIENDLY",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "Type Tested Panel",
        desc: "Type Description to be added!",
        path: "type-tested",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "MOTOR CONTROL & AUTOMATION",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
          {
            label: "Device Integration",
            info: "VFD, SOFT STARTERS, PLC, HMI",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "IMCC Panel",
        desc: "IMCC Description to be added!",
        path: "imcc",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "MOTOR CONTROL & AUTOMATION",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
          {
            label: "Device Integration",
            info: "VFD, SOFT STARTERS, PLC, HMI",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
      {
        name: "Junction Box & PDBC",
        desc: "Junction Description to be added!",
        path: "junction-box-pdbc",
        specs: [
          {
            label: "Rated Voltage",
            info: "Low Voltage (LV)",
          },
          {
            label: "Phase",
            info: "THREE PHASE",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60HZ AC",
          },
          {
            label: "Bus Bar",
            info: "AL/CU WITH CERTIFIED PERCENTAGE OF Frequency IACS CONDUCTIVITY",
          },
          {
            label: "Standard",
            info: "IEC 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "FIXED & SEMI DRAW OUT TYPE WITH SINGLE OR DOUBLE FRONT DESIGN",
          },
          {
            label: "Usage / Application",
            info: "MOTOR CONTROL & AUTOMATION",
          },
          {
            label: "Dimension",
            info: "CUSTOMIZED MM / INCH",
          },
          {
            label: "Communication",
            info: "ETHERNET, PROFIBUS, MOBUS, etc.",
          },
          {
            label: "Device Integration",
            info: "VFD, SOFT STARTERS, PLC, HMI",
          },
          {
            label: null,
            info: null,
          },
        ],
      },
    ],
  },
  {
    name: "Fabrication Solutions",
    image: FabricationSolution,
    path: "#",
  },
  {
    name: "Tenders",
    image: Tenders,
    path: "#",
  },
  {
    name: "Used Machine Buy/Sell",
    image: UsedMachineBuySell,
    path: "#",
  },
  {
    name: "Equipment Store",
    image: EqStore,
    path: "#",
  },
  {
    name: "AMC",
    image: AMC,
    path: "#",
  },
  {
    name: "Career",
    image: Career,
    path: "#",
  },
  {
    name: "Contact Us",
    image: ContactUs,
    path: "#",
  },
];
