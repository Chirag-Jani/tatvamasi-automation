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
        desc: "At Tatwamasi Automation Pvt. Ltd.,we are your trusted partner for all your Power Control Center (PCC) panel needs. Our PCC panels are designed and built to meet the highest standards, ensuring efficient power distribution, motor control, and electrical protection. Here's what you can expect from our PCC panels:",
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
        moreInfo: {
          title: "More Information",
          content:
            "With no limitations on the industries we serve, we are committed to tailoring PCC panels that precisely fit your unique requirements. At TAPL, our mission is to provide you with reliable and efficient power control solutions that enhance your industrial processes.",
        },
        exp: {
          title: "Experience the Power of Precision",
          data: "Contact us today to discuss your specific PCC panel needs. Whether it's a standard solution or a highly customized panel, we have the expertise and flexibility to deliver excellence.",
        },
      },
      {
        name: "MCC & IMCC Panel",
        desc: "At Tatwamasi Automation Pvt. Ltd., we take pride in designing and manufacturing Motor Control Center (MCC) panels that provide a seamless solution for controlling motors and electrical equipment in diverse industrial settings. Our MCC panels are built to meet stringent industry standards, ensuring efficient motor control, protection, and automation. Here's what sets our MCC panels apart:",
        path: "mcc",
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
            info: "Tailored to your needs, we offer a range of current ratings.",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Bus Bar",
            info: "Our panels feature high-quality aluminum (AL) and copper (CU) bus bars with certified conductivity.",
          },
          {
            label: "IP Rating",
            info: "Choose from IP 20, IP 44, or IP 65 to match your environmental and safety requirements.",
          },
          {
            label: "Mounting Type",
            info: "Our MCC panels come in fixed and semi-draw out types, available in single or double front designs.",
          },
          {
            label: "Customized Dimensions",
            info: "We offer flexibility in panel sizes, tailored to your specific requirements.",
          },
          {
            label: "Automation Grade",
            info: "Select advanced features like bus coupler and auto changeover for precise motor control.",
          },
          {
            label: "Communication",
            info: "Our MCC panels support Modbus Protocol and RS-485 communication, enabling seamless integration with your automation systems.",
          },
        ],
        application: {
          description:
            "Our MCC panels are versatile and are a perfect fit for a wide range of industries, including but not limited to:",
          industries: [
            "Manufacturing Facilities",
            "Petrochemical Plants",
            "Water Treatment Plants",
            "Food Processing Units",
            "And more...",
          ],
        },
        moreInfo: {
          title: "More Information",
          content:
            "Our expertise knows no bounds, and we are dedicated to crafting MCC panels that meet the unique requirements of your industry.",
        },
        // exp: {
        //   title: "Experience the Power of Precision",
        //   data: "Contact us today to discuss your specific PCC panel needs. Whether it's a standard solution or a highly customized panel, we have the expertise and flexibility to deliver excellence.",
        // },
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
            info: "3 Phase 3/4 Wire System",
          },
          {
            label: "Power Factor Correction",
            info: "Our APFC panels, including Reactor-Type APFC panels, are tailored to maintain a near-unity power factor, ensuring optimal power efficiency.",
          },
          {
            label: "Reactor Type",
            info: "For specific applications, we offer Reactor-Type APFC panels, which include reactors to enhance power factor correction and mitigate harmonics.",
          },
          {
            label: "Capacity",
            info: "Customized to your specific requirements, supporting various kVAR ratings.",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Control Strategy",
            info: "Advanced control strategies are employed to provide real-time power factor correction.",
          },
          {
            label: "Protection",
            info: "Essential protection features are included to safeguard your electrical system and maintain power quality.",
          },
          {
            label: "Bus Bar",
            info: "AL/CU with certified percentage of frequency IACS conductivity.",
          },
          {
            label: "IP Rating",
            info: "IP 20/ IP 44/ IP 65",
          },
          {
            label: "Mounting Type",
            info: "Fixed & semi draw out type with single or double front design",
          },
          {
            label: "Usage / Application",
            info: "Cement plant, chemical ind., textile, sugar, etc.",
          },
          {
            label: "Dimension",
            info: "Customized mm / inch",
          },
          {
            label: "Automation",
            info: "Bus coupler & auto change over facility",
          },
          {
            label: "Communication",
            info: "Modbus protocol, RS485",
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
        moreInfo: {
          title: "More Information",
          content:
            "With no limitations on the industries we serve, we are committed to tailoring PCC panels that precisely fit your unique requirements. At TAPL, our mission is to provide you with reliable and efficient power control solutions that enhance your industrial processes.",
        },
        exp: {
          title: "Experience the Power of Precision",
          data: "Contact us today to discuss your specific PCC panel needs. Whether it's a standard solution or a highly customized panel, we have the expertise and flexibility to deliver excellence.",
        },
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
        data: {
          overview:
            "Tatvamasi Automation Private Limited undertook a challenging retrofitting project at Mazgaon Dockyard to address inefficiencies caused by an outdated drive system. The existing setup presented challenges with scarce spare parts and outdated communication protocols, necessitating a comprehensive upgrade to enhance overall system efficiency.",
          conslusion:
            "Our automation solution at the GNFC STP plant has not only streamlined operations but also significantly contributed to sustainability by enabling efficient water reuse. By optimizing the treatment process and ensuring precise water distribution, we have enhanced the overall performance of this critical facility, setting new benchmarks for water management in large industrial colonies.",
          highlights: [
            {
              label: "Enhanced Automation",
              value:
                "Our team implemented a comprehensive automation system at the existing 12 MLD STP plant, replacing manual control with state-of-the-art technology.",
            },
            {
              label: "Main PLC Control Panel",
              value:
                "At the heart of the system is a central PLC control panel for the STP area, enabling seamless monitoring and control of critical processes.",
            },
            {
              label: "Remote PLC Control Panels",
              value:
                "To ensure efficient distribution of filtered water, we installed five remote PLC control panels at different locations. These panels, spread across a radius of approximately 5 km, communicate with the main panel, ensuring uniform control and distribution of water.",
            },
            {
              label: "Communication Network",
              value:
                "The entire system is interconnected via an optical fiber network, utilizing a ring topology. This ensures reliable communication between the main and remote control panels.",
            },
            {
              label: "Instrumentation",
              value:
                "We integrated various instruments, including level sensors, flow meters, pressure transmitters, and chlorine gas sensors at strategic points within the STP plant. These instruments facilitate real-time monitoring and automated control of critical parameters.",
            },
            {
              label: "Quality Assurance",
              value:
                "The system continuously monitors water quality, generating daily reports that are not only accessible locally but also directly linked to government portals, ensuring adherence to water quality standards.",
            },
            {
              label: "Waste Management",
              value:
                "Automatic control valves are utilized to manage waste mud efficiently, reducing manual intervention and optimizing the treatment process.",
            },
            {
              label: "SCADA System",
              value:
                "The central SCADA system provides real-time data visualization and control capabilities. It displays critical information, including tank levels, water in/out data, water quality metrics, and distribution statistics.",
            },
            {
              label: "Water Reuse",
              value:
                "The treated water from the STP plant is reused in various areas of the GNFC plant colony, including gardens, sports grounds, farming, and golf areas, promoting sustainability.",
            },
          ],
        },
      },
      {
        name: "Mazgaon Dockyard",
        image: MD,
        path: "md",
        data: {
          overview:
            "Tatvamasi Automation Private Limited undertook a challenging retrofitting project at Mazgaon Dockyard to address inefficiencies caused by an outdated drive system. The existing setup presented challenges with scarce spare parts and outdated communication protocols, necessitating a comprehensive upgrade to enhance overall system efficiency.",
          conslusion:
            "Tatvamasi Automation's retrofitting initiative at Mazgaon Dockyard resulted in a substantial enhancement of system efficiency. The replacement of the outdated drive with the ABB ACS880 model not only addressed spare parts availability concerns but also future-proofed the system for optimal performance. The seamless integration achieved through PLC program modifications and Profibus communication ensures sustained reliability, reduced downtime, and positions the system for long-term operational success. This project stands as a testament to Tatvamasi Automation's expertise in overcoming challenges and delivering cutting-edge solutions in the field of industrial automation.",
          highlights: [
            {
              label: "Drive Replacement",
              value:
                "The team successfully replaced the outdated drive with the latest ABB ACS880 model, ensuring compatibility and significantly improving system performance.",
            },
            {
              label: "PLC Program Modification",
              value:
                "Critical modifications were made to the PLC program, integrating the new ABB ACS880 drive seamlessly. The team adjusted application parameters, data registers, and memory allocations to accommodate the updated drive specifications.",
            },
            {
              label: "Profibus Integration",
              value:
                "The retrofitting initiative included ensuring flawless communication between the ABB ACS880 drive and the Siemens S7-300 PLC via Profibus, overcoming the challenges posed by the outdated communication system.",
            },
          ],
        },
      },
      {
        name: "Nagda City",
        image: NC,
        path: "nc",
        data: {
          overview:
            "We are a dedicated automation solution provider specializing in water treatment systems, with a strong track record of successfully implementing projects that make a significant impact on water distribution and management. My company has played a pivotal role in enhancing the water infrastructure of Nagda City,MP,INDIA ensuring the delivery of clean and reliable water to its residents.",
          conslusion:
            "Our commitment to improving water distribution systems is evident in the successful completion of the Nagda City project. With a focus on automation, data-driven insights, and efficient communication, we have transformed the water infrastructure, contributing to the well-being of the city's residents.",
          highlights: [
            {
              label: "Project Scope",
              value:
                "Our team was entrusted with enhancing the existing 12 million liters per day (MLD) water treatment plant (WTP) in Nagda City, which serves as the backbone of the city's water distribution system.",
            },
            {
              label: "Advanced Flow Monitoring",
              value:
                "Integrated cutting-edge flow meters at both the inlet and outlet pipes of the 12 MLD water treatment plant (WTP) in Nagda City and all seven overhead tanks across different areas. Total of 16 flow meters installed between 100-500mm various sizes.",
            },
            {
              label: "Level Control",
              value:
                "Installed ultrasonic level transmitters and control panels at each of the seven overhead tanks to optimize water levels. The panels enable real-time monitoring and automatic pump control based on tank levels.",
            },
            {
              label: "Water Consumption Tracking",
              value:
                "Implemented a comprehensive system that calculates total water input and output for each tank, providing accurate data on water consumption.",
            },
            {
              label: "Central Control",
              value:
                "The project features a central control panel at the main WTP site, communicating with remote tank control panels over a vast 20+ km area via GSM communication.",
            },
            {
              label: "Efficient Water Distribution",
              value:
                "Installed level sensors at the water purified sump, ensuring precise water allocation from the river source, passing through necessary filtration processes before accurately distributing it to the seven locations.",
            },
            {
              label: "Data Reporting",
              value:
                "The solution provides daily reports to the local Nagar Palika office, offering insights into water intake, outflow, and distribution. This information empowers authorities to make informed decisions regarding water resource management.",
            },
          ],
        },
      },
      {
        name: "Ukai Dam",
        image: UD,
        path: "ud",
        data: {
          overview:
            "Tatvamasi Automation Private Limited has excelled in its prime service, the Annual Maintenance Contract (AMC), providing unparalleled support throughout the year. A standout success story lies in our collaboration with UPL, where the AMC significantly enhanced product quality, production rates, and machine longevity.",
          conslusion:
            "Tatvamasi Automation's comprehensive AMC services have not only ensured the uninterrupted functionality of diverse electrical systems but have also driven notable enhancements in efficiency, safety, and energy conservation. The successful collaboration with UPL and the multitude of renovation and upgrade projects underscore Tatvamasi's commitment to excellence and innovation in the realm of automation and electrical maintenance.",
          highlights: [
            {
              label: "Renovation Initiatives:",
              value:
                "Overhauled power supply cables, control panels, and drives of hoist cranes. Implemented LED fittings for improved visibility at the RT Gallery Sump staircase. Revamped streetlight fittings along the service road from the main canal gate to the generator room at Damanganga Dam.",
            },
            {
              label: "Electrical Installations and Upgrades",
              value:
                "Introduced APFC panels for Unity Power Factor, connected to LT panel boards for pumps 1 to 8. Implemented LED streetlight fittings. Conducted renovations to various electrical installations. Provided VFDs for pump no.4. Delivered cubical panel boards for housing VFDs with internal connections and control wiring at the Chinchai pumping station.",
            },
            {
              label: "Yearly Maintenance and Repair Works",
              value:
                "Ensured ongoing maintenance and repair for security gates and a 125kVA generator. Managed Siemens PLC and SCADA-based radial gate operations, including HMI and WinCC SCADA systems. Supplied operators and engineers for radial gate operation during the monsoon season at Ukai Dam. Introduced APFC panels for power factor correction at the HR of the main canal. Implemented wireless remote control for gantry cranes on the power dam with control panel modifications. Conducted yearly maintenance and repair for gallery lights, street lights, and various floodlights. Undertook special repairs for security gates, floodlights, and current repairs for CCTV systems at Ukai Dam and Ukai Gam.",
            },
          ],
        },
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
