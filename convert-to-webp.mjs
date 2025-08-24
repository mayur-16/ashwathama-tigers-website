import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {
  await imagemin(['src/assets/**/*.{jpg,png}'], {
    destination: 'src/assets/optimized',
    plugins: [imageminWebp({ quality: 80 })]
  });
  console.log('Images converted to WebP!');
})();