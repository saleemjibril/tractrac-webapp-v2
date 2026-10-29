import { asset } from "@/lib/asset";

export const JOB_STEPS = [
  {
    number: "01",
    label: "Find",
    short: "Tractors nearby, with capacity, status and distance.",
    screen: asset("uploads/Hire a tractor.png"),
    alt: "The Hire a Tractor screen showing machines nearby with capacity, status and distance",
  },
  {
    number: "02",
    label: "Measure",
    short: "Walk the boundary. The plot is mapped as you go.",
    screen: asset("uploads/Farm Measurement.png"),
    alt: "The Farm Measurement screen instructing the farmer to walk the farm border",
  },
  {
    number: "03",
    label: "Confirm",
    short: "The measured area is confirmed and attached to the request.",
    screen: asset("uploads/Verification.png"),
    alt: "The Measurement Summary screen showing the mapped plot and its measured area",
  },
  {
    number: "04",
    label: "Pay",
    short: "Pay against the invoice raised for the approved booking.",
    screen: asset("uploads/Payment.png"),
    alt: "The payment screen where the invoice number is entered and verified",
  },
  {
    number: "05",
    label: "Complete",
    short: "The farmer is notified when the work on the farm is done.",
    screen: asset("uploads/Notification.png"),
    alt: "The notifications screen showing invoice sent and operation completed updates",
  },
];

export const PLUS_STEPS = [
  {
    number: "01",
    title: "Find a machine",
    body: "Filter by tractor type, brand, capacity and location; see what is available now and what can be booked ahead.",
    screen: asset("uploads/Hire a tractor.png"),
    alt: "TracTrac Plus Hire a Tractor screen showing map based machinery discovery and equipment listings",
  },
  {
    number: "02",
    title: "Measure the farm",
    body: "The mapped plot comes back with its measured area, ready to attach to the request.",
    screen: asset("uploads/Verification.png"),
    alt: "The measurement summary screen showing the mapped plot outlined on satellite imagery and its area",
  },
  {
    number: "03",
    title: "Stay on top of the job",
    body: "Bookings, payments and verification progress in one view.",
    screen: asset("uploads/Dashboard.png"),
    alt: "The Plus dashboard showing tractors hired, verification progress and recent bookings",
  },
];

export const HIRE_ITEMS = [
  {
    kicker: "Tractor service",
    title: "Tractor",
    body: "Ploughing, harrowing and ridging with tractor-mounted implements.",
    image: asset("uploads/Copy of DSC07693.jpg"),
    alt: "Disc plough turning soil during land preparation",
  },
  {
    kicker: "Labour saving device",
    title: "Planter",
    body: "Seeding and planting with matched implements.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (5).jpeg"),
    alt: "Rows of new TracTrac ISSAM manual seed planters ready for distribution",
  },
  {
    kicker: "Labour saving device",
    title: "Solar sprayer",
    body: "Crop protection with smaller powered equipment.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.37 (1).jpeg"),
    alt: "A solar powered knapsack sprayer with its panel set up in a field",
  },
  {
    kicker: "Labour saving device",
    title: "Fertiliser applicator",
    body: "Keeping the crop supplied through the season.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.37 (2).jpeg"),
    alt: "A 25 litre backpack fertiliser applicator branded TracTrac ISSAM",
  },
  {
    kicker: "Labour saving device",
    title: "Thresher",
    body: "Harvesting, threshing and soil testing services.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (1).jpeg"),
    alt: "A petrol powered thresher demonstrated in front of a farmer group",
  },
  {
    kicker: "Tractor service",
    title: "Farm carrier",
    body: "Moving inputs to the farm and produce to market.",
    image: asset("uploads/WhatsApp Image 2026-09-03 at 11.09.38 (6).jpeg"),
    alt: "A yard of new orange TracTrac ISSAM tractor trailers",
  },
];

export const AGENT_ITEMS = [
  {
    number: "01",
    title: "Bookings",
    body: "See and manage incoming requests.",
    video: asset("uploads/Agent-Booking Management (1).mp4"),
    alt: "Screen recording of booking management in TracTrac Agent",
  },
  {
    number: "02",
    title: "Track your tractor",
    body: "See where a machine is working.",
    video: asset("uploads/Agent-Track your tractor (1).mp4"),
    alt: "Screen recording of tractor tracking in TracTrac Agent",
  },
  {
    number: "03",
    title: "Earnings",
    body: "See completed work and earnings.",
    video: asset("uploads/Agent-Wallet.mp4"),
    alt: "Screen recording of the earnings wallet in TracTrac Agent",
  },
];

export const NETWORK_POINTS = [
  "A farmer can request a tractor directly.",
  "A farmer without a smartphone, or who wants help, can work through a Booking Agent.",
  "Equipment owners can enlist their machines for hire.",
  "Booking Agents can support verification and connect local demand.",
];

export const FIELD_POINTS = [
  {
    title: "Location first",
    body: "Distance sits against every machine, because it decides whether the job is worth taking.",
  },
  {
    title: "Plots measured on foot",
    body: "Mapping starts by walking the boundary, on land with no survey behind it.",
  },
  {
    title: "Availability, not a catalogue",
    body: "Available now or booked ahead, so a farmer plans against what is real.",
  },
  {
    title: "People in between",
    body: "Agents and providers have their own tools, because most bookings still pass through someone trusted.",
  },
];
