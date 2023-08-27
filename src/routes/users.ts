import {Router} from 'express';
const router = Router();

import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user';

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser)
router.delete('/:id', deleteUser);

export default router;