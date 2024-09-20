module.exports = async function ({ getNamedAccounts, deployments }) {
  let { deploy, log } = await deployments;
  let { deployer } = await getNamedAccounts();
  log("------------------------------------------------");

  let arguments = [];

  log("------------------------------------------");
  await deploy("DVideo", {
    from: deployer,
    args: arguments,
    log: true,
    waitConfirmations: 1,
  });

  log("Deployed ------------------------------------------");
};

module.exports.tags = ["all", "main"];
