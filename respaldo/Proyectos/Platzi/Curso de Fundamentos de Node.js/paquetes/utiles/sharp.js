const sharp = require('sharp');

sharp('original.jpg')
.resize(180)
.grayscale()
.toFile('resized.png');
