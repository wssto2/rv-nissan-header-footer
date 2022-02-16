let axios = require('axios');
let fs = require('fs');
let path = require('path');

const destinationDirectory = './src/assets/css/';

if (fs.existsSync(destinationDirectory)) {
    fs.rmSync(destinationDirectory, {recursive: true, force: true});
}

let downloadedDirectory = path.join(destinationDirectory, '../downloaded');
if (fs.existsSync(downloadedDirectory)) {
    fs.rmSync(path.join(destinationDirectory, '../downloaded'), { recursive: true, force: true });
}

if (!fs.existsSync(destinationDirectory)){
    fs.mkdirSync(destinationDirectory, { recursive: true });
}

if (!fs.existsSync(downloadedDirectory)){
    fs.mkdirSync(downloadedDirectory, { recursive: true });
}

/**
 * CSS datoteke koje treba preuzeti
 */
let urls = [
    'https://libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/fonts/fonts-latin-extended.min.css',
    'https://libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/small.min.css',
    'https://libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/medium.min.css',
    'https://libs-europe.nissan-cdn.net/etc/designs/nissan_next_v3/22.02.2.NISSAN-19/common-assets/css/large.min.css'
];

urls.forEach((url) => {

    axios.get(url)
        .then((response) => {
            if (! response || ! response.data) {
                return;
            }

            let urlParts = url.split('/');
            let fileName = urlParts.pop();

            let css = response.data;

            /**
             * Spremanje CSS datoteke lokalno
             */
            fs.writeFileSync(destinationDirectory + fileName, css);
            console.log("Datoteka " + fileName + " uspješno preuzeta!");

            let directoryParts = url.split('/')
            directoryParts.pop();
            let directory = directoryParts.join('/');
            if (directory [directory.length - 1] !== '/') {
                directory += '/';
            }

            /**
             * Preuzimanje fotografija koje se koriste unutar CSS-a
             */
            const matches = response.data.toString().matchAll(/url\(([a-zA-Z0-9./_-]+)\)/gm);

            for (let asset of matches) {
                if (! asset || ! asset [1] || asset [1].length < 5) {
                    continue;
                }

                let assetParts = asset [1].split('/');
                let assetFileName = assetParts.pop();
                let assetDirectory = '../downloaded/';
                let assetPath = path.join(assetDirectory, assetFileName);

                let urlParts = url.split('/');
                urlParts.pop();
                let assetUrl = urlParts.join('/').concat('/', asset [1]);

                css = css.replace(asset [1], assetPath);

                if (!fs.existsSync(assetDirectory)) {
                    fs.mkdirSync(assetDirectory, { recursive: true });
                }

                /**
                 * Preuzimanje asseta
                 */
                axios.get(assetUrl, {
                    responseType: 'arraybuffer',
                    responseEncoding: 'binary'
                }).then((assetResponse) => {
                    if (! assetResponse || ! assetResponse.data) {
                        return;
                    }

                    fs.writeFileSync(path.join(downloadedDirectory, assetFileName), assetResponse.data, "binary");
                }).catch(err => {
                    fs.writeFileSync(path.join(downloadedDirectory, assetFileName), '');
                    console.warn(assetUrl, err.response.status);
                });
            }

            fs.writeFileSync(destinationDirectory + fileName, css);
        });
});