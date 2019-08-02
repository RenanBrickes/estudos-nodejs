const tabeleDados =  require('../model/dados'); // importa o model 

module.exports = {
    
    async cadastrarNovo(req,res){ // requisição res e req 
        
        const {Nome, Idade, Cargo} = req.body; // recebe os dados da requesição do corpo da web

       
        const enviaDados = await tabeleDados.create({ // crio os dados com base do corpo da web
            Nome ,
            Idade,
            Cargo,
        });
        console.log(req.body);
        
        return res.json(enviaDados);
       
    },

    async mostrarPessoas(req,res){

        const pessoas = await tabeleDados.find({}); // Procura todos elementos no "Banco de Dados"
        console.log(pessoas);
        return res.json(pessoas); // Retorna os dados no tipo JSON
    },


    async deletarPessoas(req,res)
    {
        await tabeleDados.deleteMany({});
        res.deletedCount;
        return res.send("Excluido com Sucesso");
    }

}