import { createContainer, asClass, InjectionMode } from 'awilix';
import { DrinksDataRepository } from 'drinks-company-data-repositories';
import { DrinksBusinessService } from 'drinks-company-business-services';

const container = createContainer({
	injectionMode: InjectionMode.PROXY,
});

container.register({
	drinksDataRepository: asClass(DrinksDataRepository),
	drinksBusinessService: asClass(DrinksBusinessService),
});

export default container;
