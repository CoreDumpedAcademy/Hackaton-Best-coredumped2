const Smoto = require('../models/smoto')

function getEverything(req, res){
	console.log('GET de todas las polizas de seguros de coche'.blue)
	Smoto.find({}, (error, polizas)=>{
		if(error) return res.status(500).send({message: `Error: ${error}`})
		if(!polizas) return res.status(404).send({message: 'No hay polizas registradas en la base de datos'})

		return res.status(200).send({polizas})
	})
}

function getByDNI(req, res){
	console.log(`GET del usuario ${req.params.dni}`.blue)
	Smoto.findOne({dni: req.params.dni}, (error, polizas) => {
		if(error) return res.status(500).send({message: `Error: ${error}`})
		if(!polizas) return res.status(404).send({message: 'No hay polizas registradas en la base de datos'})

		return res.status(200).send({polizas})
	})
}

function crearPoliza(req, res){
	console.log(`Añadir una poliza a la base de datos`)
	let poli = new Smoto(req.body)

	poli.save((err, poli)=>{
		if(err) res.status(500).send(`Error al guardar la información en la base de datos ${err}`)
    else res.status(200).send({poli})
	})
}

function updateByDNI(req, res){
	Smoto.findOneAndUpdate({dni: req.params.dni}, req.body, (error, poliza) => {
		if(error) return res.status(500).send({message: `Error: ${error}`})
		if(!poliza) return res.status(404).send({message: `Poliza no encontrada; no se puede actualizar`})
		
		return res.status(200).send({poliza})
	})
}

function borrarPoliza(req, res){
	var dni = req.params.dni
	console.log(`DELETE ${dni}`)
	Smoto.findOneAndDelete({dni: dni}, (err, poli) => {
		if(err) return res.status(500).send({err})
		if(!poli) return res.status(404).send(`Poliza no encontrada`)

		return res.status(200).send(`Poliza eliminada`)
	})
}

module.exports = {
	getByDNI,
	getEverything,
	borrarPoliza,
	updateByDNI,
	crearPoliza
}