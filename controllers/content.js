const db = require("../models")
const Content = db.content;


// Menambahkan Content
exports.create = async(req, res) => {
    try {
        const data = await Content.create(req.body)
        res.json({
            message: "Konten telah dibuat.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    } finally {
        res.json({
            message: "Kontent gagal dibuat"
        })
    }
}

// Menampilkan semua data Content
exports.getAll = async(req, res) => {
    try {
        const data = await Content.findAll()
        if (data.length == 0){
            res.json({
                message: "Konten tidak ditemukan",
                data: null,
            });
        }  
        else{
            res.json({
                message: "Konten Berhasil Ditampilkan",
                data: data,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message || "Kontent gagal ditampilkan",
            data: null, 
        });
    }
}

//Mengubah data sesuai id
exports.update = async (req, res)=> {
    const id = req.params.id
    try {
        const Content = await Content.findByPk(id, { rejectOnEmpty: true})
        Content.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Konten berhasil di update",
            data: Content,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Konten gagal diupdate",
            data: null,
        });
    }
}
//Menghapus data sesuai id 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const Content = await Content.findByPk(id, {rejectOnEmpty: true})

        Content.destroy()

        res.json({
            message: "Konten berhasil dihapus"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Konten gagal dihapus",
            data: null,
        });
    }
}

//Menampilkan data by id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const Content = await Content.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Content berhasil di ambil dengan id=${id}.`,
            data: Content,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Kontent gagal ditampilkan",
            data: null, 
        });
    }
};