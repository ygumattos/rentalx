import { Router } from 'express'
import { CategoryRepository } from '../repositories/CategoryRepository'

const categoriesRoutes = Router()
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post('/', (req, res) => {
    const { name, description } = req.body

    const categoryAlreadyExists = categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
        return res.status(400).json({ error: 'Category already exists' })
    }
    
    categoriesRepository.create({ name, description })

    return res.status(201).send()
})

categoriesRoutes.get('/', (req, res) => res.json(categoriesRepository.list()))

export { categoriesRoutes }