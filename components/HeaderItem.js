import Link from 'next/link'

const pagelist = {'HOME':'/', 'MAIL':'mail','SKILL':'skill'}

export default function HeaderItem({ Icon, title }) {
    console.log('title == ',title)
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">
               <Link href = {pagelist[title]}>
                   <a>{title}</a>
               </Link>
            </p>
        </div>
    )
}
