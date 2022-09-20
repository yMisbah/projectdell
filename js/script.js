const container = document.querySelector('#container')
const panorama = new PANOLENS.ImagePanorama( 'https://ymisbah.github.io/projectdell/images/pano.jpg' );
const viewer = new PANOLENS.Viewer({container:container});
viewer.add( panorama );
