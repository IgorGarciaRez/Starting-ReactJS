import { useParams, useLocation } from "react-router"

function Categoria(){

    function useQuery(){
        return new URLSearchParams(useLocation().search)
    }

    let {categ} = useParams()
    let query = useQuery()
    let tipo = query.get('tipo')
    let mes = query.get('mes')

    return(
        <div>
            <h4>Página Categoria</h4>
            <p>Vamos falar sobre {categ}</p>
        </div>
    )

}
export default Categoria