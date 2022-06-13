// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat')

async function main() {
	// Hardhat always runs the compile task when running scripts with its command
	// line interface.
	//
	// If this script is run directly using `node` you may want to call compile
	// manually to make sure everything is compiled
	// await hre.run('compile');

	// We get the contract to deploy
	const Greeter = await hre.ethers.getContractFactory('Greeter')
	const greeter = await Greeter.deploy('Hello, Hardhat!')

	await greeter.deployed()

	console.log('Greeter deployed to:', greeter.address)

	// * Deploying multiple contracts asynchronously using a function
	const deployContract = async contractName => {
		const Contract = await hre.ethers.getContractFactory(contractName)
		let deployedContract

		if (contractName === 'AddMedicalInfo' || contractName === 'GetMedicalInfo')
			deployedContract = await Contract.deploy(Doctors, Patients, Records)
		else deployedContract = await Contract.deploy()

		await deployedContract.deployed()

		console.log(contractName, 'deployed to: ', deployedContract.address)

		return deployedContract.address
	}

	const AccessControl = await deployContract('AccessControl')
	const Doctors = await deployContract('Doctors')
	const Patients = await deployContract('Patients')
	const Records = await deployContract('Records')
	const AddMedicalInfo = await deployContract('AddMedicalInfo')
	const GetMedicalInfo = await deployContract('GetMedicalInfo')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
