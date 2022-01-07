import path = require('path')
import multer = require('multer')

const storagePath = path.resolve('dummy/uploads')

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      console.log('********', req.files)
      done(null, storagePath)
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname)

      done(null, path.basename(file.originalname, ext) + Date.now() + ext)
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024, files: 10 },
})

export default upload.fields([{ name: 'postingImages' }, { name: 'data' }])

// ! 파일최대용량을 넘어서거나 최대갯수를 넘어서게 요청을 보냈을 때 오류처리를 할 적절한 방법을 찾지못한상황.
// ! 이 부분은 프론트에서 반드시 막아줘야함...
