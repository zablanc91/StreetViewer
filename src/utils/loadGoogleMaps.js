import secret from '../config/secret';

//define promise to load up script for Google Maps, have the component that needs it import then resolve
export const loadGoogleMaps = new Promise( (resolve) => {

    window['GoogleMapsInit'] = resolve;
  
    let GMap = document.createElement('script');
  
    GMap.setAttribute('src',
   `https://maps.googleapis.com/maps/api/js?key=${secret.googleMapsAPI}&callback=GoogleMapsInit&region=IN`);
  
    document.body.appendChild(GMap); 
});