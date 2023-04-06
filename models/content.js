module.exports = (sequlize, Sequlize) => {
    const Content = sequlize.define('content', {
        provinsi: {
            type: Sequlize.STRING,
        },
        judul: {
            type: Sequlize.STRING,
        },
        gambar: {
            type: Sequlize.STRING,
        },
        isi: {
            type: Sequlize.TEXT,
        },
    });
    return Content;
}