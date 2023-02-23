const db = require("../models")
const Quiz = db.quizzes;


// Menambahkan Quiz
exports.create = async(req, res) => {
    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "Quiz created successfully.",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

// Menampilkan semua data quiz
exports.getAll = async(req, res) => {
    try {
        const quizzes = await Quiz.findAll()
        res.json({
            message: "Quizzes retrieved successfully.",
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
}

//Mengubah data sesuai id
exports.update = async (req, res)=> {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true})
        quiz.update(req.body, {
            where: {id}
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null,
        });
    }
}
//Menghapus data sesuai id 
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})

        quiz.destroy()

        res.json({
            message: "Quiz deleted successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz.",
            data: null,
        });
    }
}

//Menampilkan data by id
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, {rejectOnEmpty: true})
        res.json({
            message: `Quizzes retrieved successfully with id=${id}.`,
            data: quiz,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz.",
            data: null, 
        });
    }
};

//Menampilkan data quiz dari kategori
exports.getByCategoryId = async (req, res)=> {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where : {
            categoryId: id,
            
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with categoryId=${id}.`,
        data : quizzes
    });
}

//Menampilkan data quiz by level
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    try {
        const quizzes = await Quiz.findAll({
            where : {
                levelId: id
            }
        })
        res.json({
            message: `Quizzes retrieved successfully with categoryId=${id}.`,
            data : quizzes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz.",
            data: null,
        });
    }
}