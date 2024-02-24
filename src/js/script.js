import '../scss/styles.scss'
import { DateTime } from "luxon";

const dateInput = document.getElementById('dateInput')
const dateOfRates = document.getElementById('dateOfRates')
const shownRates = document.getElementById('shownRates')

const fakeResponse = {
  success: true,
  timestamp: 1708803843,
  source: "USD",
  quotes: {
    USDAED: 3.673042,
    USDAFN: 73.603101,
    USDALL: 95.741245,
    USDAMD: 405.666036,
    USDANG: 1.800674,
    USDAOA: 831.503981,
    USDARS: 837.498454,
    USDAUD: 1.525553,
    USDAWG: 1.8,
    USDAZN: 1.70397,
    USDBAM: 1.804826,
    USDBBD: 2.017349,
    USDBDT: 109.657177,
    USDBGN: 1.80811,
    USDBHD: 0.376505,
    USDBIF: 2854.150325,
    USDBMD: 1,
    USDBND: 1.343423,
    USDBOB: 6.903521,
    USDBRL: 4.995104,
    USDBSD: 0.999123,
    USDBTC: 0.000019361578,
    USDBTN: 83.045541,
    USDBWP: 13.79043,
    USDBYN: 3.26969,
    USDBYR: 19600,
    USDBZD: 2.013934,
    USDCAD: 1.34865,
    USDCDF: 2765.000362,
    USDCHF: 0.88059,
    USDCLF: 0.035523,
    USDCLP: 978.692382,
    USDCNY: 7.195404,
    USDCOP: 3925.160338,
    USDCRC: 514.09588,
    USDCUC: 1,
    USDCUP: 26.5,
    USDCVE: 101.753334,
    USDCZK: 23.428104,
    USDDJF: 177.917224,
    USDDKK: 6.88885,
    USDDOP: 58.708993,
    USDDZD: 134.49804,
    USDEGP: 30.846676,
    USDERN: 15,
    USDETB: 56.665529,
    USDEUR: 0.92305,
    USDFJD: 2.235204,
    USDFKP: 0.788863,
    USDGBP: 0.788706,
    USDGEL: 2.650391,
    USDGGP: 0.788863,
    USDGHS: 12.539104,
    USDGIP: 0.788863,
    USDGMD: 67.27504,
    USDGNF: 8587.643612,
    USDGTQ: 7.807872,
    USDGYD: 209.034282,
    USDHKD: 7.82285,
    USDHNL: 24.669404,
    USDHRK: 7.030095,
    USDHTG: 132.505883,
    USDHUF: 359.530388,
    USDIDR: 15594.15,
    USDILS: 3.63115,
    USDIMP: 0.788863,
    USDINR: 82.88205,
    USDIQD: 1308.817423,
    USDIRR: 42032.503818,
    USDISK: 137.803816,
    USDJEP: 0.788863,
    USDJMD: 156.268168,
    USDJOD: 0.70904,
    USDJPY: 150.48504,
    USDKES: 143.376551,
    USDKGS: 89.430385,
    USDKHR: 4071.425276,
    USDKMF: 454.950384,
    USDKPW: 899.999196,
    USDKRW: 1331.00035,
    USDKWD: 0.30774,
    USDKYD: 0.832649,
    USDKZT: 450.615974,
    USDLAK: 20847.136991,
    USDLBP: 89392.977437,
    USDLKR: 310.644581,
    USDLRD: 190.650382,
    USDLSL: 19.190382,
    USDLTL: 2.95274,
    USDLVL: 0.60489,
    USDLYD: 4.826282,
    USDMAD: 10.030637,
    USDMDL: 17.88954,
    USDMGA: 4532.828865,
    USDMKD: 56.863378,
    USDMMK: 2098.186684,
    USDMNT: 3406.327173,
    USDMOP: 8.051216,
    USDMRU: 39.750379,
    USDMUR: 45.620379,
    USDMVR: 15.403741,
    USDMWK: 1681.908365,
    USDMXN: 17.116204,
    USDMYR: 4.777504,
    USDMZN: 63.503732,
    USDNAD: 19.190377,
    USDNGN: 1607.000344,
    USDNIO: 36.773866,
    USDNOK: 10.600505,
    USDNPR: 132.87316,
    USDNZD: 1.613684,
    USDOMR: 0.38496,
    USDPAB: 0.999123,
    USDPEN: 3.786924,
    USDPGK: 3.807502,
    USDPHP: 55.935039,
    USDPKR: 279.13007,
    USDPLN: 3.979237,
    USDPYG: 7273.566188,
    USDQAR: 3.640504,
    USDRON: 4.597904,
    USDRSD: 108.141928,
    USDRUB: 93.055038,
    USDRWF: 1274.304434,
    USDSAR: 3.750554,
    USDSBD: 8.500465,
    USDSCR: 13.403497,
    USDSDG: 601.00034,
    USDSEK: 10.292915,
    USDSGD: 1.343038,
    USDSHP: 1.26625,
    USDSLE: 22.483622,
    USDSLL: 19750.000338,
    USDSOS: 571.503664,
    USDSRD: 35.701038,
    USDSTD: 20697.981008,
    USDSVC: 8.742675,
    USDSYP: 13001.869854,
    USDSZL: 19.261754,
    USDTHB: 35.930369,
    USDTJS: 10.940433,
    USDTMT: 3.51,
    USDTND: 3.123504,
    USDTOP: 2.360304,
    USDTRY: 30.818685,
    USDTTD: 6.790938,
    USDTWD: 31.617038,
    USDTZS: 2547.778342,
    USDUAH: 38.242329,
    USDUGX: 3931.158584,
    USDUYU: 39.080884,
    USDUZS: 12479.121488,
    USDVEF: 3618584.714698,
    USDVES: 36.186223,
    USDVND: 24640,
    USDVUV: 120.023184,
    USDWST: 2.739916,
    USDXAF: 605.321829,
    USDXAG: 0.043588,
    USDXAU: 0.000491,
    USDXCD: 2.70255,
    USDXDR: 0.75421,
    USDXOF: 605.321829,
    USDXPF: 110.380364,
    USDYER: 250.350363,
    USDZAR: 19.25804,
    USDZMK: 9001.203589,
    USDZMW: 22.954829,
    USDZWL: 321.999592
  }
}

const fakeFetch = () => {
  showResponse(fakeResponse)
}

const showDate = () => {
	const date = DateTime.fromISO(dateInput.value)
	dateOfRates.innerHTML = date.toFormat('dd-MM-yyyy')
}

const makeRate = (currency, rate) => {
	return `
  		<div class="card">
        <div class="card-header text-center fs-5">${currency}</div>
        <div class="card-body">
          <h1 class="card-title text-center fw-bold">${rate}</h1>
        </div>
      </div>`
}

const showRates = (quotes, source) => {

  for (const [key, value] of Object.entries(quotes)) {
    const card = document.createElement('div')
    card.innerHTML = makeRate(key.replace(source, ''), value)
    shownRates.appendChild(card)
  }
}

const showError = (response) => {
	const div = document.createElement('div')
  div.innerHTML = `<h3>${response.error.info}</h3>`
  shownRates.appendChild(div)
}

const showResponse = (response) => {
	shownRates.innerHTML = ''
  
	if (response.success) {
  	showRates(response.quotes, response.source)
  }
  else {
  	showError(response)
  }
}

const fetchRates = () => {
	const date = DateTime.fromISO(dateInput.value)
  const baseUrl = 'https://api.apilayer.com/currency_data/'
  let endpoint = 'live'
  
  if (date.toISODate() !== DateTime.now().toISODate()) {
  	endpoint = `historical?date=${date.toISODate()}`
  }
  
  var myHeaders = new Headers();
  myHeaders.append("apikey", "T3ORH9CFsJgzjjbNgwbsNtNKAnov3Zu9");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  
  shownRates.innerHTML = '<h2>Loading..</h2>'

  fetch(baseUrl + endpoint, requestOptions)
    .then(response => response.json())
    .then(result => showResponse(result))
    .catch(error => showError(error));
}

const start = () => {
	showDate()
  fetchRates()
  // fakeFetch()
}

dateInput.value = DateTime.now().toFormat('yyyy-MM-dd')

start()

dateInput.onchange = () => {
	start()
}
