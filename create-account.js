function createAccount(pin, amount) {
	return {
		checkBalance(inputPin) {
			if(inputPin !== pin) return "Invalid PIN.";
			return `$ ${amount}`
		},
		deposit(inputPin, newAmount) {
			if(inputPin !== pin) return "Invalid PIN.";
			amount += newAmount;
		},
		withdraw(inputPin, withdrawalAmt) {
			if(inputPin !== pin) return "Invalid PIN.";
			if (withdrawalAmount > amount)
			return "Withdrawal amount exceeds account balance. Transaction cancelled.";
			amount -= withdrawalAmt;
			return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}.`;

		},
		changePin(oldPin, newPin) {
			if(oldPin !== pin ) return "Invalid PIN.";
			pin = newPin;
			return "PIN successfully changed!";

		}
	}
}

module.exports = { createAccount };


// let account = createAccount("1234", 100);

// account.checkBalance("oops");
// // "Invalid PIN."

// account.deposit("1234", 250);
// // "Succesfully deposited $250. Current balance: $350."

// account.withdraw("1234" 300);
// // "Succesfully withdrew $300. Current balance: $50."

// account.withdraw("1234" 10);
// // "Withdrawal amount exceeds account balance. Transaction cancelled."

// account.changePin("1234", "5678");
// // "PIN successfully changed!"