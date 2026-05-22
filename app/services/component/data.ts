export interface Service {
  num: string;
  title: string;
  desc: string;
}

export const services: Service[] = [
  {
    num: "01",
    title: "Engineering",
    desc: "Concept studies, FEED, detailed engineering, design review, debottlenecking, brownfield modifications and integrated facilities engineering.",
  },
  {
    num: "02",
    title: "Procurement",
    desc: "Strategic sourcing, OEM coordination, vendor evaluation, surplus equipment sourcing, inspection coordination and import logistics support.",
  },
  {
    num: "03",
    title: "Construction",
    desc: "Brownfield and greenfield construction, pipeline and flowline works, facility upgrades, hook-up, commissioning and site execution support.",
  },
  {
    num: "04",
    title: "Project Management",
    desc: "Planning, scheduling, cost control, interface management, contract administration, risk management, reporting and stakeholder coordination.",
  },
  {
    num: "05",
    title: "Operations Support",
    desc: "Asset integrity, maintenance planning, operational readiness, troubleshooting, facility audits and reliability improvement.",
  },
  {
    num: "06",
    title: "Strategic Advisory",
    desc: "Due diligence, owner's engineering, asset acquisition support, technical evaluation and independent project review.",
  },
];