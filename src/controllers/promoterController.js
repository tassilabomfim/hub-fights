const promotersCollection = require('../models/promoterSchema')

const getAllPromoters = (req, res) => {
    console.log("Solicitação da lista de todos os promoteres de eventos.")
    
    promotersCollection.find((error, promoters) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem:"Promotores de Eventos cadastrado no Hub Fight's", promoters})
        }
    })
  
}


const getPromoter = (req, res) => {
    console.log(req.url)

    const idParam = req.params.id
    console.log("Buscando promotor de evento.")

    promotersCollection.findById(idParam, (error, promoters) =>{
        if(error){
            console.log('Promotor não encontrado pelo ID informado!')
            return res.status(400).json({
                mensagem: "Promotor não encontrado pelo ID informado! ",
                error
            })
        } else if(promoters) {
            console.log(promoters)
            return res.status(200).json(promoters)
            }
        })
  
}


const postAddPromoter = (req, res) => {
    console.log(req.url)
    console.log("Adicionando promotor no Hub Fight's.")

    const body = req.body
    const promoter = new promotersCollection(body)
    console.log(promoter)

    promoter.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem: "Promotor cadastrado com sucesso!!", promoter})
        }
    })
  
}

const updatePromoter = (req, res) =>{
    const idParam = req.params.id
    const promoterBody = req.body
    const update = { new:true }

    promotersCollection.findByIdAndUpdate(
        idParam, 
        promoterBody, 
        update, 
        (error, promoter) => {
            if(error){
                return res.status(500).json({
                    mensagem: "Aconteceu um erro", 
                    error
                })
            }else{
                return res.status(200).json({
                    mensagem: "Usuário atualizado!",
                    promoter
                })
            }
        })

}


const deletePromoter = (req, res) => {
     const idParam = req.params.id
        promotersCollection.findByIdAndDelete(idParam, (error, promoter) => {
            if(error) {
                console.log('Aqui!!!')
                return res.status(500).send(error);
            } else if(promoter) {
                console.log('Usuário excluido!')
                return res.status(200).json('Usuário excluido!');
            }
            console.log('opaa!!!')
            return res.sendStatus(404);
        });
}

module.exports = {
    getAllPromoters,
    getPromoter,
    postAddPromoter,
    updatePromoter,
    deletePromoter
}