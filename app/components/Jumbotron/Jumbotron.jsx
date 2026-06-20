"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link"


// Using this way around because Google drive does not have a way to calculate total files in a folder.
// in future, we can make a panel where we can adjust these values and store them in a DB
const filesMetaData = [
  {totalFolders:'12,619'},
  {totalFolders:'10,945'},
  {totalFolders:'12,481'},
  {totalFolders:'2,542'},
  {totalFolders:'1,585'},
  {totalFolders:'6,347'},
  {totalFolders:'6,347'},
  {totalFolders:'7,120'},
  {totalFolders:'5,389'},
  {totalFolders:'15,353'},
  {totalFolders:'16,225'},
];


function Jumbotron({title="Page Title", categoryId, index, isSearch}) {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(path=>path!=="")
  if(isSearch){
    return(
      <div className='relative py-4 px-4 lg:py-[100px] lg:px-12 bg-bottom bg-fixed' style={{backgroundImage:`url(/images/search-banner.jpg)`}}>
        <div className="absolute inset-0 bg-primary-800 opacity-50"></div>
        <div className='relative z-10'>
          <div className='flex gap-2 text-sm lg:text-base bg-overlay w-fit leading-4 py-1 px-2'>
            <Link href={`/`} className='capitalize text-secondary-400 hover:text-secondary-300 font-bold'>{'Home >>'}</Link>
            {paths.map((path, i)=>(
              <Link key={path} href={i !== paths.length -1 ? `/${path}` : ""} className={`capitalize font-bold ${i !== paths.length -1 ? "text-secondary-400 hover:text-secondary-300" :"text-white"}`}>{path}</Link>
            ))}
          </div>
          <div className='text-center text-white'>
            <h2 className='text-xl lg:text-4xl font-semibold mt-6'>{title}</h2>
          </div>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className='relative py-4 px-4 lg:py-[100px] lg:px-12 bg-bottom bg-fixed bg-cover bg-no-repeat' style={{backgroundImage:`url(/images/islamic-banner.jpg)`}}>
        <div className="absolute inset-0 bg-primary-800 opacity-50"></div>
        <div className='relative z-10'>
          <div className='flex gap-2 text-sm lg:text-base bg-overlay w-fit leading-4 py-1 px-2'>
            <Link href={`/`} className='capitalize text-secondary-400 hover:text-secondary-300 font-bold'>{'Home >>'}</Link>
            {paths.map((path, i)=>(
              <Link key={path} href={i !== paths.length -1 ? `/${path}` : ""} className={`capitalize font-bold ${i !== paths.length -1 ? "text-secondary-400 hover:text-secondary-300" :"text-white"}`}>{path}</Link>
            ))}
          </div>
          <div className='text-center text-white'>
            <h2 className='text-xl lg:text-4xl font-semibold mt-6'>{title}</h2>
            <h3 className='text-sm lg:text-xl mb-4'>{index && filesMetaData[index] ? filesMetaData[index].totalFolders + " items" : "Total metadata not available"}</h3>
            {/* <div className='text-lg mb-1'>Sort by</div>
            <div className='w-fit  mx-auto flex gap-4 flex-wrap justify-center text-primary bg-overlay-dark font-medium leading-4 p-2'>

              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}`} className='underline hover:text-primary-700'>All</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=a`} className='underline hover:text-primary-700'>A</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=b`} className='underline hover:text-primary-700'>B</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=c`} className='underline hover:text-primary-700'>C</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=d`} className='underline hover:text-primary-700'>D</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=e`} className='underline hover:text-primary-700'>E</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=f`} className='underline hover:text-primary-700'>F</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=g`} className='underline hover:text-primary-700'>G</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=h`} className='underline hover:text-primary-700'>H</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=i`} className='underline hover:text-primary-700'>I</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=j`} className='underline hover:text-primary-700'>J</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=k`} className='underline hover:text-primary-700'>K</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=l`} className='underline hover:text-primary-700'>L</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=m`} className='underline hover:text-primary-700'>M</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=n`} className='underline hover:text-primary-700'>N</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=o`} className='underline hover:text-primary-700'>O</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=p`} className='underline hover:text-primary-700'>P</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=q`} className='underline hover:text-primary-700'>Q</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=r`} className='underline hover:text-primary-700'>R</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=s`} className='underline hover:text-primary-700'>S</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=t`} className='underline hover:text-primary-700'>T</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=u`} className='underline hover:text-primary-700'>U</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=v`} className='underline hover:text-primary-700'>V</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=w`} className='underline hover:text-primary-700'>W</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=x`} className='underline hover:text-primary-700'>X</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=y`} className='underline hover:text-primary-700'>Y</Link>
              <Link href={`/subcategory?categoryId=${categoryId}&categoryName=${title}&filterBy=z`} className='underline hover:text-primary-700'>Z</Link>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron