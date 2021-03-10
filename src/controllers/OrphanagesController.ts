import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

import orphanagesView from '../views/orpahanages_view'
import { OrphanageRepository } from '../repositories/OrphanageRepository'

class OrphanagesController {

	async index(req: Request, res: Response) {
		const orphanagesRepository = getCustomRepository(OrphanageRepository)

		const orphanages = await orphanagesRepository.find({
			relations: ['images']
		})

		return res.json(orphanagesView.renderMany(orphanages))
	}

	async show(req: Request, res: Response) {
		const { id } = req.params
		const orphanagesRepository = getCustomRepository(OrphanageRepository)

		const orphanage = await orphanagesRepository.findOneOrFail(id, {
			relations: ['images']
		})

		return res.json(orphanagesView.render(orphanage))
	}

	async create(req: Request, res: Response) {
		const {
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends,
		} = req.body

		const orphanagesRepository = getCustomRepository(OrphanageRepository)
		const reqImages = req.files as Express.Multer.File[]

		const images = reqImages.map(image => {
			return {
				path: image.filename
			}
		})



		const orphanage = orphanagesRepository.create({
			name,
			latitude,
			longitude,
			about,
			instructions,
			opening_hours,
			open_on_weekends,
			images
		})

		await orphanagesRepository.save(orphanage)

		return res.status(201).json(orphanagesView.render(orphanage))

	}
}

export {OrphanagesController}
