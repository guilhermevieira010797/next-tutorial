export default function SSRPage({ name }) {
    return (
        <div>
            <span>Server Side Rendering Page</span>
            <br />
            <span>Nome: {name}</span>
        </div>
    )
}

/**
 * @description getServerSideProps -> Renderiza o componente (tela) acima, no momento da requisição.
 */
export async function getServerSideProps() {
    return { props: {
        name: "Vieira"
    }}
}