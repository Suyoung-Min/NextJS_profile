import Link from "next/link";


export default function profileDiv(){
    return (
        <div> 
            <div className="profile inner">
                <img className='inner pengu_image' src='/img/pengu.jpg' alt='image testing'></img>
                <div>
                    <p>
                        This is <strong>Suyoung</strong>s profile.
                    </p>
                    <br></br>
                    <p>I'm a student of <a href="https://cs.skku.edu/ko/" target="_blank">SKKU, SOFTWARE.</a></p>
                    <br></br>
                    <p>This page is made by NextJS, ReactJS, Tailwind
                        +(JSX grammar)
                    </p>
                    <br></br>
                    <h1><string>Page routing</string></h1>
                    <br></br>
                    <nav className='.inner'>
                        <ol>
                            <li>
                                <Link href='./mail'>
                                    <a>MAIL</a>
                                </Link>
                            </li>
                            <br></br>
                            <li>
                                <Link href='./skill'>
                                    <a>SKILL</a>
                                </Link>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <style jsx>{`
            .profile {
                height: 500px;
                width: 400px;
                border-radius: 30px;
                background-color: white;
                
             }
            .inner {
                margin: 0 auto;
                padding: 10px;
            }
            .pengu_image {
                height: 150px;
            }
            p {
                font-size: 20px;
                font-family: Georgia, "Times New Roman"
            }
            `}</style>
        </div>
        
    );
}
