import Link from "next/link";


export default function skilldiv(){
    return (
        <div> 
            <div className="profile inner">
                
            <img className='inner skill_image' src='/img/cpp.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/c.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/github.png' alt='image testing'></img>
            <br></br>
            <img className='inner skill_image' src='/img/java.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/python.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/html.png' alt='image testing'></img>
            <br></br>
            <img className='inner skill_image' src='/img/javascript.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/react.png' alt='image testing'></img>
            <img className='inner skill_image' src='/img/nextjs.png' alt='image testing'></img>
            </div>
            <style jsx>{`
            .profile {
                height: 400px;
                width: 400px;
                border-radius: 30px;
                background-color: white;
                
             }
            .inner {
                margin: 0 auto;
                padding: 10px;
            }
            .skill_image {
                height: 120px;
                width:120px;
                display: inline;
            }
            p {
                font-size: 20px;
                font-family: Georgia, "Times New Roman"
            }
            `}</style>
        </div>
        
    );
}