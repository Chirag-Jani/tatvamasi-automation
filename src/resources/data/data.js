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
            info: "415v",
          },
          {
            label: "Phase",
            info: "3ph 3/4 wire system",
          },
          {
            label: "Rated Current",
            info: "upto 6300a, 100ka",
          },
          {
            label: "Frequency",
            info: "50hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "IP Rating",
            info: "ip 20/ ip 44/ ip 65",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "cement plant, chemical ind., textile, sugar, etc.",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Automation",
            info: "bus coupler & auto change over facility",
          },
          {
            label: "Communication",
            info: "modbus protocol, rs485",
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
            info: "240/415v",
          },
          {
            label: "Phase",
            info: "3ph 3/4 wire system",
          },
          {
            label: "Rated Current",
            info: "upto 6300a, 100ka",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "IP Rating",
            info: "ip 20/ ip 44/ ip 65",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "cement plant, chemical ind., textile, sugar, etc.",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Automation",
            info: "bus coupler & auto change over facility",
          },
          {
            label: "Communication",
            info: "modbus protocol, rs485",
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
            info: "200-900v",
          },
          {
            label: "Phase",
            info: "3ph 3/4 wire system",
          },
          {
            label: "Rated Current",
            info: "50 to 2500kvar",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "IP Rating",
            info: "ip 20/ ip 44/ ip 65",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "cement plant, chemical ind., textile, sugar, etc.",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Automation",
            info: "bus coupler & auto change over facility",
          },
          {
            label: "Communication",
            info: "modbus protocol, rs485",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "upto 200kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60076-6",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "motor speed control & automation",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "VFD Compatibility",
            info: "compatible with various vfd brands",
          },
          {
            label: "Device Integration",
            info: "motors, sensors, plc",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60047-4-4",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "motor speed control & automation",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60076-6",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "electrical distribution & control",
          },
          {
            label: "Incoming / Outgoing",
            info: "drawout design (incoming & outgoing)",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
          },
          {
            label: "Remote Monitoring",
            info: "intuitive and user-friendly",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "motor control & automation",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
          },
          {
            label: "Device Integration",
            info: "vfd, soft starters, plc, hmi",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "motor control & automation",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
          },
          {
            label: "Device Integration",
            info: "vfd, soft starters, plc, hmi",
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
            info: "low voltage (lv)",
          },
          {
            label: "Phase",
            info: "three phase",
          },
          {
            label: "Motor Power Range",
            info: "0.37kw to 900kw",
          },
          {
            label: "Frequency",
            info: "50/60hz ac",
          },
          {
            label: "Bus Bar",
            info: "al/cu with certified percentage of frequency iacs conductivity",
          },
          {
            label: "Standard",
            info: "iec 60947-4-4",
          },
          {
            label: "Mountain Type",
            info: "fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "motor control & automation",
          },
          {
            label: "Dimension",
            info: "customized mm / inch",
          },
          {
            label: "Communication",
            info: "ethernet, profibus, mobus, etc.",
          },
          {
            label: "Device Integration",
            info: "vfd, soft starters, plc, hmi",
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
    path: "tenders",
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
