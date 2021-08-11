import { useRouter } from "next//router";

export default function ItemPage({ name }) {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <span>Server Side Rendering Page - Dynamic Route</span>
            <br />
            <span>Rota de ID: {id}</span>
            <br />
            <span>Nome: {name}</span>
        </div>
    )
}

/**
 * @description getServerSideProps -> Renderiza o componente (tela) acima, no momento da requisição.
 */
export function getServerSideProps() {
    return { props: {
        name: "Pinheiro"
    }}
}