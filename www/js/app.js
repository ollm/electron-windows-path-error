const os = require('os'),
	fs = require('fs'),
	p = require('path');

const tmpFolder = p.join(os.tmpdir(), 'electron-windows-path-error');
const appFodler = p.join(__dirname, '../');

if(!fs.existsSync(tmpFolder))
	fs.mkdirSync(tmpFolder);

window.onload = function() {

	// Copy to Tmp
	const img = p.join(appFodler, 'www', 'image', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png');
	const longTmpFolder = p.join(tmpFolder, 'image-long-folder00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
	const tmpImg = p.join(longTmpFolder, 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png');

	if(!fs.existsSync(longTmpFolder))
		fs.mkdirSync(longTmpFolder);

	fs.copyFileSync(img, tmpImg);

	// Paths
	let paths = {
		'Image in App folder': p.join(appFodler, 'www', 'image', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png'),
		'Image in App folder long': p.join(appFodler, 'www', 'image', 'folder-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png'),
		'Image in App folder long 2': p.join(appFodler, 'www', 'image', 'folder-long-filename0000000000000000000000000000000000000', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png'),
		'Image in App folder long 3': p.join(appFodler, 'www', 'image', 'folder-long-filename000000000000000000000000000000000000', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png'),
		'Image in Tmp folder': tmpImg,
		'Image in Tmp folder short filename': p.join(tmpFolder, 'IMAGE-~1', 'IMAGE-~1.PNG'),
	};

	let images = '';

	for(let key in paths)
	{
		const path = paths[key];

		images += key+`:
			<br>Node.js fs.existsSync: <span>`+(fs.existsSync(path) ? 'true' : 'false')+`</span>
			<br>Path length: <span>`+path.length+`</span>
			<br><span>`+path+`</span>
			<br><br>
			<img src="`+path+`" width="30">
			<br><br><br><br>`;
	}

	document.querySelector('.images').innerHTML = images;

}