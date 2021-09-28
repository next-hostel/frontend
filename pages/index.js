import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  Navbar  from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import  'reactstrap';


export default function Home() {
  
  return (
    <>
    <div className="">
      <div className=""><Navbar/></div>
      <div className=""><SearchBar /></div>


      
    </div>
    


    </>
  )
}
