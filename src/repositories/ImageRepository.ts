import { EntityRepository, Repository } from 'typeorm'
import { Image } from '../models/Image'

@EntityRepository(Image)
class ImageRepository extends Repository<Image>{}

export {ImageRepository}
