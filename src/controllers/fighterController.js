const fightersCollection = require('../models/fighterSchema')


const getAllFighters = (req, res) => {
    console.log("Solicitação da lista de todos os lutadores cadastrados.")
    
    fightersCollection.find((error, fighters) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem:"Lutadores cadastrados no Hub Fight's", fighters})
        }
    })
  
}

// router.get('/:id', controller.getFighter)

const getFighter = (req, res) => {
    const idParam = req.params.id
    console.log("Buscando lutador.")

    fightersCollection.findById(idParam, (error, fighters) =>{
        if(error){
            console.log('Luatador não encontrado pelo ID informado!')
            return res.status(400).json({
                mensagem: "Esse lutador não foi encontrado pelo ID informado! ",
                error
            })
        } else if(fighters) {
            console.log(fighters)
            return res.status(200).json(fighters)
            }
        })
  
}

const postAddFighter = (req, res) => {
    console.log(req.url)
    console.log("Adicionando lutador no Hub Fight's.")

    const body = req.body
    const fighter = new fightersCollection(body)
    console.log(fighter)

    fighter.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem: "Lutador cadastrado com sucesso!!", fighter})
        }
    })
  
}

const updateFighter = (req, res) =>{
    const idParam = req.params.id
    const fighterBody = req.body
    const update = { new:true }

    fightersCollection.findByIdAndUpdate(
        idParam, 
        fighterBody, 
        update, 
        (error, fighter) => {
            if(error){
                return res.status(500).json({
                    mensagem: "Aconteceu um erro", 
                    error
                })
            }else{
                return res.status(200).json({
                    mensagem: "Lutador atualizado!",
                    fighter
                })
            }
        })

}


const deleteFighter = (req, res) => {
     const idParam = req.params.id
        fightersCollection.findByIdAndDelete(idParam, (error, fighters) => {
            if(error) {
                console.log('Aqui!!!')
                return res.status(500).send(error);
            } else if(fighters) {
                console.log('Usuário excluido!')
                return res.status(200).json('Usuário excluido!');
            }
            console.log('opaa!!!')
            return res.sendStatus(404);
        });
}


module.exports = {
    getAllFighters,
    getFighter,
    postAddFighter,
    updateFighter,
    deleteFighter
}