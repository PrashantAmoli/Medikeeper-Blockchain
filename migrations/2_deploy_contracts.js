const AccessControl = artifacts.require('AccessControl');
const Patient = artifacts.require('Patients');
const Doctor = artifacts.require('Doctors');
const Record = artifacts.require('Records');
const MedicalInfoAddGet = artifacts.require('MedicalInfoAddGet');

module.exports = async function (deployer) {
	await deployer.deploy(AccessControl, {
		gas: 5000000,
	});
	await deployer.deploy(Patient, {
		gas: 5000000,
	});
	const patient_ = await Patient.deployed();

	await deployer.deploy(Doctor, {
		gas: 5000000,
	});
	const doctor_ = await Doctor.deployed();

	await deployer.deploy(Record, {
		gas: 5000000,
	});
	const record_ = await Record.deployed();
	await deployer.deploy(MedicalInfoAddGet, patient_.address, doctor_.address, record_.address, {
		gas: 5000000,
	});
};
