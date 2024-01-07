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
  // automation
  {
    name: "Automation Solutions",
    image: AutomationSolution,
    path: "#",
  },
  // electrical - done
  {
    name: "Electrical Solutions",
    image: ElectricalSolution,
    path: "electrical-solution",
    panels: [
      // pcc done
      {
        name: "PCC Panel", // done rendering
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
        experienceThePower: {
          title: "Experience the Power of Precision",
          data: "Contact us today to discuss your specific PCC panel needs. Whether it's a standard solution or a highly customized panel, we have the expertise and flexibility to deliver excellence.",
        },
      },
      // mcc & imcc done
      {
        name: "MCC & IMCC Panel", // done rendering
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
        subPanel: {
          title: "IMCC Panels - Intelligence Meets Motor Control",
          desc: "For those seeking advanced motor control solutions, we offer Intelligent Motor Control Center (IMCC) panels that provide the next level of automation and precision. Our IMCC panels include the features of MCC panels with additional intelligent control capabilities.",
          advFeats: {
            title: "Advanced Features",
            feats: [
              {
                label: "PLC Integration",
                info: "Seamlessly integrate programmable logic controllers for enhanced automation and control.",
              },
              {
                label: "Touchscreen HMI",
                info: "User-friendly human-machine interfaces for real-time monitoring and control.",
              },
              {
                label: "Energy Efficiency",
                info: "Optimize power consumption with intelligent motor control algorithms.",
              },
              {
                label: "Remote Access",
                info: "Monitor and control your motors remotely for maximum efficiency and convenience.",
              },
            ],
          },
        },

        precisionMotorControl: {
          title: "Experience Precision Motor Control",
          data: "Whether you choose our MCC or IMCC panels, you're guaranteed reliability and precision. Contact us today to discuss your specific motor control needs, from standard solutions to highly customized panels tailored to your industry.",
        },
      },
      // apfc done
      {
        name: "APFC Panel", // done rendering
        desc: "At TAPL, we are your trusted source for high-quality Automatic Power Factor Correction (APFC) Control Panels, including Reactor-Type APFC panels. Our comprehensive APFC solutions are designed to enhance power efficiency, reduce energy wastage, and maintain a near-unity power factor for your electrical system.",
        path: "apfc",
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
        ],
        application: {
          description:
            "Our APFC Control Panels, including Reactor-Type panels, are the ideal solution for various industries, including:",
          industries: [
            "Manufacturing",
            "Commercial Buildings",
            "Hospitals",
            "Data Centers",
            "And more...",
          ],
        },
        keyBenefits: [
          {
            label: "Energy Savings",
            info: "APFC panels reduce energy consumption, leading to significant cost savings on electricity bills.",
          },
          {
            label: "Improved Power Quality",
            info: "Maintain a stable and near-unity power factor, enhancing the lifespan and efficiency of your electrical equipment.",
          },
          {
            label: "Reduced Penalties",
            info: "Avoid penalties from utilities for low power factor, ultimately saving you money.",
          },
          {
            label: "Mitigated Harmonics",
            info: "Reactor-Type APFC panels help mitigate harmonics, ensuring power quality and stability.",
          },
        ],
        powerEneSimp: {
          title: "Power Efficiency, Simplified",
          data: "At TAPL, we make it easy to optimize power efficiency and mitigate harmonics. Our APFC Control Panels, including Reactor-Type panels, are designed for seamless integration into your electrical system.",
        },
      },
      // vfd done
      {
        name: "VFD Panel", // done rendering
        desc: "At TAPL, we're your trusted partner for manufacturing high-quality Variable Frequency Drive (VFD) Control Panels, designed to deliver precise motor control for a wide range of industrial applications. Our VFD panels are engineered to provide you with the flexibility and efficiency you need to optimize your motor-driven systems.",
        path: "vfd",
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
            info: "Customized to your requirements, accommodating a wide spectrum of motor sizes and types.",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Control Strategy",
            info: "Our VFD Control Panels use advanced control strategies, providing you with precise motor speed control and energy savings.",
          },
          {
            label: "Protection",
            info: "Comprehensive protection features are integrated to safeguard your motors and equipment against electrical faults and overloads.",
          },
        ],

        application: {
          description:
            "Our VFD Control Panels are the ideal solution for a variety of industries, including:",
          industries: [
            "Manufacturing",
            "HVAC (Heating, Ventilation, and Air Conditioning)",
            "Pumps and Compressors",
            "Conveyor Systems",
            "And more...",
          ],
        },
        keyBenefits: [
          {
            label: "Energy Efficiency",
            info: "VFD panels enable you to control motor speed, reducing energy consumption and operating costs.",
          },
          {
            label: "Soft Start and Stop",
            info: "Soft starting and stopping capabilities reduce mechanical stress on motors and equipment.",
          },
          {
            label: "Improved Motor Life",
            info: "Reduced wear and tear on motors extends their lifespan and reduces maintenance costs.",
          },
          {
            label: "Versatility",
            info: "VFD panels are versatile, compatible with various motor types and applications.",
          },
          {
            label: "Enhanced Process Control",
            info: "VFDs allow for precise speed and torque control, improving process efficiency.",
          },
        ],
        precisionMotorControl: {
          title: "Precision Motor Control, Simplified",
          data: "At TAPL, we believe in simplifying motor control. Our VFD Control Panels are designed to provide easy and precise control for your motors, whether it's for industrial automation or process applications.",
        },
      },
      // soft starter done
      {
        name: "Soft Starter Panel", // done rendering
        desc: "At TAPL, we're at the forefront of manufacturing high-quality Soft Starter Control Panels, designed to provide smooth and efficient motor control for a variety of industrial applications. Our Soft Starter panels are engineered for precision and reliability, ensuring that your equipment operates seamlessly and without unnecessary wear and tear.",
        path: "soft-starter",
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
            info: "Customized to your needs, accommodating various motor sizes and types.",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Control Strategy",
            info: "Our Soft Starter panels employ advanced control strategies for precise motor control, reducing mechanical stress during startup and shutdown.",
          },
          {
            label: "Protection",
            info: "Safety features are integrated to protect your motors and equipment from overloads and electrical faults.",
          },
        ],

        application: {
          description:
            "Our Soft Starter Control Panels are suitable for a wide range of industries, including:",
          industries: [
            "Pumps and Compressors",
            "Conveyor Systems",
            "Fans and Blowers",
            "Manufacturing",
            "And more...",
          ],
        },
        keyBenefits: [
          {
            label: "Smooth Motor Control",
            info: "Soft Starter panels provide a gradual acceleration and deceleration of motors, reducing mechanical and electrical stress.",
          },
          {
            label: "Energy Savings",
            info: "By minimizing voltage and current spikes during startup, Soft Starters help reduce energy consumption and extend motor life.",
          },
          {
            label: "Reduced Maintenance",
            info: "Reduced wear and tear on equipment leads to lower maintenance costs and increased reliability.",
          },
          {
            label: "Improved Power Quality",
            info: "Soft Starters contribute to a more stable power supply, enhancing the longevity of your electrical system.",
          },
        ],

        precisionMotorControl: {
          title: "Precision Motor Control, Simplified",
          data: "At TAPL, we believe in simplifying motor control. Our Soft Starter Control Panels are designed to provide easy and precise control for your motors, whether it's for industrial automation or process applications.",
        },
      },
      // type tested done
      {
        name: "Type Tested Panel", // done rendering
        desc: "At TAPL, we take pride in offering Type-Tested Panels, a hallmark of reliability and safety in electrical distribution systems. Our Type-Tested Panels are meticulously designed, rigorously tested, and certified to meet international standards, ensuring peace of mind and uncompromising performance. Here's what you can expect from our Type-Tested Panels:",
        path: "type-tested",
        whatAre: {
          title: "What Are Type-Tested Panels?",
          data: "Type-Tested Panels are electrical distribution panels that have undergone a series of comprehensive tests to verify their performance, safety, and compliance with industry standards. These panels are designed to ensure the highest level of reliability in diverse applications.",
        },
        // specs: [
        //   {
        //     label: "",
        //     info: "",
        //   },
        // ],
        keyBenefits: [
          {
            label: "Reliability",
            info: "Our Type-Tested Panels are built with precision to deliver consistent and reliable electrical distribution, minimizing downtime and maximizing operational efficiency.",
          },
          {
            label: "Safety",
            info: "Rigorous testing ensures that our panels are equipped to handle various electrical faults and contingencies, keeping your personnel and equipment safe.",
          },
          {
            label: "Compliance",
            info: "Our Type-Tested Panels meet international electrical standards, providing you with confidence in their quality and performance.",
          },
          {
            label: "Customization",
            info: "We offer flexibility in designing and manufacturing Type-Tested Panels to suit your specific needs and applications.",
          },
        ],
        application: {
          description:
            "Our Type-Tested Panels are versatile and can be applied in a wide range of industries, including but not limited to:",
          industries: [
            "Petrochemical Plants",
            "Food Processing Units",
            "Renewable Energy Projects",
            "And more...",
          ],
        },
        types: [
          {
            title: "Type-Tested MCC Panels",
            data: "Motor Control Center panels that have undergone stringent testing to guarantee their performance and safety.",
          },
          {
            title: "Type-Tested PCC Panels",
            data: "Power Control Center panels that are thoroughly tested to meet the highest industry standards.",
          },
          {
            title: "Type-Tested IMCC Panels",
            data: "Intelligent Motor Control Center panels with advanced automation and compliance with type testing standards.",
          },
        ],
        // precisionMotorControl key is fake, but used to not use another new key and add another render as the visual is same
        powerEneSimp: {
          title: "Experience the Reliability",
          data: "Choosing our Type-Tested Panels means choosing peace of mind. With a commitment to quality and adherence to international standards, we offer you a solution that ensures uninterrupted electrical distribution.",
        },
        // precisionMotorControl key is fake, but used to not use another new key and add another render as the visual is same
        precisionMotorControl: {
          title: "Certifications",
          data: "Our Type-Tested Panels come with the necessary certifications and test reports, giving you the assurance of their quality and reliability.",
        },
      },
      // pdp done
      {
        name: "PDP Panels", // done rendering
        desc: "At TAPL, we specialize in designing and manufacturing Power Distribution Panels (PDP) that serve as the backbone of efficient electrical distribution systems. Our PDP panels are engineered for precision and performance, delivering seamless power distribution to various loads within industrial and commercial settings. Here's what you can expect from our PDP panels:",
        path: "pdp-panels",
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
            info: "Tailored to your requirements, we offer a range of current ratings.",
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
            info: "Choose from IP 20, IP 44, or IP 65 to match your environmental and safety needs.",
          },
          {
            label: "Mounting Type",
            info: "We offer fixed and semi-draw out PDP panels, available in single or double front designs.",
          },
          {
            label: "Customized Dimensions",
            info: "Our PDP panels can be customized to fit your specific space requirements.",
          },
          {
            label: "Automation Grade",
            info: "Select advanced features like auto changeover for precise power management.",
          },
          {
            label: "Communication",
            info: "Our PDP panels support Modbus Protocol and RS-485 communication, enabling integration with your automation systems.",
          },
        ],
        application: {
          description:
            "Our PDP panels are versatile and suitable for a wide range of industries, including but not limited to:",
          industries: [
            "Commercial Buildings",
            "Data Centers",
            "Shopping Malls",
            "Hospitals",
            "And more...",
          ],
        },
      },
      // juncrion box remains
      {
        name: "DB Panel / Junction Box", // no data yet
        desc: "Our Distribution Board (DB) panels offer a compact and efficient solution for localized power distribution within your facility. These panels are designed for easy access and streamlined electrical management, ensuring power reaches its intended destination without interruption. Here's what you can expect from our DB panels:",
        path: "junction-box-db-panel",
        specs: [
          {
            label: "Rated Voltage",
            info: "230V",
          },
          {
            label: "Phase",
            info: "1 Phase or 3 Phase, depending on your requirements.",
          },
          {
            label: "Rated Current",
            info: "Customized to match your specific needs.",
          },
          {
            label: "Frequency",
            info: "50Hz AC",
          },
          {
            label: "Bus Bar",
            info: "Our panels feature high-quality aluminum (AL) and copper (CU) bus bars for reliable power distribution.",
          },
          {
            label: "IP Rating",
            info: "We provide IP 20-rated DB panels to safeguard against environmental factors.",
          },
          {
            label: "Customized Dimensions",
            info: "Our DB panels can be tailored to fit your available space.",
          },
        ],
        application: {
          description:
            "Our DB panels are the ideal choice for a variety of applications, including:",
          industries: [
            "Residential Buildings",
            "Office Spaces",
            "Retail Outlets",
            "Educational Institutions",
            "And more...",
          ],
        },
        powerEneSimp: {
          title: "Experience Streamlined Power Management",
          data: "Contact us today to discuss your specific PDP and DB panel needs. Whether you require a comprehensive PDP solution or a compact DB panel, we have the expertise to deliver efficient power distribution tailored to your industry.",
        },
      },
      // // draw out remains
      // {
      //   name: "Draw-out Panel", // no data yet
      //   desc: "Draw Description to be added!",
      //   path: "draw-out",
      //   specs: [
      //     {
      //       label: "Rated Voltage",
      //       info: "415V",
      //     },
      //   ],

      //   application: {
      //     description:
      //       "Our Soft Starter Control Panels are suitable for a wide range of industries, including:",
      //     industries: [
      //       "Pumps and Compressors",
      //       "Conveyor Systems",
      //       "Fans and Blowers",
      //       "Manufacturing",
      //       "And more...",
      //     ],
      //   },
      //   keyBenefits: [
      //     {
      //       label: "Smooth Motor Control",
      //       info: "Soft Starter panels provide a gradual acceleration and deceleration of motors, reducing mechanical and electrical stress.",
      //     },
      //     {
      //       label: "Energy Savings",
      //       info: "By minimizing voltage and current spikes during startup, Soft Starters help reduce energy consumption and extend motor life.",
      //     },
      //     {
      //       label: "Reduced Maintenance",
      //       info: "Reduced wear and tear on equipment leads to lower maintenance costs and increased reliability.",
      //     },
      //     {
      //       label: "Improved Power Quality",
      //       info: "Soft Starters contribute to a more stable power supply, enhancing the longevity of your electrical system.",
      //     },
      //   ],

      //   precisionMotorControl: {
      //     label: "Precision Motor Control, Simplified",
      //     info: "At TAPL, we believe in simplifying motor control. Our Soft Starter Control Panels are designed to provide easy and precise control for your motors, whether it's for industrial automation or process applications.",
      //   },
      // },
    ],
  },
  // automation
  {
    name: "Fabrication Solutions",
    image: FabricationSolution,
    path: "#",
  },
  // psu & govt - done
  {
    name: "PSU & Govt. Sectors",
    image: Tenders,
    path: "psu-and-govt",
    tenders: [
      {
        name: "GNFC",
        image: GNFC,
        path: "gnfc",
        data: {
          overview:
            "We are  a dedicated automation solution provider with a proven track record of transforming water treatment processes into highly efficient, automated systems. Recently, we undertook a groundbreaking project at the GNFC STP plant in Bharuch, India, where manual operations were replaced with cutting-edge automation to optimize water management and reuse within the vast GNFC plant colony.",
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
        youtube: "https://youtu.be/cvbFTFJOGCM?si=vXnIxmOlyw4XjPSx",
        images: [],
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
  // used machine
  {
    name: "Used Machine Buy/Sell",
    image: UsedMachineBuySell,
    path: "#",
  },
  // eq. store
  {
    name: "Equipment Store",
    image: EqStore,
    path: "#",
  },
  // amc
  {
    name: "AMC",
    image: AMC,
    path: "#",
  },
  // career
  {
    name: "Career",
    image: Career,
    path: "#",
  },
  // contact us
  {
    name: "Contact Us",
    image: ContactUs,
    path: "#",
  },
];
