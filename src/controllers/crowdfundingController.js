const crowdfundingsCollection = require('../models/crowdfundingSchema')

//router.get('/', controller.getAllcrowdfundings)
const getAllCrowdfundings = (req, res) => {
    console.log("Solicitação da lista de todos os financiamentos cadastrados.")
    
    crowdfundingsCollection.find((error, crowdfundings) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem:"Financiamentos colaborativo cadastrados no Hub Fight's", crowdfundings})
        }
    })
  
}


const getCrowdfunding = (req, res) => {
    console.log(req.url)

    const idParam = req.params.id
    console.log("Buscando financiamento colaborativo.")

    crowdfundingsCollection.findById(idParam, (error, crowdfundings) =>{
        if(error){
            console.log('Financiamento não encontrado pelo ID informado!')
            return res.status(400).json({
                mensagem: "Esse financiamento não foi encontrado pelo ID informado! ",
                error
            })
        } else if(crowdfundings) {
            console.log(crowdfundings)
            return res.status(200).json(crowdfundings)
            }
        })
  
}

const postAddCrowdfunding = (req, res) => {
    console.log(req.url)
    console.log("Adicionando financiamento colaborativo no Hub Fight's.")

    const body = req.body
    const crowdfunding = new crowdfundingsCollection(body)
    console.log(crowdfunding)

    crowdfunding.save((error) =>{
        if(error){
            return res.status(400).send(error)
        } else {
            return res.status(200).json({mensagem: "Financiamento colaborativo cadastrado com sucesso!!", crowdfunding})
        }
    })
  
}

const updateCrowdfunding = (req, res) =>{
    const idParam = req.params.id
    const crowdfundingBody = req.body
    const update = { new:true }

    crowdfundingsCollection.findByIdAndUpdate(
        idParam, 
        crowdfundingBody, 
        update, 
        (error, crowdfunding) => {
            if(error){
                return res.status(500).json({
                    mensagem: "Aconteceu um erro", 
                    error
                })
            }else{
                return res.status(200).json({
                    mensagem: "Financeiamento atualizado!",
                    crowdfunding
                })
            }
        })

}


const deleteCrowdfunding = (req, res) => {
    const idParam = req.params.id
       crowdfundingsCollection.findByIdAndDelete(idParam, (error, crowdfunding) => {
           if(error) {
               console.log('Aqui!!!')
               return res.status(500).send(error);
           } else if(crowdfunding) {
               console.log('Usuário excluido!')
               return res.status(200).json('Evento excluido!');
           }
           console.log('opaa!!!')
           return res.sendStatus(404);
       });
}

module.exports = {
    getAllCrowdfundings,
    getCrowdfunding,
    postAddCrowdfunding,
    updateCrowdfunding,
    deleteCrowdfunding
}