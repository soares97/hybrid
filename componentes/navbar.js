import Link from 'next/Link'

export default function Navbar() {
    return (
        <nav>
            <img src="/img2.png" width="100" height="50" alt="Imageme"></img>
            <Link href="/imagens">
                <a>Imagens</a>
            </Link>
            <Link href="/postes">
                <a> Postes</a>
            </Link>
            <Link href="/">
                <a>Home</a>
            </Link>
            
            <style jsx>
                {`
                    nav{
                        font-size: 14pt;
                        margin-right: 15%;
                        margin-bottom: 100px;
                    }

                    a{
                        padding: 0 10px;
                        text-decoration:none;
                        display:block;
	                    float:right;
                        color: rgb(0,0,0);
                        background-color:#dddddd;
                        --background-color: #606060;
                        padding:10px;
	                    margin:2px;
                        --margin-right: 25%;
                    }

                    a:hover{
                        color:rgb(255,255,255);
                        text-decoration:underline
                    }

                `}
            </style>
        </nav>
    )
}