/* global google */

// const { Map } = await google.maps.importLibrary('maps');
//const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

const [{ Map, InfoWindow }, { AdvancedMarkerElement }] = await Promise.all([
    google.maps.importLibrary('maps'),
    google.maps.importLibrary('marker'),
]);

const bmgLoc = { lat: 40.09543950426593, lng: -74.2221793333354 };
const pcsLoc = { lat: 40.108884911823516, lng: -74.21764740599487 };

const map = new /*google.maps.*/Map(document.getElementById('map'), {
    center: bmgLoc,
    zoom: 18,
    renderingType: 'VECTOR',
    mapTypeId: 'satellite',
    mapId: 'DEMO_MAP_ID'
});

const searchForm = document.querySelector('#search');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchGeoNames(e.target.elements['keyword'].value);
});


async function fetchGeoNames(keyword){
    try {
        //getting recipe name from index
        const r = await fetch(`http://api.geonames.org/wikipediaSearch?q=${keyword}&maxRows=100&username=batshevagestetner&type=json`);
        console.log(r);
        if (!r.ok) {
            throw new Error(`${r.status} - ${r.statusText}`);
        }

        const t = await r.json();
        console.log(t);
        // setUpMarkers
        const geoArray = t['geonames']
        geoArray.forEach(e => {
            const marker = new AdvancedMarkerElement({
            map,
            position:{ lat:e.lat, lng:e.lng},
                title: e.title
            
            });

            const infoWindow = new InfoWindow();

            marker.addListener('click', () => {
                infoWindow.setContent(`${e.summary} <a href="${e.wikipediaUrl}" >more info</a>`);
                infoWindow.open({
                    anchor: marker
                });
            });
            
        });
        
    }
    catch (e) {
        console.error('oops', e);
    }
};


map.addListener('center_changed', () => {
    const center = map.getCenter();
    console.log('map center changed', center.lat(), center.lng());
});



// BEGIN - added after class to zoom map to include all markers
const bounds = new google.maps.LatLngBounds();
bounds.extend(bmgLoc);
bounds.extend(pcsLoc);
map.fitBounds(bounds);
// END - added after class to zoom map to include all markers
