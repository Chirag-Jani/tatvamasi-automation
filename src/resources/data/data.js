import AutomationSolution from "../../resources/homepageImages/automationSolution.svg";
import ElectricalSolution from "../../resources/homepageImages/electricalSolution.svg";
import FabricationSolution from "../../resources/homepageImages/fabricationSolution.svg";
import Tenders from "../../resources/homepageImages/tenders.svg";
import UsedMachineBuySell from "../../resources/homepageImages/usedMachine.svg";
import EqStore from "../../resources/homepageImages/eqStore.svg";
import AMC from "../../resources/homepageImages/amc.svg";
import Career from "../../resources/homepageImages/career.svg";
import ContactUs from "../../resources/homepageImages/contactUs.svg";
import GNFC from "../../resources/tenderLogos/GNFC.svg";
import MD from "../../resources/tenderLogos/MD.svg";
import NC from "../../resources/tenderLogos/NC.svg";
import UD from "../../resources/tenderLogos/UD.svg";

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
            info: "3 Phase 3/4 Wire System",
          },
          {
            label: "Rated Current",
            info: "Up to 6300A with a short-circuit withstand capacity of 100kA",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Bus Bar",
            info: "We use high-quality aluminum (AL) and copper (CU) bus bars with certified conductivity according to IACS standards.",
          },
          {
            label: "IP Rating",
            info: "Choose from IP 20, IP 44, or IP 65, depending on your specific environmental and safety requirements.",
          },
          {
            label: "Mounting Type",
            info: "Our PCC panels are available in both Fixed and Semi-Draw Out types, with the option of Single or Double Front Design.",
          },

          {
            label: "Dimension",
            info: "We offer customized panel sizes in both millimeters and inches to ensure a perfect fit for your application.",
          },
          {
            label: "Automation",
            info: "Enjoy advanced features like Bus Coupler and Auto Change Over Facility for seamless power management.",
          },
          {
            label: "Communication",
            info: "Our PCC panels support Modbus Protocol and RS-485 communication, enabling easy integration with your industrial automation systems.",
          },
        ],
        application: {
          description:
            "Our PCC panels are designed to meet the power control needs of various industries, including",
          industries: [
            "Cement Plants",
            "Chemical & Pharma Industries",
            "Textile Mills",
            "Sugar Factories",
            "Steel industries & heavy engineering Industries",
            "And more...",
          ],
        },
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
    tenders: [
      {
        name: "GNFC",
        image: GNFC,
        path: "gnfc",
        desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
      {
        name: "Mazgaon Dockyard",
        image: MD,
        path: "md",
        desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
      {
        name: "Nagda City",
        image: NC,
        path: "nc",
        desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
      {
        name: "Ukai Dam",
        image: UD,
        path: "ud",
        desc: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
      },
    ],
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
