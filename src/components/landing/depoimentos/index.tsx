import Area from "../comum/Area";
import Depoimento from "./Depoimento";

export default function Depoimentos() {
    return (
        <Area id="depoimentos" className={`
            bg-gradient-to-r from-black via-zinc-900 to-black
            py-10 sm:py-20
        `}>
            <div className={`flex flex-col justify-center items-center`}>
                <h2 className="font-thin text-zinc-600 text-2xl sm:text-4xl mb-11 text-center">
                    O feedback da galera...
                </h2>
                <div className="flex justify-center xl:justify-between items-center justify-items-center gap-7 w-full flex-wrap">
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVzc29hc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        nome="Gustavo Reis"
                        titulo="Desenvolvedor de Software"
                        
                        texto="Sempre estava sem dinheiro e com divídas, não tinha controle com meu salário. Agora vejo para onde vai todo meu dinheiro e consigo me planejar muito melhor."
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlc3NvYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        nome="Geovana Moraes"
                        titulo="Diretora Comercial"
                        texto="Sempre estava sem dinheiro e com divídas, não tinha controle com meu salário. Agora vejo para onde vai todo meu dinheiro e consigo me planejar muito melhor."
                        destaque
                    />
                    <Depoimento
                        avatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlc3NvYXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                        nome="Fabiola Vieira"
                        titulo="Servidora Pública"
                        texto="Sempre estava sem dinheiro e com divídas, não tinha controle com meu salário. Agora vejo para onde vai todo meu dinheiro e consigo me planejar muito melhor."
                    />
                </div>
            </div>
        </Area>
    )
}