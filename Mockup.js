let security = {
	name: '',
	isin: 0,
	country: '',
	prices: [
		{
			date: '',
			eod_price: 0
		},
		{
			date: '',
			eod_price: 0
		}
	]
};

// HOME PAGE:
// List Securities as individual cards.
// Create dummy list of security cards.

// SECURITY CARD: - Use bootstrap modal.
// 1. Name.
// 2. ISIN number.
// 3. Country.
// 4. Prices - is a link to a modal showing multiple dates and eod prices.
// 5. Edit - links to modal with ability to
	// edit: name, isin, country.
	// functions: delete, cancel, and save functions.