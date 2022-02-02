import Link from "next/link";


export default function maildiv(){
    return (
        <div> 
            <div className="profile inner">
                <p>&nbsp;MAIL</p>
                <br></br>
                <p>Naver: blackspider9704@naver.com</p>
                <p>Google: sujae9704@gmail.com</p>

                <br></br>

                <a className='inner' href='https://github.com/Suyoung-Min'>
                    <img className='inner skill_image' src='/img/github.png' alt='image testing'></img>
                </a>

                <a className='inner' href='https://www.acmicpc.net/user/blackspider9704'>
                    <img className='inner boj_image' src='/img/boj.png' alt='image testing'></img>
                </a>

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
            .skill_image {
                height: 100px;
            }
            .boj_image {
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