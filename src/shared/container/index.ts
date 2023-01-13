import "reflect-metadata" 
import { container } from "tsyringe";
import { ICategoriesRepository} from "../../modules/cars/repositories/implementations/ICategoriesRespository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/implementations/ISpecificationsRepository";

import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";

container.registerSingleton<ICategoriesRepository> (
     "CategoriesRepository",
     CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository> (
     "SpecificationRepository",
     SpecificationRepository
);

container.registerSingleton<IUsersRepository> (
     "UsersRepository",
     UsersRepository
)
