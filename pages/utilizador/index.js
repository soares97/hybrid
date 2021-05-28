export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const utilizadores = await response.json();

    return {
        props: {
            utilizadores
        }
    }
}





