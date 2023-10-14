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
      },
      {
        name: "MCC Panel",
        path: "mcc",
      },
      {
        name: "APFC Panel",
        path: "apfc",
      },
      {
        name: "VFD Panel",
        path: "vfd",
      },
      {
        name: "Soft Starter Panel",
        path: "soft-starter",
      },
      {
        name: "Draw-out Panel",
        path: "draw-out",
      },
      {
        name: "Type Tested Panel",
        path: "type-tested",
      },
      {
        name: "IMCC Panel",
        path: "imcc",
      },
      {
        name: "Junction Box & PDBC",
        path: "junction-box-pdbc",
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
