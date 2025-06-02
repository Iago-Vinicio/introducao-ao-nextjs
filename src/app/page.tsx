import NavBar from "@/components/NavBar";




export default function Home() {
  return (
    <div className=" ">

      <NavBar links={
        [
          {label:'Inicio', href:'/'},
          {label:'Sobre Nós', href:'/about'},
          {label:'Produtos', href:'/product'}
        ]
        }/>
    

    </div>
  );
}
