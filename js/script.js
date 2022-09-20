const container = document.querySelector('#container')
const panorama = new PANOLENS.ImagePanorama( '../images/pano.jpg' );
const viewer = new PANOLENS.Viewer({container:container});
viewer.add( panorama );
