// BONUS: Automate creation of securities.
// BONUS: Format date text to be.
let securities = [
	{
		name: 'security1',
		isin: 10000001,
		country: 'Finland',
		prices: [
			{
				// date: "new Date().toString()",
				date: '03/29/20',
				eod_price: 100
			},
			{
				date: '03/30/20',
				eod_price: 200
			}
		]
	},
	{
		name: 'security2',
		isin: 10000002,
		country: 'Sweden',
		prices: [
			{
				date: '03/29/20',
				eod_price: 100
			},
			{
				date: '03/30/20',
				eod_price: 200
			}
		]
	},
	{
		name: 'security3',
		isin: 10000003,
		country: 'Iceland',
		prices: [
			{
				date: '03/29/20',
				eod_price: 100
			},
			{
				date: '03/30/20',
				eod_price: 200
			}
		]
	}
];

const countryList = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'American Samoa',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antarctica',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas (the)',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia (Plurinational State of)',
	'Bonaire, Sint Eustatius and Saba',
	'Bosnia and Herzegovina',
	'Botswana',
	'Bouvet Island',
	'Brazil',
	'British Indian Ocean Territory (the)',
	'Brunei Darussalam',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cabo Verde',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cayman Islands (the)',
	'Central African Republic (the)',
	'Chad',
	'Chile',
	'China',
	'Christmas Island',
	'Cocos (Keeling) Islands (the)',
	'Colombia',
	'Comoros (the)',
	'Congo (the Democratic Republic of the)',
	'Congo (the)',
	'Cook Islands (the)',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'Curaçao',
	'Cyprus',
	'Czechia',
	"Côte d'Ivoire",
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic (the)',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Eswatini',
	'Ethiopia',
	'Falkland Islands (the) [Malvinas]',
	'Faroe Islands (the)',
	'Fiji',
	'Finland',
	'France',
	'French Guiana',
	'French Polynesia',
	'French Southern Territories (the)',
	'Gabon',
	'Gambia (the)',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guadeloupe',
	'Guam',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Heard Island and McDonald Islands',
	'Holy See (the)',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran (Islamic Republic of)',
	'Iraq',
	'Ireland',
	'Isle of Man',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	"Korea (the Democratic People's Republic of)",
	'Korea (the Republic of)',
	'Kuwait',
	'Kyrgyzstan',
	"Lao People's Democratic Republic (the)",
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macao',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands (the)',
	'Martinique',
	'Mauritania',
	'Mauritius',
	'Mayotte',
	'Mexico',
	'Micronesia (Federated States of)',
	'Moldova (the Republic of)',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands (the)',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger (the)',
	'Nigeria',
	'Niue',
	'Norfolk Island',
	'Northern Mariana Islands (the)',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine, State of',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines (the)',
	'Pitcairn',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Republic of North Macedonia',
	'Romania',
	'Russian Federation (the)',
	'Rwanda',
	'Réunion',
	'Saint Barthélemy',
	'Saint Helena, Ascension and Tristan da Cunha',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Martin (French part)',
	'Saint Pierre and Miquelon',
	'Saint Vincent and the Grenadines',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Sint Maarten (Dutch part)',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Georgia and the South Sandwich Islands',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan (the)',
	'Suriname',
	'Svalbard and Jan Mayen',
	'Sweden',
	'Switzerland',
	'Syrian Arab Republic',
	'Taiwan (Province of China)',
	'Tajikistan',
	'Tanzania, United Republic of',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tokelau',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks and Caicos Islands (the)',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates (the)',
	'United Kingdom of Great Britain and Northern Ireland (the)',
	'United States Minor Outlying Islands (the)',
	'United States of America (the)',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Venezuela (Bolivarian Republic of)',
	'Viet Nam',
	'Virgin Islands (British)',
	'Virgin Islands (U.S.)',
	'Wallis and Futuna',
	'Western Sahara',
	'Yemen',
	'Zambia',
	'Zimbabwe',
	'Åland Islands'
];
// Creating the variables here allow for better "global" access.
let backdrop;
let priceModal;
let addModal;
let editModal;
let br = document.createElement('br');
let hr = document.createElement('hr');

const deleteDailyPrice = (e) => {
	e.preventDefault();
	console.log('deleteDailyPrice', e.target.parentNode);
	e.target.parentNode.remove();
};

const openEditModal = (e) => {
	e.preventDefault();
	console.log('openEditModal');
	// Close the current modal,
	document.querySelector('.modal').remove();

	// Open the Edit modal.
	editModal = document.createElement('div');
	editModal.setAttribute('class', 'modal');

	let nameLabel = document.createElement('label');
	nameLabel.textContent = 'Name';
	editModal.appendChild(nameLabel);

	editModal.appendChild(br);

	let nameTextArea = document.createElement('textarea');
	nameTextArea.setAttribute('id', 'nameTextArea');
	nameTextArea.setAttribute('rows', '1');
	nameTextArea.setAttribute('column', '20');
	editModal.appendChild(nameTextArea);
	editModal.appendChild(br);

	let isinLabel = document.createElement('label');
	isinLabel.textContent = 'ISIN';
	editModal.appendChild(isinLabel);

	let isinTextArea = document.createElement('textarea');
	isinTextArea.setAttribute('id', 'isinTextArea');
	isinTextArea.setAttribute('rows', '1');
	isinTextArea.setAttribute('column', '20');
	editModal.appendChild(isinTextArea);

	let countryLabel = document.createElement('label');
	countryLabel.textContent = 'Country';
	editModal.appendChild(countryLabel);

	editModal.appendChild(br);

	// Create drop down here.
	let countryMenu = document.createElement('select');
	countryMenu.setAttribute('id', 'countryMenu');

	countryList.forEach((country) => {
		let countryOption = document.createElement('option');
		countryOption.setAttribute('value', country);
		countryOption.textContent = country;
		countryMenu.appendChild(countryOption);
	});
	editModal.appendChild(countryMenu);

	editModal.appendChild(hr);

	document.body.insertBefore(editModal, container);
};

const closeModal = (e) => {
	e.preventDefault();
	// find the backdrop and immediately remove it.
	document.querySelector('.backdrop').remove();
	document.querySelector('.modal').remove();
};

const openPriceModal = (e) => {
	e.preventDefault();
	// Backdrop element.
	backdrop = document.createElement('div');
	backdrop.classList.add('backdrop');
	document.body.insertBefore(backdrop, container);
	backdrop.addEventListener('click', closeModal);
	// Modal element and elements inside.
	priceModal = document.createElement('div');
	priceModal.classList.add('modal');

	let pricesText = document.createElement('p');
	pricesText.textContent = 'Prices';
	priceModal.appendChild(pricesText);

	let isin = e.target.parentNode.dataset.isin.toString();
	let security = securities.find((security) => {
		// *Bug was to convert isin to integer.
		// Or, use "==" instead of "==="
		return security.isin == isin;
	});
	console.log(security.prices);

	security.prices.forEach((price) => {
		let priceNode = document.createElement('div');
		priceNode.setAttribute('data-date', price.date);

		let date = document.createElement('span');
		date.setAttribute('class', 'body');
		date.textContent = price.date;
		priceNode.appendChild(date);

		let dailyPrice = document.createElement('span');
		dailyPrice.setAttribute('class', 'body');
		dailyPrice.textContent = price.eod_price;
		priceNode.appendChild(dailyPrice);

		let editPrice = document.createElement('a');
		editPrice.setAttribute('class', 'body');
		editPrice.textContent = 'Edit';
		editPrice.setAttribute('href', '');
		editPrice.addEventListener('click', openEditModal);
		priceNode.appendChild(editPrice);

		let x = document.createElement('a');
		x.setAttribute('class', 'body_right');
		x.setAttribute('href', '');
		x.addEventListener('click', deleteDailyPrice);
		x.textContent = 'x';
		priceNode.appendChild(x);

		priceModal.appendChild(priceNode);
	});

	priceModal.appendChild(hr);

	let close = document.createElement('a');
	close.textContent = 'close';
	close.setAttribute('href', '');
	close.setAttribute('class', 'body_right');
	close.addEventListener('click', closeModal);
	priceModal.appendChild(close);

	document.body.insertBefore(priceModal, container);
};

// const handleEditClick = (e) => {
//     e.preventDefault();
//     console.log("handleEditClick");
// }

let securityNodes = [];

// Dynamically create cards:
const card = (security) => {
	console.log(security.name);
	let newDiv = document.createElement('div');
	newDiv.setAttribute('class', 'card');
	newDiv.setAttribute('data-isin', security.isin);

	let name = document.createElement('span');
	name.setAttribute('class', 'title');
	name.textContent = security.name;
	newDiv.appendChild(name);

	let isin = document.createElement('span');
	isin.setAttribute('class', 'body');
	isin.textContent = security.isin;
	newDiv.appendChild(isin);

	let country = document.createElement('span');
	country.setAttribute('class', 'body');
	country.textContent = security.country;
	newDiv.appendChild(country);

	let prices = document.createElement('a');
	prices.setAttribute('class', 'body');
	prices.setAttribute('href', '');
	prices.innerHTML = 'Prices';
	prices.addEventListener('click', openPriceModal);
	newDiv.appendChild(prices);

	let edit = document.createElement('a');
	edit.setAttribute('class', 'body_right');
	edit.setAttribute('href', '');
	edit.innerHTML = 'Edit';
	edit.addEventListener('click', openEditModal);
	newDiv.appendChild(edit);

	console.log(newDiv.innerHTML);
	console.log(securityNodes);
	securityNodes.push(newDiv);
};

// // OR Use html template to create cards:
// const cardHTML = (security) => {
//     let newDiv = document.createElement("div");
//     newDiv.setAttribute("class", "card");

//     newDiv.innerHTML = `
//         <h1 class="h1">${security.name}</h1>
//         <span>${security.isin}</span>
//         <a>Price</a>
//         <a>Edit</a>
//     `
//     securityNodes.push(newDiv);
// }

const App = () => {
	// Grab the container.
	let container = document.getElementById('container');

	// Create card nodes.
	securities.forEach((security) => {
		card(security);
	});

	// Append card nodes to DOM.
	securityNodes.forEach((node) => {
		container.appendChild(node);
	});
};

App();