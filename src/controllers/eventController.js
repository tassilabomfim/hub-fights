const eventsCollection = require('../models/eventSchema')

//router.get('/', controller.getAllEvents)
const getAllEvents = (req, res) => {
    console.log("Solicitação da lista de todos os eventos cadastrados.")
    
    eventsCollection.find((error, events) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem:"Eventos cadastrados no Hub Fight's", events})
        }
    })
  
}

//router.get('/:id', controller.getEvent) 
const getEvent = (req, res) => {
    console.log(req.url)

    const idParam = req.params.id
    console.log("Buscando evento.")

    eventsCollection.findById(idParam, (error, events) =>{
        if(error){
            console.log('Evento não encontrado pelo ID informado!')
            return res.status(400).json({
                mensagem: "Esse evento não foi encontrado pelo ID informado! ",
                error
            })
        } else if(events) {
            console.log(events)
            return res.status(200).json(events)
            }
        })
  
}

const postAddEvent = (req, res) => {
    console.log(req.url)
    console.log("Adicionando evento no Hub Fight's.")

    const body = req.body
    const event = new eventsCollection(body)
    console.log(event)

    event.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem: "Evento cadastrado com sucesso!!", event})
        }
    })
  
}

const updateEvent = (req, res) =>{
    const idParam = req.params.id
    const eventBody = req.body
    const update = { new:true }

    eventsCollection.findByIdAndUpdate(
        idParam, 
        eventBody, 
        update, 
        (error, event) => {
            if(error){
                return res.status(500).json({
                    mensagem: "Aconteceu um erro", 
                    error
                })
            }else{
                return res.status(200).json({
                    mensagem: "Dados do evento atualizado!",
                    event
                })
            }
        })

}

const deleteEvent = (req, res) => {
    const idParam = req.params.id
       eventsCollection.findByIdAndDelete(idParam, (error, event) => {
           if(error) {
               console.log('Aqui!!!')
               return res.status(500).send(error);
           } else if(event) {
               console.log('Usuário excluido!')
               return res.status(200).json('Usuário excluido!');
           }
           console.log('opaa!!!')
           return res.sendStatus(404);
       });
}


module.exports = {
    getAllEvents,
    getEvent,
    postAddEvent,
    updateEvent,
    deleteEvent
}