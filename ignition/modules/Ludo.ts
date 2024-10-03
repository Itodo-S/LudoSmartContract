import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LudoModule = buildModule("LudoModule", (m) => {
  // Deploy the Ludo contract
  const ludo = m.contract("Ludo");

  return { ludo };
});

export default LudoModule;
