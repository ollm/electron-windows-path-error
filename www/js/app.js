const os = require('os'),
	fs = require('fs'),
	p = require('path');

const tmpFolder = p.join(os.tmpdir(), 'electron-windows-path-error');
const appFodler = p.join(__dirname, '../');

if(!fs.existsSync(tmpFolder))
	fs.mkdirSync(tmpFolder);

window.onload = function() {

	const img = p.join(appFodler, 'www', 'image', 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png');

	// Image 0
	const path0 = document.querySelector('.path-0');
	const image0 = document.querySelector('.image-0');
	const exists0 = document.querySelector('.exists-0');

	path0.innerHTML = img;
	image0.setAttribute('src', img);
	exists0.innerHTML = fs.existsSync(img) ? 'true' : 'false';

	// Image 1
	const path1 = document.querySelector('.path-1');
	const image1 = document.querySelector('.image-1');
	const exists1 = document.querySelector('.exists-1');

	const longTmpFolder = p.join(tmpFolder, 'image-long-folder00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');

	if(!fs.existsSync(longTmpFolder))
		fs.mkdirSync(longTmpFolder);

	const tmpImg = p.join(longTmpFolder, 'image-long-filename00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000.png');

	fs.copyFileSync(img, tmpImg);

	path1.innerHTML = tmpImg;
	image1.setAttribute('src', tmpImg);
	exists1.innerHTML = fs.existsSync(tmpImg) ? 'true' : 'false';

	// Image 2
	const path2 = document.querySelector('.path-2');
	const image2 = document.querySelector('.image-2');
	const exists2 = document.querySelector('.exists-2');

	const shortFilenameImg = p.join(tmpFolder, 'IMAGE-~1', 'IMAGE-~1.PNG');

	path2.innerHTML = shortFilenameImg;
	image2.setAttribute('src', shortFilenameImg);
	exists2.innerHTML = fs.existsSync(shortFilenameImg) ? 'true' : 'false';

}