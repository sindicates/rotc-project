const splash = document.querySelector('.splash');

// Corrected selectors for box elements (using class names)
const homeOption = document.querySelector('.homeIcon');

// Home Options
const submarineOption = document.querySelector('.box.sub');
const destroyerOption = document.querySelector('.box.des');
const cruiserOption = document.querySelector('.box.cru');
const carrierOption = document.querySelector('.box.air');

// Submarine Options
const typhoonOption = document.querySelector('.box.typhoon');
const ohioOption = document.querySelector('.box.ohio');
const vanguardOption = document.querySelector('.box.vanguard');
const jinOption = document.querySelector('.box.jin');

// Destroyer Options
const sejongOption = document.querySelector('.box.sejong');
const luayangOption = document.querySelector('.box.lua');
const kolkataOption = document.querySelector('.box.kol');
const horizonOption = document.querySelector('.box.horizon');

// Cruiser Options
const aragonOption = document.querySelector('.box.aragon');
const deutschlandOption = document.querySelector('.box.deu');
const ustinovOption = document.querySelector('.box.ustinov');
const takaoOption = document.querySelector('.box.takao');

// Carrier Options
const hornetOption = document.querySelector('.box.hornet');
const shandongOption = document.querySelector('.box.shandong');
const vikrOption = document.querySelector('.box.vik');
const kagaOption = document.querySelector('.box.kaga');

const shipNameElement = document.getElementById('shipName');
const shipInfoElement = document.getElementById('shipInfo');
const shipImageElement = document.getElementById('shipImage');

const targetScreens = {
  'submarineOption': 'rotcSub.html',
  'destroyerOption': 'rotcDes.html',
  'cruiserOption': 'rotcCru.html',
  'carrierOption': 'rotcAir.html',
  'homeOption': 'rotcHOME.html',

  'typhoonOption': 'typhoon.html',
  'ohioOption': 'ohio.html',
  'vanguardOption': 'vanguard.html',
  'jinOption': 'jin.html',

  'sejongOption': 'sejong.html',
  'luayangOption': 'lua.html',
  'kolkataOption': 'kolkata.html',
  'horizonOption': 'horizon.html',
  
  'aragonOption': 'aragon.html',
  'deutschlandOption': 'deu.html',
  'ustinovOption': 'ust.html',
  'takaoOption': 'takao.html',

  'hornetOption': 'hornet.html',
  'shandongOption': 'shandong.html',
  'vikrOption': 'vik.html',
  'kagaOption': 'kaga.html',
};

const shipData = {
  "typhoon": {
    name: "Typhoon",
    info: "Russian Navy - Known as project 941 ‘Akula’ by NATO. \n 45,000 tons, 175 m length, biggest submarine built, all-time. \n Used by the Russian Navy in the 80’s. It tops out at 27 knots. Powered by 2 steam engines and pressurized water nuclear reactors.",
    image: "typhoon img.png"
  },
  "ohio": {
    name: "Ohio",
    info: "This is an Ohio-class submarine...",
    image: "path/to/ohio.jpg"
  },
  // Add more ship data here...
};

let splashTimeout;

document.addEventListener("DOMContentLoaded", (e) => {
  if (!sessionStorage.getItem('hasVisited')) {
    // First visit in this tab, show splash screen for 2 seconds
    splashTimeout = setTimeout(() => {
      if (splash) {
        splash.classList.add('display-none'); // Assuming 'display-none' hides the splash
      }
    }, 2000);
    sessionStorage.setItem('hasVisited', 'true');
  } else {
    // Subsequent visits in this tab, hide splash screen immediately
    if (splash) {
      splash.classList.add('display-none'); // Hide splash screen immediately
    }
  }

  // Update ship info when the info screen is loaded
  const selectedShip = sessionStorage.getItem('selectedShip');
  if (selectedShip) {
    updateShipInfo(selectedShip);
  }
});

const header = document.querySelector('.header');

window.onscroll = function() {
  var top = window.scrollY;
  console.log(top);
  if (top >= 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
};


function changeScreen(target) {
  const screenUrl = targetScreens[target];
  if (screenUrl) {
    sessionStorage.setItem('selectedShip', target); // Store selected ship option
    if (splashTimeout) {
      clearTimeout(splashTimeout);
      if (splash) {
        splash.classList.add('display-none'); // Hide splash screen immediately
      }
    }
    window.location.assign(screenUrl);
  } else {
    console.warn("Target screen not found:", target);
  }
}

// Event listeners for home and main options
homeOption?.addEventListener('click', () => changeScreen('homeOption'));
submarineOption?.addEventListener('click', () => changeScreen('submarineOption'));
destroyerOption?.addEventListener('click', () => changeScreen('destroyerOption'));
cruiserOption?.addEventListener('click', () => changeScreen('cruiserOption'));
carrierOption?.addEventListener('click', () => changeScreen('carrierOption'));

// Event listeners for submarine options
typhoonOption?.addEventListener('click', () => {
  changeScreen('typhoonOption');
});

ohioOption?.addEventListener('click', () => {
 
  changeScreen('ohioOption');
});

vanguardOption?.addEventListener('click', () => {
 
  changeScreen('vanguardOption');
});
jinOption?.addEventListener('click', () => {

  changeScreen('jinOption');
});

// Event listeners for destroyer options
sejongOption?.addEventListener('click', () => {
 
  changeScreen('sejongOption');
});
luayangOption?.addEventListener('click', () => {

  changeScreen('luayangOption');
});
kolkataOption?.addEventListener('click', () => {

  changeScreen('kolkataOption');
});
horizonOption?.addEventListener('click', () => {

  changeScreen('horizonOption');
});

// Event listeners for cruiser options
aragonOption?.addEventListener('click', () => {
  changeScreen('aragonOption');
});
deutschlandOption?.addEventListener('click', () => {

  changeScreen('deutschlandOption');
});
ustinovOption?.addEventListener('click', () => {

  changeScreen('ustinovOption');
});
takaoOption?.addEventListener('click', () => {

  changeScreen('takaoOption');
});

// Event listeners for carrier options
hornetOption?.addEventListener('click', () => {

  changeScreen('hornetOption');
});
shandongOption?.addEventListener('click', () => {

  changeScreen('shandongOption');
});
vikrOption?.addEventListener('click', () => {

  changeScreen('vikrOption');
});
kagaOption?.addEventListener('click', () => {

  changeScreen('kagaOption');
});