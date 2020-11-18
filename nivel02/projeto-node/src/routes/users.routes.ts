import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../config/upload'
import checkAuthentication from '../middlewares/checkAuthentication'
import CreateUserService from '../services/CreateUserService'
import UpdateAvatarService from '../services/UpdateAvatarService'
import { UpdateResult } from 'typeorm'

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post('/', async (request, response) => {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.run({
      name,
      email,
      password,
    })

    delete user.password

    return response.json(user)
})

usersRouter.patch(
  '/avatar',
  checkAuthentication,
  upload.single('avatar'),
  async (request, response) => {
      const updateAvatar = new UpdateAvatarService()

      const user = await updateAvatar.run({
        user_id: request.user.id,
        avatarFilename: request.file.filename,
      })

      return response.json(user)
  },
)

export default usersRouter
