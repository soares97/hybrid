import {useRouter} from 'next/router';
import Layout from '../../componentes/layout';
import Title from '../../componentes/title';

export default function post() {
    const router = useRouter();
    //console.log(router);
    return (
        <Layout>
            <Title>Detalhe do poste </Title>
            <p>Poste ID: {router.query.id}</p>
        </Layout>
    )
}

/*
import {useRouter} from 'next/router';

export default function dynamicRouting() {
    const router = useRouter();
    return (
        <div>
            <h1>Detalhe do poste </h1>
            <p>Poste ID: {router.query.id}</p>
        </div>
    )
}
*/