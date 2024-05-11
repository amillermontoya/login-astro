import { Category, db, Todo, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{
			id:"sooasd",
			email:"adams@gmail.com",
			username:"Adams",
		},
		{
			id:"assas",
			email:"branko@gmail.com",
			username:"Branko",
		}
		,
		{
			id:"assassd",
			email:"oscar@gmail.com",
			username:"Oscar",
		},
		{
			id:"assasaas",
			email:"ignacio@gmail.com",
			username:"Ignacio",
		},
		{
			id:"assas23",
			email:"juan@gmail.com",
			username:"Juan",
		}
	])
	await db.insert(Category).values([
		{
			id:"wqewq",
			label:"Software"
		},
		{
			id:"assas2",
			label:"Marketing"
		}
	])
	await db.insert(Todo).values([
		{
			id:"232dasd",
			title:"Crear funcion de fecha",
			description:"funcion que adapte las fechas",
			category_id:"assas2",
			user_id:"assas23",
		},
		{
			id:"assaswqww",
			title:"Crear Anuncio",
			description:"funcion de anuncio",
			category_id:"wqewq",
			user_id:"assasaas",
		}
	])
}
