import Link from 'next/link'
import Layout from '../../componentes/layout'
import Title from '../../componentes/title'

import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

/*
export default function Imagens(props) {
    return (
        <Layout>
            <Title>Página de Imagens SSR </Title>
            <div>
                <Link href={`imagens/[id]`} as={`/imagens/${props.imangens1.id}`} key={props.imangens1.id}>
                    <a>
                        <h3>{props.imangens1.title}</h3>
                        <p>{props.imangens1.url}</p>
                        <img src={props.imangens1.url} width="60%" height="60%" alt="Imageme"></img>
                    </a>
                </Link>
                <Link href={`imagens/[id]`} as={`/imagens/${props.imangens2.id}`} key={props.imangens2.id}>
                    <a>
                        <h3>{props.imangens2.title}</h3>
                        <p>{props.imangens2.url}</p>
                        <img src={props.imangens2.url} width="60%" height="60%" alt="Imageme"></img>
                    </a>
                </Link>
                <Link href={`imagens/[id]`} as={`/imagens/${props.imangens3.id}`} key={props.imangens3.id}>
                    <a>
                        <h3>{props.imangens3.title}</h3>
                        <p>{props.imangens3.url}</p>
                        <img src={props.imangens3.url} width="60%" height="60%" alt="Imageme"></img>
                    </a>
                </Link>
                <Link href={`imagens/[id]`} as={`/imagens/${props.imangens4.id}`} key={props.imangens4.id}>
                    <a>
                        <h3>{props.imangens4.title}</h3>
                        <p>{props.imangens4.url}</p>
                        <img src={props.imangens4.url} width="60%" height="60%" alt="Imageme"></img>
                    </a>
                </Link>
                <Link href={`imagens/[id]`} as={`/imagens/${props.imangens5.id}`} key={props.imangens5.id}>
                    <a>
                        <h3>{props.imangens5.title}</h3>
                        <p>{props.imangens5.url}</p>
                        <img src={props.imangens5.url} width="60%" height="60%" alt="Imageme"></img>
                    </a>
                </Link>
            </div>
        </Layout>
    )
}
*/

export default function Imagens(props) {
    return (
        <Layout>
            <Title>Página de Imagens</Title>
            <div>
                <h4 className="cardPersonalizado">O conteúdo desta Página foi gerado utilizando o Server Side Rendering (SSR)</h4>
            </div>
            <div>
                <Row className="mt-4">

                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens1.id}`} key={props.imangens1.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens1.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens1.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>

                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens2.id}`} key={props.imangens2.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens2.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens2.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>

                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens3.id}`} key={props.imangens3.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens3.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens3.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>

                </Row>

                <Row className="mt-4">
                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens4.id}`} key={props.imangens4.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens4.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens4.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>

                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens5.id}`} key={props.imangens5.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens5.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens5.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>

                    <Col sm="4">
                        <Link href={`imagens/[id]`} as={`/imagens/${props.imangens6.id}`} key={props.imangens6.id}>
                            <a>
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">{props.imangens6.title}</CardTitle>
                                    </CardBody>
                                    <img width="100%" src={props.imangens6.url} alt="Card image cap" />
                                </Card>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Layout>
    )
}

/*
<h3>{props.imangens1.title}</h3>
<p>{props.imangens1.url}</p>
<img src={props.imangens1.url} width="60%" height="60%" alt="Imageme"></img>
*/


/*
const Example = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};
*/

export async function getServerSideProps() {

    const res1 = await fetch('https://jsonplaceholder.typicode.com/photos/1')
    const res2 = await fetch('https://jsonplaceholder.typicode.com/photos/2')
    const res3 = await fetch('https://jsonplaceholder.typicode.com/photos/3')
    const res4 = await fetch('https://jsonplaceholder.typicode.com/photos/4')
    const res5 = await fetch('https://jsonplaceholder.typicode.com/photos/5')
    const res6 = await fetch('https://jsonplaceholder.typicode.com/photos/6')

    const imangens1 = await res1.json();
    const imangens2 = await res2.json();
    const imangens3 = await res3.json();
    const imangens4 = await res4.json();
    const imangens5 = await res5.json();
    const imangens6 = await res6.json();

    return {
        props: {
            imangens1,
            imangens2,
            imangens3,
            imangens4,
            imangens5,
            imangens6
        }
    };
}




